import LOGOTYP from "../../../../public/LOGOTYP.svg";
import { handleCall } from "../../../utils/handleCall";
interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <footer className="bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center">
                <img
                  src={LOGOTYP}
                  className="h-8 me-3"
                  alt="Stanica Podkowa Logo"
                />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-md uppercase font-open font-bold text-text-DARK">
                  Sekcje
                </h2>
                <ul className="font-josefin text-md text-text-DARK">
                  <li>
                    <a href="#" className="hover:underline">
                      Idź do góry
                    </a>
                  </li>
                  <li>
                    <a href="#o-nas" className="hover:underline">
                      O nas
                    </a>
                  </li>
                  <li>
                    <a href="#galeria" className="hover:underline">
                      Galeria
                    </a>
                  </li>

                  <li>
                    <a href="#jak-dojechac" className="hover:underline">
                      Jak dojechać?
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="hover:underline">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-md uppercase font-open font-bold text-text-DARK">
                  Kontakt
                </h2>
                <ul className="font-josefin text-md text-text-DARK">
                  <li className="hover:underline">
                    <a href="mailto:stanica.podkowa@gmail.com">Napisz do nas</a>
                  </li>
                  <li className="hover:underline">
                    <a href="#kontakt" onClick={handleCall}>
                      Zadzwoń do nas
                    </a>
                  </li>
                </ul>
              </div>

              {/* Adres */}
              <div>
                <h2 className="mb-6 text-md uppercase font-open font-bold text-text-DARK">
                  Adres
                </h2>
                <ul className="font-josefin text-md text-text-DARK">
                  <li className="mb-4">
                    <a
                      href="https://maps.app.goo.gl/1prR5CRuaxLkR8UT6"
                      className="hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Męcina Wielka 115, 38-307 Sękowa
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyrights section */}
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="font-josefin text-md text-text-DARK">
              © 2024{" "}
              <a href="#" className="hover:underline">
                Stanica Podkowa™
              </a>
              . Wszelkie prawa zastrzeżone.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a
                href="https://www.facebook.com/agroturystykapodkowa/"
                className="font-josefin text-md text-text-DARK"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
