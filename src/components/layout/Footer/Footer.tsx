import { Link } from "react-router-dom";
import { phoneNumbers } from "../../../constants/phoneNumbers";
import { handleCall } from "../../../utils/handleCall";
import Logo from "../../UI/Logo/Logo";
interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const handleCallClick = (
    tel: string,
  ): React.MouseEventHandler<HTMLAnchorElement> => {
    return (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      event.preventDefault();
      handleCall(tel);
    };
  };

  return (
    <>
      <footer>
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link to="/#top" className="flex items-center">
                <Logo className={`mr-4 md:mr-12`} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
              <div>
                <h2 className="mb-6 font-semibold uppercase ">Sekcje</h2>
                <ul>
                  <li>
                    <Link to="/#top" className="hover:underline">
                      Idź do góry
                    </Link>
                  </li>
                  <li>
                    <Link to="/#o-nas" className="hover:underline">
                      O nas
                    </Link>
                  </li>
                  <li>
                    <Link to="/galeria" className="hover:underline">
                      Galeria
                    </Link>
                  </li>

                  <li>
                    <Link to="/#jak-dojechac" className="hover:underline">
                      Jak dojechać?
                    </Link>
                  </li>
                  <li>
                    <Link to="/#faq" className="hover:underline">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 font-semibold uppercase ">Kontakt</h2>
                <ul>
                  <li className="hover:underline">
                    <a href="mailto:stanica.podkowa@gmail.com">Napisz do nas</a>
                  </li>
                  <li className="hover:underline">
                    <a onClick={handleCallClick(phoneNumbers.kamil)}>
                      Zadzwoń do nas
                    </a>
                  </li>
                </ul>
              </div>

              {/* Adres */}
              <div>
                <h2 className=" mb-6  font-semibold uppercase ">Adres</h2>
                <ul className=" ">
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
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="  ">
              © 2024 <a className="hover:underline">Stanica Podkowa™</a>.
              Wszelkie prawa zastrzeżone.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
