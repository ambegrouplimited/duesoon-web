# DueSoon Web

This Vite + React app powers the marketing site and utility flows (client checkout, WhatsApp embedded signup, etc.).

## WhatsApp Embedded Signup

Meta requires the Facebook JavaScript SDK to run inside an HTTPS origin that is whitelisted in the App Dashboard. We host the helper UI at `/whatsapp/connect`, which:

- loads the JS SDK
- calls the Embedded Signup `config_id`
- captures the `WA_EMBEDDED_SIGNUP` session payload + `authResponse.code`
- deep-links or redirects back to the native app/backend with the collected IDs.

### Environment variables

Add these to your `.env` file (prefixed with `VITE_` so Vite can expose them):

| Variable | Description |
| --- | --- |
| `VITE_WHATSAPP_APP_ID` | Meta App ID used by the JS SDK |
| `VITE_WHATSAPP_CONFIG_ID` | Facebook Login for Business configuration created from the WhatsApp Embedded Signup template |
| `VITE_WHATSAPP_GRAPH_VERSION` | Optional (defaults to `v24.0`) |
| `VITE_WHATSAPP_FALLBACK_REDIRECT` | Where to send a customer if no `redirect_uri` query is provided (e.g., `https://api.duesoon.net/api/oauth/mobile-redirect`) |

Make sure every domain that serves the Vite app is listed under **Valid OAuth Redirect URIs** and **Allowed Domains for the JavaScript SDK** inside the Meta App Dashboard.

## Development

Install dependencies then start Vite:

```bash
npm install
npm run dev
```

## Linting

```bash
npm run lint
```
