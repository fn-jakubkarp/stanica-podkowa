import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./styles/main.css";

function App() {
  return (
    <>
      <main className="bg-background flex flex-col min-h-screen flex-column justify-center items-center  scroll-smooth">
        <Navbar />

        {/* HERO */}
        <img
          src="../src/assets/background.jpg"
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
        <section id="o-nas" className="flex flex-col h-screen justify-center">
          <h2>Doświadcz uroku Stanicy Podkowa</h2>
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
          <h3>Poznaj nas</h3>
          Kamil i Kasia
          <img src="../src/assets/my.jpg" className="w-[200px]" />
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
          className="flex flex-col h-screen justify-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Card image="../src/assets/grill.jpg" alt="Grill">
              <h3 className="text-3xl font-bold mb-2">Grill</h3>
              <p>
                Rozkoszuj się soczystymi grillowanymi potrawami w naszym
                ogrodzie!
              </p>
            </Card>
            <Card image="../src/assets/sauna.jpg" alt="Sauna">
              <h3 className="text-3xl font-bold mb-2">Bania i sauna</h3>
              <p>
                Zrelaksuj się w naszej autentycznej fińskiej banii i saunie,
                odprężając ciało i umysł
              </p>
            </Card>

            <Card image="../src/assets/imprezy.jpg" alt="Imprezy">
              <h3 className="text-3xl font-bold mb-2">Imprezy</h3>
              <p>
                Organizujemy niezapomniane imprezy i wydarzenia w malowniczej
                scenerii.
              </p>
            </Card>
            <Card image="../src/assets/konie.jpg" alt="Jazda konna">
              <h3 className="text-3xl font-bold mb-2">Jazda konna</h3>
              <p>
                Odkryj piękno natury podczas jazdy konnej z naszymi
                doświadczonymi instruktorami.
              </p>
            </Card>
            <Card image="../src/assets/paintball.jpg" alt="Paintball">
              <h3 className="text-3xl font-bold mb-2">Paintball</h3>
              <p>
                Adrenalina i zabawa czekają na Ciebie na naszym polu do
                paintballa
              </p>
            </Card>
            <Card image="../src/assets/noclegi.jpg" alt="Noclegi">
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
          className="flex flex-col h-screen justify-center"
        >
          <p>Męcina Wielka 115, 38-307 Sękowa</p>
          {/* <iframe
            src="https://snazzymaps.com/embed/607749"
            width="100%"
            height="600px"
            className="border-none"
          ></iframe> */}
        </section>

        {/* KONTAKT */}
        <section id="kontakt" className="flex flex-col h-screen justify-center">
          Tel: +48 730 698 503 Email: dd@gmail.com
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
