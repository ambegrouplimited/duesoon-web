import { useEffect, useState } from "react";
import { reviews } from "../data/reviews";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

export default function ReviewsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % reviews.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section py-24 text-center overflow-hidden px-4 sm:px-8">
      <p className="text-muted text-sm sm:text-2xl">Our Reviews.</p>
      <h1 className="font-bold text-[30px] sm:text-[50px] mb-10">Loved By Freelancers.</h1>

      {/* Is it Slideshow 😂 */}
      <div className="relative mt-12 h-auto">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="min-w-full flex justify-center px-6"
            >
              <div className="max-w-md rounded-2xl border bg-white p-6 shadow-sm">
                <span className="text-6xl text-gray-200"><BiSolidQuoteAltLeft /></span>
                <p className="mt-2 text-sm sm:text-2xl text-left text-black font-semibold">
                  {review.quote}
                </p>

                <div className="mt-6 flex flex-col items-center gap-3 justify-center">
                  <img
                        src={review.image}
                        alt={review.name}
                        className="h-15 w-15 rounded-full object-cover"
                    />
                  <div>
                    <p className="text-sm sm:text-2xl font-semibold text-black">{review.name}</p>
                    <p className="text-xs sm:text-[20px] text-gray-500">{review.role}</p>
                  </div>
                </div>
                

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-black" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
