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
        className="flex w-full flex-nowrap items-start justify-between"
      >
        <span className=" text-sm">{question}</span>
        {tabOpen ? (
          <RiArrowDropDownFill className="rotate-180 text-xl" />
        ) : (
          <RiArrowDropDownFill className="rotate-0 text-xl transition" />
        )}
      </button>
      <div
        className={`text-text grid overflow-hidden text-sm opacity-90 transition-all duration-300 ease-in-out ${tabOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden ">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
