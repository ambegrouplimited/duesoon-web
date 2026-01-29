import phone1 from '/src/assets/phone1.png'
import Button from '../ui/Button'
import RealityAwkward from './Reality'
import { FaStar, FaApple ,FaStarHalfAlt, FaRegStar } from 'react-icons/fa'
import playstore from '../assets/icons/google_play.svg'
import { useWebAppSummary } from '../context/WebAppSummaryContext.jsx'
import { useAndroidModal } from '../context/AndroidModalContext.jsx'

function RatingStars({ rating, max = 5 }) {
  return (
    <div className="flex gap-1 text-yellow-400 text-[15px] md:text-2xl">
      {Array.from({ length: max }).map((_, index) => {
        const value = index + 1
        if (rating >= value) {
          return <FaStar key={index} />
        }
        if (rating >= value - 0.5) {
          return <FaStarHalfAlt key={index} />
        }
        return <FaRegStar key={index} />
      })}
    </div>
  )
}

export default function Hero() {
  const { summary } = useWebAppSummary()
  const { openModal: openAndroidModal } = useAndroidModal()
  const rating = summary?.rating ?? 4.8
  const reviewsCount = summary?.reviews_count ?? 100
  const formattedReviews = Number(reviewsCount).toLocaleString('en-US')

  return (
    <section className="section mt-26 px-4 sm:px-10 lg:mt-40" id="home">
     <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 relative left-0 md:left-32 lg:left-32">
      <div className='w-full lg:max-w-2xl text-center lg:text-left'>
        <h1 className="h1 text-4xl md:text-[70px] text-transparent bg-linear-to-br from-black via-5% to-[#666666] bg-clip-text">
          Get paid without <br />awkward <br /> follow-ups.
        </h1>

        <p className="mt-6 muted text-base sm:text-[20px] font-medium leading-relaxed">
          DueSoon automatically reminds your clients to pay you on time, so you can focus on what matters most.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
            <Button className='flex gap-4 items-center w-full sm:w-54 lg:w-60 h-fit'>
                <FaApple className='h-8 w-8'/>
                <div className='text-left text-xl sm:text-2xl font-medium'>
                <span className='text-[12px] uppercase tracking-wide'>Download on</span><br />
                Apple Store 
                </div>
            </Button>

          <Button className='flex gap-4 items-center w-full sm:w-54 h-fit' onClick={openAndroidModal}>
                <img src={playstore} alt="playstore logo" srcset="" className='h-8 w-8' />
                <div className='text-left text-xl sm:text-2xl font-medium'>
                <span className='text-[12px] uppercase tracking-wide'>Get it on</span><br />
                Google Play 
                </div>
            </Button>
        </div>

        {/* Reviews */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-6 text-sm justify-center lg:justify-start">
          <span className="text-primary font-bold text-4xl sm:text-[50px] leading-none">{rating}</span>
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <RatingStars rating={rating} />
            <span className="muted font-medium text-xs sm:text-base mt-1">Over {formattedReviews}+ reviews</span>
          </div>
        </div>
        </div>

      {/* Phone Image */}
      <div className="flex-1 w-full h-140 flex justify-center lg:justify-end mt-10 lg:mt-0">
        <img
          src={phone1}
          alt="App screenshot"
          className="max-w-120 sm:max-w-150 lg:max-w-187.5 xl:max-w-225 h-auto object-contain"
        />
      </div>

     </div>

     <RealityAwkward />
    </section>
  )
}
