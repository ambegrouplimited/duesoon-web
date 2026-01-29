import { PiSirenFill } from "react-icons/pi";

export default function RealityAwkward() {
  return (
    <section className='section'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10 mt-20">

        {/*Reality Card */}
        <div
          className="rounded-3xl bg-linear-to-br from-black via-[#4C4A4A] to-black text-white px-8 sm:px-12 py-12 sm:py-16 text-center shadow-xl">
          <p className="text-[20px] font-medium opacity-70 mb-4">
            The Reality.
          </p>

          <h2 className="text-2xl sm:text-5xl lg:text-[50px] font-semibold max-w-3xl mx-auto leading-tight">
            72% of freelancers lose revenue waiting for client payments.
          </h2>

          <p className="mt-6 text-[18px] sm:text-[18px] font-medium max-w-2xl mx-auto">
            When gigs go unpaid, it's not about forgetfulness,
            it’s about competing priorities. DueSoon puts your payment
            back in their inbox at the right time.
          </p>
        </div>

        {/* Awkward Card */}
        <div className="rounded-3xl border border-gray-200 bg-white px-6 sm:px-12 py-10 flex flex-col sm:flex-row gap-6 sm:gap-8 text-center sm:text-left">
          <div className="flex items-center justify-center text-black mx-auto sm:mx-0">
            <PiSirenFill className="text-3xl sm:text-4xl"/> 
          </div>
        <div>
            <h3 className="text-2xl sm:text-[40px] font-semibold mb-3">The Awkward Part.</h3>
          <div className="space-y-4 text-sm sm:text-[18px] text-gray-600 ">
            <p>Chasing clients for payment feels unprofessional. You built something great, you shouldn't have to hunt them down to get paid.</p>
            <p>That uncomfortable follow-up text, email, or call? It damages relationships and erodes your confidence as a professional.</p>
            <p>DueSoon removes the awkwardness. Let your clients remember, naturally and professionally.</p>
          </div>

          </div>
        </div>

      </div>
    </section>
  )
}
