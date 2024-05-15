import { useState } from "react";
import { RiArrowDropDownFill } from "react-icons/ri";

interface AccordionProps {
  question: string;
  answer: string;
}

const Accordion: React.FC<AccordionProps> = ({ question, answer }) => {
  const [tabOpen, setTabOpen] = useState(false);

  return (
    <div className="py-2">
      <button
        onClick={() => setTabOpen(!tabOpen)}
        className="flex items-start justify-between w-full"
      >
        <span>{question}</span>
        {tabOpen ? (
          <RiArrowDropDownFill className="text-3xl rotate-180" />
        ) : (
          <RiArrowDropDownFill className="transition rotate-0 text-3xl" />
        )}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-text opacity-90 text-sm ${tabOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
