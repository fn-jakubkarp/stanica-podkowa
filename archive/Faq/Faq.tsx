import Accordion from "../Accordion/Accordion";
interface FaqProps {}

const Faq: React.FC<FaqProps> = ({}) => {
  return (
    <>
      <section
        id="faq"
        className="defaultPaddings mx-auto mt-4 flex max-w-screen-xl flex-col justify-center gap-4 p-4"
      >
        <h3 className="flex w-full justify-center pb-2 font-bold md:pb-4 lg:pb-8">
          Najczęściej zadawane pytania
        </h3>
        <Accordion
          question="Czy termin jest dostępny?"
          answer="Prosimy o kontakt telefoniczny, aby sprawdzić dostępność terminu."
        />
        <Accordion
          question="Czy można zoorganizować wieczór kawalerski?"
          answer="Niestety, nie oferujemy możliwości organizacji wieczorów kawalerskich."
        />
        <Accordion
          question="Czy można przyjechac do Państwa z psem?"
          answer="Niestety, nie akceptujemy zwierząt domowych."
        />
        <Accordion
          question="Czy sauna i balia jest w cenie noclegu?"
          answer="Sauna i balia są dostępne za dodatkową opłatą."
        />
      </section>
    </>
  );
};

export default Faq;
