export default function FeelingCard({icon:Icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-items-start gap-3 rounded-4xl border px-6 py-4 text-sm lg:text-2xl w-40 h-25 sm:w-65 sm:h-30 font-medium transition${ active ? "border-black bg-gray-100": "border-gray-200 hover:bg-gray-50"}`}>
      <span className="flex h-10 w-10 sm:h-15 sm:w-15 items-center justify-center rounded-lg bg-gray-200">
        <Icon />
      </span>
      
      {label}
    </button>
  );
}
