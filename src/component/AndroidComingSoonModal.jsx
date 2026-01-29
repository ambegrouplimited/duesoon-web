import Button from "../ui/Button";

export default function AndroidComingSoonModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-md rounded-3xl bg-[#111111] px-6 py-8 text-white shadow-2xl">
        <button
          aria-label="Close Android info"
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl text-white/60 hover:text-white"
        >
          &times;
        </button>
        <p className="text-sm uppercase tracking-wide text-white/60">coming soon</p>
        <h3 className="mt-2 text-2xl font-bold text-white">Android build in progress</h3>
        <p className="mt-3 text-base text-white/70">
          We&apos;re polishing the Android experience right now. Check back shortly and we&apos;ll have it ready
          for you.
        </p>
        <Button onClick={onClose} className="mt-6 w-full bg-white! text-black! hover:opacity-90">
          Back to site
        </Button>
      </div>
    </div>
  );
}
