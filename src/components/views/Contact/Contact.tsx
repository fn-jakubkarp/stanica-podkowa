import { MdEmail, MdLocalPhone, MdLocationOn } from 'react-icons/md';

// Constants
const phoneNumbers = {
  kamil: "+48 123 456 789",
  katarzyna: "+48 987 654 321"
};

// Utility function
const handleCall = (phoneNumber: string) => {
  window.location.href = `tel:${phoneNumber}`;
};

const Contact = () => {
  return (
    <section id="kontakt" className="w-full py-12 md:py-24 bg-primary-50">
      <div className="container-custom">
        <div className="space-y-12">
          {/* Contact Information */}
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h2 className="font-bold">SKONTAKTUJ SIĘ</h2>
              <p className="text-gray-500 text-lg md:text-xl text-balance">
                Masz pytania lub chcesz poznać szczegóły? Zadzwoń!
              </p>
            </div>
            
            <div className="space-y-4 max-w-md mx-auto">
              <button 
                onClick={() => handleCall(phoneNumbers.kamil)}
                className="w-full flex items-center justify-center gap-2 btn btn-primary"
              >
                <MdLocalPhone className="text-xl" />
                <span>{phoneNumbers.kamil}</span>
              </button>
              
              <button 
                onClick={() => handleCall(phoneNumbers.katarzyna)}
                className="w-full flex items-center justify-center gap-2 btn btn-primary"
              >
                <MdLocalPhone className="text-xl" />
                <span>{phoneNumbers.katarzyna}</span>
              </button>
              
              <a 
                href="mailto:stanicapodkowa@gmail.com"
                className="w-full flex items-center justify-center gap-2 btn btn-secondary"
              >
                <MdEmail className="text-xl" />
                <span>stanicapodkowa@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Location Section */}
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-2">
                <MdLocationOn className="text-primary-500" />
                Jak do nas trafić?
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