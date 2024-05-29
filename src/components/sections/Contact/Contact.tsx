import { MdEmail, MdLocalPhone } from "react-icons/md";
import { phoneNumbers } from "../../../constants/phoneNumbers";
import { handleCall } from "../../../utils/handleCall";

const Contact: React.FC = () => {
  return (
    <>
      <section
        id="kontakt"
        className="flex h-auto flex-col justify-center px-4 gap-4 my-8"
      >
        <h3 className="text-3xl">Skontaktuj się</h3>
        <p className="text-lg">
          Jeśli masz pytania lub chcesz poznać szczegóły zadzwoń
        </p>
        <div className="flex flex-col gap-4">
          <a
            onClick={() => handleCall(phoneNumbers.kamil)}
            className="flex gap-2 items-center"
          >
            <MdLocalPhone /> Kamil: {phoneNumbers.kamil}
          </a>
          <a
            onClick={() => handleCall(phoneNumbers.katarzyna)}
            className="flex gap-2 items-center"
          >
            <MdLocalPhone />
            Katarzyna: {phoneNumbers.katarzyna}
          </a>
          <p className="flex gap-2 items-center">
            <MdEmail />
            Email: stanicapodkowa@gmail.com
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
