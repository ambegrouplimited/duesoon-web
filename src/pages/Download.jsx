import Button from "../ui/Button";
import messages from "../assets/messages.png";
import delivery from "../assets/delivery.png";
import { FaApple } from "react-icons/fa";
import playstore from "../assets/icons/google_play.svg";
import { useAndroidModal } from "../context/AndroidModalContext.jsx";


export default function Download() {
  const { openModal: openAndroidModal } = useAndroidModal();

  return (
    <section className="w-full px-4 scroll-mt-32 my-30 md:px-8 py-12" id="download">
      <div className="relative z-0 mx-auto max-w-7xl h-100 rounded-3xl bg-linear-to-br from-black via-[#4c4a4a] to-black overflow-visible">
        {/* Content Wrapper */}
        <div className="relative z-10 h-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-40 px-4 sm:px-8 md:px-12 py-6">
          
          {/* Left: App Screenshots */}
          <div className="relative  hidden md:flex justify-center lg:justify-start">
            <div className="relative -top-35 -left-45 z-20 rotate-[-13.1deg]">
              <img src={delivery} alt="" srcset="" className="max-w-150 lg:max-w-187.5 xl:max-w-225 h-auto object-contain"/>
            </div>

            <div className="absolute -top-28  z-10 rotate-[16.93deg]">
              <img src={messages} alt="" srcset="" className="max-w-150 lg:max-w-187.5 xl:max-w-225 h-auto object-contain"/>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="text-white text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Download <br /> DueSoon Now!
            </h2>

            <p className="mt-4 text-sm md:text-[18px] text-white leading-relaxed">
              Stop chasing payments, avoid awkward follow-ups, and take control
              of your freelance income. Get DueSoon today and start sending
              professional reminders automatically.
            </p>

            {/* Store Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 ">
                      <Button className='flex gap-4 items-center border border-white/15 w-full sm:w-56 lg:w-57.25 h-fit justify-center sm:justify-start'>
                          <FaApple className='h-8 w-8'/>
                          <div className='text-left text-sm sm:text-[22px] font-medium'>
                          <span className='text-[12px]'>Download the app on</span><br />
                          Apple Store 
                          </div>
                      </Button>
          
                    <Button
                      onClick={openAndroidModal}
                      className="flex gap-4 items-center border border-white/25 w-full sm:w-56 lg:w-57.25 h-fit justify-center sm:justify-start"
                    >
                          <img src={playstore} alt="playstore logo" srcset="" className='h-8 w-8' />
                          <div className='text-left text-sm sm:text-[22px] font-medium'>
                          <span className='text-[12px]'>Get app on</span><br />
                          Google Play 
                          </div>
                      </Button>
              </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
