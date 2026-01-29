import Feelings from "../component/Feelings";
import HowItWorksSection from "../component/HowItWorksSection";

export default function HowItWorks(){
    return(
        <section className="scroll-mt-32" id="howitworks">
            <HowItWorksSection />
            <Feelings />
        </section>
    )
}
