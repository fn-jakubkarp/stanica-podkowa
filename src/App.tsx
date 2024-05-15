import "./styles/main.css";

// Import layout components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Import UI components
import Card from "./components/UI/Card/Card";
import Accordion from "./components/UI/Accordion/Accordion";
import StickyContact from "./components/UI/StickyContact/StickyContact";

// Assets
import background from "./assets/background.webp";
import grill from "./assets/grill.jpg";
import sauna from "./assets/sauna.jpg";
import imprezy from "./assets/imprezy.jpg";
import konie from "./assets/konie.jpg";
import my from "./assets/my.jpg";
import noclegi from "./assets/noclegi.jpg";
import paintball from "./assets/paintball.jpg";

function App() {
  return (
    <>
      <main className="bg-background flex flex-col min-h-screen flex-column justify-center items-center scroll-smooth">
        <Navbar />
        <StickyContact />
        {/* HERO */}
        <img
          src={background}
          className="absolute top-0 left-0 h-screen object-cover object-left"
        />

        <section
          id="hero"
          className="z-10 flex flex-col h-screen justify-center "
        >
          <h1 className="text-6xl text-background text-center">
            Stanica Podkowa
          </h1>
          <h2 className="text-xl text-background text-center">
            Agroturystyka w Beskidzie Niskim
          </h2>
        </section>

        {/* O NAS */}
        <section
          id="o-nas"
          className="flex flex-col h-screen justify-center px-4 gap-2"
        >
          <h2 className="text-4xl">Doświadcz uroku Stanicy Podkowa</h2>
          <p>
            Witaj w Stanicy <span>Podkowa</span>, gdzie oferujemy autentyczne
            agroturystyczne doświadczenie. Naszą misją jest zapewnienie
            wyjątkowego doświadczenia, które połączy Cię z pięknem życia na
            farmie.
          </p>
          <p>
            Stanica Podkowa was founded in 2000. What started as a small family
            farm has grown into a thriving agrotourism destination, attracting
            visitors from all over the world.
          </p>
          <p>
            Our mission is to provide a welcoming environment where guests can
            experience the joys of farm life. We are committed to sustainable
            farming practices and fostering a sense of community.
          </p>
          <h3 className="text-3xl">Poznaj nas</h3>
          <img src={my} className="w-[200px]" />
          <ul>
            <li>Authentic farm experiences</li>
            <li>Sustainable farming practices</li>
            <li>Family-friendly activities</li>
            <li>Highly rated by our visitors</li>
          </ul>
        </section>

        {/* ATRAKCJE */}
        <section
          id="atrakcje"
          className="flex flex-col min-h-screen justify-center"
        >
          <div className="flex flex-wrap">
            <Card image={grill} alt="Grill">
              <h3 className="text-3xl font-bold mb-2">Grill</h3>
              <p>
                Rozkoszuj się soczystymi grillowanymi potrawami w naszym
                ogrodzie!
              </p>
            </Card>
            <Card image={sauna} alt="Sauna">
              <h3 className="text-3xl font-bold mb-2">Bania i sauna</h3>
              <p>
                Zrelaksuj się w naszej autentycznej fińskiej banii i saunie,
                odprężając ciało i umysł
              </p>
            </Card>
            <Card image={imprezy} alt="Imprezy">
              <h3 className="text-3xl font-bold mb-2">Imprezy</h3>
              <p>
                Organizujemy niezapomniane imprezy i wydarzenia w malowniczej
                scenerii.
              </p>
            </Card>
            <Card image={konie} alt="Jazda konna">
              <h3 className="text-3xl font-bold mb-2">Jazda konna</h3>
              <p>
                Odkryj piękno natury podczas jazdy konnej z naszymi
                doświadczonymi instruktorami.
              </p>
            </Card>
            <Card image={paintball} alt="Paintball">
              <h3 className="text-3xl font-bold mb-2">Paintball</h3>
              <p>
                Adrenalina i zabawa czekają na Ciebie na naszym polu do
                paintballa
              </p>
            </Card>
            <Card image={noclegi} alt="Noclegi">
              <h3 className="text-3xl font-bold mb-2">Noclegi</h3>
              <p>
                Oferujemy komfortowe noclegi w przytulnych pokojach z widokiem
                na naturę.
              </p>
            </Card>
          </div>
        </section>

        {/* GALERIA */}
        <section id="galeria" className="flex flex-col h-screen justify-center">
          galeria
        </section>

        {/* JAK DOJECHAC */}
        <section
          id="jak-dojechac"
          className="flex flex-col w-screen  justify-center"
        >
          <p>Męcina Wielka 115, 38-307 Sękowa</p>
          <iframe
            src="https://snazzymaps.com/embed/607749"
            width="100%"
            height="300px"
            className="border-none"
          ></iframe>
        </section>

        {/* KONTAKT */}
        <section id="kontakt" className="flex flex-col h-screen justify-center">
          <div className="flex min-h-screen items-center justify-start">
            <div className="mx-auto w-full max-w-lg">
              <h1 className="text-4xl font-medium">Skontaktuj się</h1>

              <form action="https://api.web3forms.com/submit" className="mt-10">
                <input
                  type="hidden"
                  name="access_key"
                  value="YOUR_ACCESS_KEY_HERE"
                />
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="relative z-0">
                    <input
                      type="text"
                      name="name"
                      className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                      placeholder=" "
                    />
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                      Imie
                    </label>
                  </div>
                  <div className="relative z-0">
                    <input
                      type="text"
                      name="email"
                      className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                      placeholder=" "
                    />
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                      Email
                    </label>
                  </div>
                  <div className="relative z-0 col-span-2">
                    <textarea
                      name="message"
                      className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                      placeholder=" "
                    ></textarea>
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                      Twoja wiadomość
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-5 rounded-md bg-black px-10 py-2 text-white"
                >
                  Wyślij
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="flex flex-col w-screen p-4 justify-center gap-4 bg-accent"
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
      </main>
      <Footer />
    </>
  );
}

export default App;
