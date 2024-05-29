import { useState } from "react";
import { RiArrowDropDownFill } from "react-icons/ri";

interface AccordionProps {
  question: string;
  answer: string;
}

const Accordion: React.FC<AccordionProps> = ({ question, answer }) => {
  const [tabOpen, setTabOpen] = useState(false);

  return (
    <div className="">
      <button
        onClick={() => setTabOpen(!tabOpen)}
        className="flex w-full flex-nowrap items-start justify-between"
      >
        <span className="text-left text-xl">{question}</span>
        {tabOpen ? (
          <RiArrowDropDownFill className="rotate-180 text-xl" />
        ) : (
          <RiArrowDropDownFill className="rotate-0 text-xl transition" />
        )}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${tabOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden pt-4 text-xl">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
