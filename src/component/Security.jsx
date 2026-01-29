import Card from "../ui/Card";
import { secutriy } from "../data/security";


export default function Security() {
  return (
    <section className="section py-16 px-4 sm:px-8 lg:px-20 text-center">
        <p className="text-muted text-sm sm:text-[20px]">Let's Talk Security.</p>
        <h1 className="font-bold text-[30px] sm:text-[50px] mb-10">Why you should use DueSoon?</h1>
      <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-3 max-w-5xl mx-auto text-left">
        {secutriy.map((secure) => (
          <Card
            key={secure.id}
            icon={secure.icon}
            title={secure.title}
            description={secure.description} />
        ))}
      </div>
    </section>
  );
}
