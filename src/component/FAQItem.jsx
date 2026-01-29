export function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="rounded-xl border overflow-hidden">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between p-4 text-left text-sm sm:text-[20px] font-medium"
      >
        {question}
        <span className="text-xl">{isOpen ? "−" : "+"}</span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden px-4 pb-4 text-sm sm:text-[20px] text-gray-600">
          {answer}
        </div>
      </div>
    </div>
  );
}
