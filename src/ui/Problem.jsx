export default function ProblemCard({ icon, text }) {
  return (
    <div className=" flex items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-sm w-full max-w-sm mx-auto">
      <img src={icon} alt="" srcset="" />

      <p className="text-left font-semibold text-sm md:text-2xl text-gray-900">
        {text}
      </p>
    </div>
  );
}
