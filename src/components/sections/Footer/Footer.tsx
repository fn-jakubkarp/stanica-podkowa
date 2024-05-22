import Logo from "../../UI/Logo/Logo";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <footer className="bg-white h-auto" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              <Logo />
              <p className="text-sm leading-6 text-gray-600 font-josefin">
                Doświadczenie, którego nie zapomnisz!
              </p>
              {/* <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Facebook</span>
                </a>
              </div> */}
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold font-open leading-6 text-gray-900">
                    Poznaj się na nas
                  </h3>
                  <ul role="list" className="mt-6 space-y-4 font-josefin">
                    <li>
                      <a
                        href="#"
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        Wróć na górę
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        O nas
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        Atrakcje
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        Jak dojechać
                      </a>
                    </li>
                    <li>
                      <a
                        href="#kontakt"
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        Kontakt
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
            <p className="text-xs leading-5 text-gray-500">
              &copy; 2024 Stanica Podkowa. Wszelkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
