import HowStepCard from "./HowStepCard";
import business from '../assets/business_individual.png'
import schedule from '../assets/schedule.png'
import contact from '../assets/contact.png'


export default function HowItWorks() {
  return (
    <section className="section py-24 ">
      <div className="max-w-max mx-auto">
        <div className="relative mb-45 rounded-3xl h-fit flex flex-col mx-6 sm:mx-auto bg-linear-to-br from-black via-[#4c4a4a] to-black text-white md:h-170 p-10 md:p-16 shadow-2xl">
          {/* Header */}
          <p className="text-sm text-gray-300">
            Three simple steps to get paid.
          </p>

          <h2 className="mt-2 text-3xl md:text-[50px] font-semibold">
            How does DueSoon Work?
          </h2>

          <div className="block md:hidden">
            <ul className="mt-8 space-y-4 text-xl  list-outside list-decimal">
            <li>
              <h3 className="font-bold text-xl sm:text-3xl">Enter Client Detail & amount owed.</h3>
               <p>Add the client’s details along with the exact amount they currently owed.</p>
            </li>
            <li>
              <h3 className="font-bold text-xl sm:text-[20px]">Choose reminder timing & tone.</h3>
              <p>Decide when to remind clients and how firm or friendly the message should be.</p>
            </li>
            <li>
              <h3 className="font-bold text-xl sm:text-[20px]">Pick a platform and let DueSoon handle the rest.</h3>
              <p>Send reminders through the communication channel you already use with your client.</p>
            </li>
          </ul>
          </div>

          {/* Steps */}
          <div className="hidden md:block mt-20">
          <div className="mt-4 grid overflow-visible lg:grid-cols-3">
            <HowStepCard
              step="01"
              title="Enter Client Detail & amount owed."
              description="Add the client’s details along with the exact amount they currently owed."
              image={business}
              imageClassName="relative top-15 -left-38 max-w-150 lg:max-w-187.5 xl:max-w-225 h-auto object-contain"
            />

            <HowStepCard
              step="02"
              title="Choose reminder timing & tone."
              description="Decide when to remind clients and how firm or friendly the message should be."
              image={schedule}
              imageWrapperClassName="-top-50"
              imageClassName="relative -top-30 -left-75 max-w-150 lg:max-w-187.5 xl:max-w-225 h-auto object-contain"
              textAtBottom = {true}
              rotate="lg:rotate-[-23.06deg]"
            />

            <HowStepCard
              step="03"
              title="Pick a platform and let DueSoon handle the rest."
              description="Send reminders through the communication channel you already use with your client."
              imageWrapperClassName="top-10"
              imageClassName="relative top-20 -left-45 max-w-150 lg:max-w-187.5 xl:max-w-225 h-auto object-contain"
              image={contact}
              rotate="rotate-[-15.45deg]"
            />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
