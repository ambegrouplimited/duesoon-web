import { useState } from "react";
import { feelings } from "../data/feelings";
import FeelingCard from "./FeelingCard";
import payment from '../assets/payment.png'

export default function Feelings() {
  const [active, setActive] = useState(feelings[0]);

  return (
    <section className="section py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-muted text-sm sm:text-[20px]">Tone Matters.</p>
        <h2 className="font-bold text-[30px] sm:text-[50px] mb-10">Full control over how your reminders sound.</h2>

        {/* Feeling cards */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-8">
          {feelings.map((feeling) => (
            <FeelingCard
              key={feeling.id}
              icon={feeling.icon}
              label={feeling.label}
              active={active.id === feeling.id}
              onClick={() => setActive(feeling)}
            />
          ))}
        </div>

        {/* Sample message */}
        <div className="mt-6 mx-auto max-w-sm sm:max-w-3xl rounded-4xl border bg-white p-6 sm:p-10 text-left text-sm text-gray-600">
          <p className="font-medium text-xl sm:text-2xl text-gray-900 mb-2">Sample Message</p>
          <p className="text-xl sm:text-2xl leading-relaxed">“{active.message}”</p>
        </div>
      </div>

      {/* Freelancer section */}
      <div className="mt-16 sm:mt-24 max-w-6xl mx-auto px-4 sm:px-6 grid gap-8 sm:gap-12 lg:grid-cols-2 items-start">
        {/* BIG image placeholder */}
        <div className="w-full h-135 hidden lg:flex items-center justify-center">
          <img src={payment} alt="App screenshot"  className="max-w-150 lg:max-w-187.5 xl:max-w-225 h-auto object-contain" />
        </div>

        {/* Content */}
        <div className="text-center lg:text-left">
          <h2 className="font-bold text-[30px] sm:text-[50px]">Built for Freelancers.</h2>

          <p className="mt-4 text-sm sm:text-[20px] text-gray-600">Manage your payments from anywhere. Whether you’re on a client call, traveling, or working from a café, DueSoon keeps your invoices on track.</p>

          <ul className="mt-6 space-y-4 text-sm list-outside list-disc pl-5 sm:pl-6 text-left mx-auto lg:mx-0">
            <li>
              <h3 className="font-semibold text-sm sm:text-[20px]">Get Started in Under 2 Minutes.</h3>
               <p>Streamline your setup, connect your tools and start using the platform immediately. Fast, simple, and hassle-free, so you can focus on what really matters.</p>
            </li>
            <li>
              <h3 className="font-semibold text-sm sm:text-[20px]">Lightning-Fast Mobile Experience.</h3>
              <p>Navigate, manage, and act on the go with a mobile interface built for speed. Smooth, responsive, and effortless, your workflow, anywhere, instantly.</p>
            </li>
            <li>
              <h3 className="font-semibold text-sm sm:text-[20px]">Seamless Offline Access.</h3>
              <p>Keep working even without internet, and let the platform automatically sync your updates as soon as you’re back online. Productivity that never stops, no matter the connection.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
