import Accordion from "../../UI/Accordion/Accordion";
interface FaqProps {}

const Faq: React.FC<FaqProps> = ({}) => {
  return (
    <>
      <section
        id="faq"
        className="mt-4 flex w-screen flex-col justify-center gap-4 p-4"
      >
        <h3 className="pb-2 text-2xl">Najczęściej zadawane pytania</h3>
        <Accordion
          question="Czy termin jest dostępny?"
          answer="Zadzwoń i zapytaj"
        />
        <Accordion
          question="Czy można zoorganizować wieczór kawalerski?"
          answer="Nie."
        />
        <Accordion
          question="Czy można przyjechac do Państwa z psem?"
          answer="Nie."
        />
        <Accordion
          question="Czy sauna i balia jest w cenie noclegu?"
          answer="Sauna i balia są odpłatne osobno"
        />
      </section>
    </>
  );
};

export default Faq;
