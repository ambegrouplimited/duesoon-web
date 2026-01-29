export default function Card({ icon:Icon, title, description }) {
  return (
    <div className="bg-white border border-[#c4c4c4] rounded-3xl p-6 shadow-sm transition hover:shadow-md h-full">
      {/* Card icon Icon */}
      <div className="w-12.5 h-12.5 sm:w-20 sm:h-20 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
        <Icon className="w-7.5 h-7.5 sm:w-12.5 sm:h-12.5 text-black" />
      </div>

      {/* Card Title */}
      <h3 className="text-[18px] sm:text-2xl font-semibold text-gray-900 mb-2">
        {title}
      </h3>

      {/* Crad description */}
      <p className="text-[16px] sm:text-[22px] text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
