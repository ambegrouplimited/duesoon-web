export function ReviewCard({ quote, name, role, tilted }) {
  return (
    <div
      className={`relative rounded-2xl border bg-white p-6 shadow-sm max-w-sm
        ${tilted === "left" && "-rotate-10"}
        ${tilted === "right" && "rotate-10"}
      `}
    >
      <span className="absolute -top-4 left-4 text-6xl text-gray-200">“</span>

      <p className="text-sm text-gray-700 leading-relaxed">{quote}</p>

      <div className="mt-6 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gray-200" />
        <div>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
}
