import Security from "../component/Security"
import ReviewsSection from "../component/ReviewSection"
import PricingSection from "../component/PricingSection"
import FAQSection from "../component/FAQSection"
import Connections from "../component/Connections"

export default function Pricing(){
    return (
        <section className="scroll-mt-32">
            <Security />
            <Connections />
            <ReviewsSection />
            <div id="pricing" className="scroll-mt-32">
                <PricingSection />
            </div>
            <div id="faqs" className="scroll-mt-32">
                <FAQSection />
            </div>
        </section>
    )
}
