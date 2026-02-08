import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const APP_ID = import.meta.env.VITE_WHATSAPP_APP_ID;
const CONFIG_ID = import.meta.env.VITE_WHATSAPP_CONFIG_ID;
const GRAPH_VERSION = import.meta.env.VITE_WHATSAPP_GRAPH_VERSION ?? "v24.0";
const SESSION_INFO_VERSION = import.meta.env.VITE_WHATSAPP_SESSION_VERSION ?? "3";
const FALLBACK_REDIRECT = import.meta.env.VITE_WHATSAPP_FALLBACK_REDIRECT ?? "";
const SDK_SRC = "https://connect.facebook.net/en_US/sdk.js";
const FINISH_EVENTS = new Set([
  "FINISH",
  "FINISH_ONLY_WABA",
  "FINISH_WHATSAPP_BUSINESS_APP_ONBOARDING",
]);

const loadFacebookSdk = () =>
  new Promise((resolve, reject) => {
    if (window.FB) {
      resolve(window.FB);
      return;
    }
    const scriptId = "facebook-jssdk";
    const existing = document.getElementById(scriptId);
    if (existing) {
      existing.addEventListener("load", () => {
        if (window.FB) {
          resolve(window.FB);
        } else {
          reject(new Error("Facebook SDK failed to initialize."));
        }
      });
      existing.addEventListener("error", () =>
        reject(new Error("Unable to load Facebook SDK."))
      );
      return;
    }
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: APP_ID,
        autoLogAppEvents: true,
        xfbml: true,
        cookie: true,
        version: GRAPH_VERSION,
      });
      resolve(window.FB);
    };
    const script = document.createElement("script");
    script.id = scriptId;
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    script.src = SDK_SRC;
    script.onerror = () =>
      reject(new Error("Unable to load Facebook SDK script."));
    document.body.appendChild(script);
  });

function encodePayload(value) {
  if (!value) {
    return null;
  }
  try {
    return window.btoa(unescape(encodeURIComponent(JSON.stringify(value))));
  } catch {
    return null;
  }
}

function mergeQuery(url, params) {
  if (!url) return "";
  try {
    const parsed = new URL(url);
    params.forEach((value, key) => {
      parsed.searchParams.set(key, value);
    });
    return parsed.toString();
  } catch {
    const prefix = url.includes("?") ? "&" : "?";
    return `${url}${prefix}${params.toString()}`;
  }
}

export default function WhatsAppConnect() {
  const configMissing = !APP_ID || !CONFIG_ID;
  const [status, setStatus] = useState(() =>
    configMissing ? "Configuration error." : "Loading WhatsApp Embedded Signup…"
  );
  const [error, setError] = useState(() =>
    configMissing
      ? "WhatsApp configuration missing. Please set VITE_WHATSAPP_APP_ID and VITE_WHATSAPP_CONFIG_ID."
      : null
  );
  const [manualPayload, setManualPayload] = useState(null);
  const [sdkReady, setSdkReady] = useState(false);
  const codeRef = useRef(null);
  const resultRef = useRef(null);
  const completedRef = useRef(false);

  const searchParams = useMemo(
    () => new URLSearchParams(window.location.search),
    []
  );
  const stateParam = searchParams.get("state") ?? "";
  const redirectUri =
    searchParams.get("redirect_uri") ??
    searchParams.get("return_uri") ??
    FALLBACK_REDIRECT;

const TRUSTED_FACEBOOK_HOSTS = ["facebook.com", "fb.com", "facebook.net", "fbcdn.net", "whatsapp.com"];

const isTrustedFacebookOrigin = (origin) => {
  try {
    const parsed = new URL(origin);
    return TRUSTED_FACEBOOK_HOSTS.some((host) =>
      parsed.hostname === host || parsed.hostname.endsWith(`.${host}`)
    );
  } catch {
    return false;
  }
};

const logDebug = (...args) => {
    console.log("[WhatsAppConnect]", ...args);
  };

  const schedule = useCallback((cb) => {
    if (typeof queueMicrotask === "function") {
      queueMicrotask(cb);
    } else {
      Promise.resolve().then(cb);
    }
  }, []);

  const finalizeSuccess = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    const payload = resultRef.current;
    const code = codeRef.current;
    if (!payload || !code) {
      setError("Missing WhatsApp data. Please retry.");
      setManualPayload(payload);
      return;
    }
    const query = new URLSearchParams();
    if (stateParam) query.set("state", stateParam);
    query.set("event", payload.event ?? "FINISH");
    query.set("code", code);
    if (payload.data?.waba_id) {
      query.set("waba_id", payload.data.waba_id);
    }
    if (payload.data?.phone_number_id) {
      query.set("phone_number_id", payload.data.phone_number_id);
    }
    if (payload.data?.business_id) {
      query.set("business_id", payload.data.business_id);
    }
    const encoded = encodePayload(payload.data);
    if (encoded) {
      query.set("meta", encoded);
    }
    const destination = mergeQuery(redirectUri, query);
    if (destination) {
      window.location.replace(destination);
    } else {
      setManualPayload({
        code,
        ...payload.data,
      });
    }
  }, [redirectUri, stateParam]);

  const finalizeCancel = useCallback(
    (payload) => {
      if (completedRef.current) return;
      completedRef.current = true;
      const query = new URLSearchParams();
      if (stateParam) query.set("state", stateParam);
      query.set("event", payload?.event ?? "CANCEL");
      if (payload?.data?.current_step) {
        query.set("current_step", payload.data.current_step);
      }
      if (payload?.data?.error_id) {
        query.set("error_id", payload.data.error_id);
      }
      if (payload?.data?.error_message) {
        query.set("error_message", payload.data.error_message);
      }
      const destination = mergeQuery(redirectUri, query);
      if (destination) {
        window.location.replace(destination);
      } else {
        setManualPayload({ event: payload?.event ?? "CANCEL" });
      }
    },
    [redirectUri, stateParam]
  );

  const attemptFinalize = useCallback(() => {
    if (completedRef.current) return;
    const payload = resultRef.current;
    const code = codeRef.current;
    if (!payload) {
      logDebug("Waiting for WA_EMBEDDED_SIGNUP payload…");
      return;
    }
    if (!code) {
      logDebug("Waiting for authResponse code…");
      return;
    }
    if (!FINISH_EVENTS.has(payload.event)) {
      logDebug("Received payload but event is not FINISH yet:", payload.event);
      return;
    }
    logDebug("Finalizing WhatsApp signup with payload", payload);
    setStatus("Wrapping up…");
    finalizeSuccess();
  }, [finalizeSuccess]);

  const handleMessageEvent = useCallback(
    (event) => {
      if (!isTrustedFacebookOrigin(event.origin)) {
        logDebug("Ignoring message from", event.origin);
        return;
      }
      let payload = event.data;
      if (typeof payload === "string") {
        try {
          payload = JSON.parse(payload);
        } catch {
          payload = null;
        }
      }
      if (!payload || payload.type !== "WA_EMBEDDED_SIGNUP") {
        return;
      }
      logDebug("Received WA_EMBEDDED_SIGNUP event", payload);
      resultRef.current = payload;
      if (payload.event === "CANCEL" || payload.event === "ERROR") {
        setStatus("WhatsApp signup was canceled.");
        finalizeCancel(payload);
        return;
      }
      if (FINISH_EVENTS.has(payload.event)) {
        setStatus("Received WhatsApp IDs. Waiting for Meta token…");
        attemptFinalize();
      }
    },
    [attemptFinalize, finalizeCancel]
  );

  useEffect(() => {
    window.addEventListener("message", handleMessageEvent);
    return () => window.removeEventListener("message", handleMessageEvent);
  }, [handleMessageEvent]);

  const fbLoginCallback = useCallback(
    (response) => {
      if (response?.authResponse?.code) {
        logDebug("Received authResponse code");
        codeRef.current = response.authResponse.code;
        setStatus("Received Meta authorization code.");
        attemptFinalize();
      } else if (!completedRef.current) {
        logDebug("authResponse missing code", response);
        setError("Facebook login failed or was canceled.");
        setStatus("Unable to continue WhatsApp signup.");
      }
    },
    [attemptFinalize]
  );

  const launchSignup = useCallback(() => {
    if (!window.FB) {
      setError("Facebook SDK is not available.");
      return;
    }
    setStatus("Opening WhatsApp Embedded Signup…");
    setError(null);
    completedRef.current = false;
    codeRef.current = null;
    resultRef.current = null;
    const extras = { setup: {} };
    if (SESSION_INFO_VERSION) {
      extras.sessionInfoVersion = `${SESSION_INFO_VERSION}`;
    }
    window.FB.login(fbLoginCallback, {
      config_id: CONFIG_ID,
      response_type: "code",
      override_default_response_type: true,
      extras,
    });
  }, [fbLoginCallback]);

  useEffect(() => {
    if (configMissing) {
      return;
    }
    let cancelled = false;
    loadFacebookSdk()
      .then(() => {
        if (!cancelled) {
          setSdkReady(true);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message);
          setStatus("Unable to load Facebook SDK.");
        }
      });
    return () => {
      cancelled = true;
    };
  }, [configMissing]);

  useEffect(() => {
    if (configMissing || !sdkReady) {
      return;
    }
    if (stateParam && !completedRef.current) {
      schedule(() => launchSignup());
      return;
    }
    if (!stateParam) {
      schedule(() =>
        setError("Missing onboarding state. Relaunch the connection from the app.")
      );
    }
  }, [configMissing, launchSignup, schedule, sdkReady, stateParam]);

  return (
    <main className="wa-wrapper">
      <section className="wa-card">
        <h1>Connect WhatsApp</h1>
        <p className="wa-status">{status}</p>
        {error ? <p className="wa-error">{error}</p> : null}
        <button className="wa-button" onClick={launchSignup} disabled={!sdkReady}>
          {sdkReady ? "Relaunch WhatsApp Signup" : "Loading…"}
        </button>
        <p className="wa-note">
          Keep this tab open until we redirect you back to the DueSoon app. If the
          window closes unexpectedly, tap the button above to resume.
        </p>
        {manualPayload ? (
          <div className="wa-manual">
            <h2>Manual data</h2>
            <pre>{JSON.stringify(manualPayload, null, 2)}</pre>
          </div>
        ) : null}
      </section>
    </main>
  );
}
