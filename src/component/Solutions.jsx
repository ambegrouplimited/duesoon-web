import Card from "../ui/Card";
import { solutions } from "../data/solutions";


export default function Solutions() {
  return (
    <section className="section py-16 px-4 sm:px-8 lg:px-20 text-center">
        <p className="text-muted text-sm sm:text-2xl">Our Solution.</p>
        <h1 className="font-bold text-[30px] sm:text-[50px] mb-10">Why you should use DueSoon?</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto text-left">
        {solutions.map((solution) => (
          <Card
            key={solution.id}
            icon={solution.icon}
            title={solution.title}
            description={solution.description} />
        ))}
      </div>
    </section>
  );
}
