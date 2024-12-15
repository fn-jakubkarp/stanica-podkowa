import { MdEmail, MdLocalPhone, MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "../../UI/Logo/Logo";
import { CContact } from "../../views/Contact/content";
const Footer = () => {
  const handleCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const navigationLinks = [
    { name: "Strona główna", href: "/#glowna" },
    { name: "O nas", href: "/#o-nas" },
    { name: "Galeria", href: "/galeria" },
    { name: "Jak dojechać?", href: "/#jak-dojechac" },
  ];

  return (
    <footer className="border-t border-gray-200 bg-primary-50">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link to="/#top" className="inline-block">
              <Logo className="h-12 w-auto" />
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              Twój wymarzony wypoczynek w sercu Beskidu Niskiego
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-1">
            <h3 className="mb-4 font-josefin text-lg font-semibold text-primary-700">
              Nawigacja
            </h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-500 transition-colors duration-200 hover:text-primary-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <h3 className="mb-4 font-josefin text-lg font-semibold text-primary-700">
              Kontakt
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:stanicapodkowa@gmail.com"
                  className="flex items-center gap-2 text-gray-500 transition-colors duration-200 hover:text-primary-500"
                >
                  <MdEmail className="text-primary-500" />
                  stanicapodkowa@gmail.com
                </a>
              </li>
              <li>
                <button
                  onClick={() => handleCall(CContact.phoneNumbers.kamil)}
                  className="flex items-center gap-2 text-gray-500 transition-colors duration-200 hover:text-primary-500"
                >
                  <MdLocalPhone className="text-primary-500" />
                  {CContact.phoneNumbers.kamil}
                </button>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="lg:col-span-1">
            <h3 className="mb-4 font-josefin text-lg font-semibold text-primary-700">
              Adres
            </h3>
            <a
              href="https://maps.app.goo.gl/1prR5CRuaxLkR8UT6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-500 transition-colors duration-200 hover:text-primary-500"
            >
              <MdLocationOn className="text-primary-500" />
              <address className="not-italic">
                Męcina Wielka 115,
                <br />
                38-307 Sękowa
              </address>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Stanica Podkowa™. Wszelkie prawa
            zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
