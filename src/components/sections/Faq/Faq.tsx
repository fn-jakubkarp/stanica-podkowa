import Accordion from "../../UI/Accordion/Accordion";
interface FaqProps {}

const Faq: React.FC<FaqProps> = ({}) => {
  return (
    <>
      <section
        id="faq"
        className="flex flex-col w-screen mt-4 p-4 justify-center gap-4 bg-accent"
      >
        <h3 className="text-3xl pb-2">Najczęściej zadawane pytania</h3>
        <Accordion
          question="Czy termin jest dostępny?"
          answer="Zadzwoń i zapytaj"
        />
        <Accordion
          question="Czy można zoorganizować u Państwa wieczór kawalerski?"
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
