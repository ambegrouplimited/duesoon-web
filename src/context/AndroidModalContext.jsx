import { createContext, useCallback, useContext, useMemo, useState } from "react";
import AndroidComingSoonModal from "../component/AndroidComingSoonModal.jsx";

const AndroidModalContext = createContext();

export function AndroidModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({
      isOpen,
      openModal,
      closeModal,
    }),
    [isOpen, openModal, closeModal],
  );

  return (
    <AndroidModalContext.Provider value={value}>
      {children}
      <AndroidComingSoonModal isOpen={isOpen} onClose={closeModal} />
    </AndroidModalContext.Provider>
  );
}

export function useAndroidModal() {
  const context = useContext(AndroidModalContext);
  if (!context) {
    throw new Error("useAndroidModal must be used within an AndroidModalProvider");
  }
  return context;
}
