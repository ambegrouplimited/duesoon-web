export default function HowStepCard({
  step,
  title,
  description,
  image,
  rotate,
  className = "",
  imageWrapperClassName = "",
  imageClassName = "",
  textAtBottom = false,
}) {
  return (
    <div className="relative">
      <span className="absolute -top-32 left-6 text-[128px] text-stroke-white font-bold select-none pointer-events-none z-20">
        {step}
      </span>

      <div
        className={`relative bg-white rounded-3xl overflow-hidden pt-14 shadow-sm h-165 w-100 flex flex-col ${className}`}>
        
        <div className={`flex flex-col ${textAtBottom ? 'flex-col-reverse' : ''}`}>
          {/* title & content */}
          <div className={`${textAtBottom ? "mt-auto px-8 pb-8 relative -top-70" : "px-8"} z-10`}>
            <h3 className="text-lg sm:text-2xl font-semibold text-black leading-snug">
              {title}
            </h3>

            <p className="mt-2 text-sm sm:text-lg text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>

          {/* image */}
          {image && (
            <div
              className={`${textAtBottom ? 'mt-8' : 'mt-8'} relative overflow-hidden ${rotate || ""} ${imageWrapperClassName}`}
            >
              <img
                src={image}
                alt={title}
                className={`${imageClassName}`}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}