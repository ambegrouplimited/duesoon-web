import { problems } from "../data/problems";
import ProblemCard from "../ui/Problem";

export default function Problems() {
    return (
        <section className="section py-16 px-4 sm:px-8 lg:px-20 text-center">
            {/* Problems */}
            <p className="text-muted text-sm sm:text-2xl">Your Problems.</p>
            <h1 className="font-bold text-[30px] sm:text-[50px] mb-10">Tired of Sending awkward reminders?</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
                {problems.map((problems) => (
                        <ProblemCard
                        key={problems.id}
                        icon={problems.icon}
                        text={problems.text} />
                    ))}
                </div>
        </section>
    );
}
