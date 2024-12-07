import { MdEmail, MdLocalPhone, MdLocationOn } from "react-icons/md";
import { CContact } from "./content";

// Utility function
const handleCall = (phoneNumber: string) => {
  window.location.href = `tel:${phoneNumber}`;
};

const Contact = () => {
  return (
    <section id="kontakt" className="w-full bg-primary-50 py-6 md:py-12">
      <div className="container-custom">
        <div className="space-y-12">
          <div className="space-y-6 text-center">
            <div className="space-y-2">
              <h2 className="font-bold">{CContact.header}</h2>
              <p className="text-balance text-lg text-gray-500 md:text-xl">
                {CContact.subheader}
              </p>
            </div>

            <div className="mx-auto max-w-md space-y-4">
              <button
                onClick={() => handleCall(CContact.phoneNumbers.kamil)}
                className="btn btn-primary flex w-full items-center justify-center gap-2"
              >
                <MdLocalPhone className="text-xl" />
                <span>{CContact.phoneNumbers.kamil}</span>
              </button>

              <button
                onClick={() => handleCall(CContact.phoneNumbers.katarzyna)}
                className="btn btn-primary flex w-full items-center justify-center gap-2"
              >
                <MdLocalPhone className="text-xl" />
                <span>{CContact.phoneNumbers.katarzyna}</span>
              </button>

              <a
                href="mailto:stanicapodkowa@gmail.com"
                className="btn btn-secondary flex w-full items-center justify-center gap-2"
              >
                <MdEmail className="text-xl" />
                <span>{CContact.email}</span>
              </a>
            </div>
          </div>

          {/* Location Section */}
          <div className="space-y-6">
            <div className="space-y-2 text-center">
              <h3 className="flex items-center justify-center gap-2 text-2xl font-bold md:text-3xl">
                <MdLocationOn className="text-primary-500" />
                {CContact.direction}
              </h3>
            </div>

            <div className="card overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2585.0024750878188!2d21.2534391!3d49.616558!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473dcf5d0304bf7b%3A0xcc18615867d72c9d!2sAgroturystyka%20Noclegi%20%22Stanica%20Podkowa%22%20Beskid%20Niski%20Gorlice-M%C4%99cina%20Wielka!5e0!3m2!1spl!2spl!4v1716456251808!5m2!1spl!2spl"
                title="Nawigacja do Stanica Podkowa"
                width="100%"
                height="450"
                loading="lazy"
                className="w-full border-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
