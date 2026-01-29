import { FaCheck, FaApple } from "react-icons/fa";
import playstore from "../assets/icons/google_play.svg";
import Button from "../ui/Button";
import { useWebAppSummary } from "../context/WebAppSummaryContext.jsx";
import { useAndroidModal } from "../context/AndroidModalContext.jsx";
import { formatUsd } from "../utils/currency.js";

export default function PricingSection() {
  const { summary } = useWebAppSummary();
  const { openModal: openAndroidModal } = useAndroidModal();
  const monthlyPrice = summary?.monthly_price ?? 9.99;
  const formattedPrice = formatUsd(monthlyPrice);

  return (
    <section className="section py-24 text-center px-4 sm:px-8">
      <p className="text-muted text-sm sm:text-2xl">Affordable Pricing.</p>
      <h1 className="font-bold text-[30px] sm:text-[50px] mb-10">
        Start getting paid faster today.
      </h1>

      <div className="mt-12 mx-4 md:mx-auto max-w-5xl grid gap-8 sm:gap-0 lg:grid-cols-2">
        {/* Price card */}
        <div className="rounded-3xl md:rounded-none md:rounded-l-3xl bg-black flex text-left flex-col justify-center text-white p-10">
          <p className="text-2xl sm:text-7xl font-bold">
            {formattedPrice} <span className="text-sm sm:text-2xl">/month</span>
          </p>
          <p className="mt-1 text-sm sm:text-[18px] text-gray-300">
            Per month, cancel anytime.
          </p>

          <p className="mt-6 text-sm sm:text-[18px] text-gray-300">
            Start your first month free. After that, continue for just{" "}
            {formattedPrice}/month and keep getting automated payment reminders.
          </p>
        </div>

        {/* Features */}
        <div className="rounded-3xl md:rounded-none md:rounded-r-3xl border p-10">
          <ul className="space-y-3 text-sm sm:text-[18px]">
            {[
              "Everything in Free",
              "Multi-platform messaging",
              "Priority support",
              "All messaging platforms included",
              "Unlimited clients",
              "Advanced analytics",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <FaCheck className="text-green-600" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 ">
            <Button className="flex gap-4 items-center w-fit sm:w-56 lg:w-57.25 h-fit ">
              <FaApple className="h-8 w-8" />
              <div className="text-left text-sm sm:text-[22px] font-medium">
                <span className="text-[12px]">Download the app on</span>
                <br />
                Apple Store
              </div>
            </Button>

            <Button className="flex gap-4 items-center sm:w-56 h-fit" onClick={openAndroidModal}>
              <img
                src={playstore}
                alt="playstore logo"
                srcset=""
                className="h-8 w-8"
              />
              <div className="text-left text-sm sm:text-[22px] font-medium">
                <span className="text-[12px]">Get app on</span>
                <br />
                Google Play
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
