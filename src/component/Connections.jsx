import { PlatformPill } from "./PlatformPill";
import gmail from '../assets/icons/gmail.svg'
import outlook from '../assets/icons/outlook.svg'
import whatsapp from '../assets/icons/whatsapp.svg'
import telegram from '../assets/icons/telegram.svg'
import slack from '../assets/icons/slack.svg'

export default function Connections() {
  return (
    <section className="section py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-black via-[#4c4a4a] to-black text-white p-8 sm:p-12 md:p-16">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            
            {/* Left content */}
            <div className="max-w-xl">
              <p className="text-sm text-gray-300">
                Let’s talk Connections.
              </p>

              <h2 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight">Meet Your Clients <br />Where They <br />Already Are.</h2>

              <p className="mt-6 text-gray-300 text-sm sm:text-base leading-relaxed">
                Send payment reminders across the platforms your clients actually use email, chat apps, and team tools, without repeating yourself or chasing anyone down.</p>
            </div>

            {/* Right platforms */}
            <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto lg:ml-auto">
              <PlatformPill label="Gmail" logo={gmail}/>
              <PlatformPill label="Outlook" logo={outlook}/>
              <PlatformPill label="WhatsApp" logo={whatsapp}/>
              <PlatformPill label="Telegram" logo={telegram}/>
              <PlatformPill label="Slack" logo={slack}/>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
