export function PlatformPill({ label, logo }) {
  return (
    <div className="flex items-center gap-1 rounded-4xl w-35 sm:w-50 sm:h-20 bg-white/10 backdrop-blur px-4 py-3 border border-white/10 transition hover:bg-white/15">
      {/* Icon placeholder */}
      <div className="h-8 sm:h-15 w-8 sm:w-15 rounded-full bg-white flex items-center justify-center">
        <img src={logo} alt="" srcset="" className="h-4 w-4 sm:h-8 sm:w-8"/>
      </div>

      <span className="text-sm sm:text-xl font-medium">
        {label}.
      </span>
    </div>
  );
}
