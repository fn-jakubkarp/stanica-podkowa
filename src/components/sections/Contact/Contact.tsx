import { MdEmail, MdLocalPhone } from "react-icons/md";
import { phoneNumbers } from "../../../constants/phoneNumbers";
import { handleCall } from "../../../utils/handleCall";

const Contact: React.FC = () => {
  return (
    <>
      <section
        id="kontakt"
        className="mx-auto my-8 flex h-auto max-w-screen-2xl flex-col justify-center gap-4 px-4 lg:px-0"
      >
        <h3 className="flex justify-center font-bold lg:text-5xl">SKONTAKTUJ SIĘ</h3>
        <p className="">
          Jeśli masz pytania lub chcesz poznać szczegóły zadzwoń
        </p>
        <div className="flex flex-col gap-4">
          <a
            onClick={() => handleCall(phoneNumbers.kamil)}
            className="flex items-center gap-2"
          >
            <MdLocalPhone /> Kamil: {phoneNumbers.kamil}
          </a>
          <a
            onClick={() => handleCall(phoneNumbers.katarzyna)}
            className="flex items-center gap-2"
          >
            <MdLocalPhone />
            Katarzyna: {phoneNumbers.katarzyna}
          </a>
          <p className="flex items-center gap-2">
            <MdEmail />
            Email: stanicapodkowa@gmail.com
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
