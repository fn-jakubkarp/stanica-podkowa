import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import "./styles/main.css";
function App() {
  return (
    <>
      <main className="bg-background flex flex-col min-h-screen flex-column justify-center items-center p-2 scroll-smooth">
        <Navbar />
        <img
          src="../src/assets/background.JPG"
          className="absolute top-0 left-0 h-screen object-cover object-left"
        />
        <section
          id="hero"
          className="z-10 flex flex-col h-screen justify-center "
        >
          <h1 className="">Stanica Podkowa</h1>
          <h2>Agroturystyka w Beskidzie Niskim</h2>
        </section>

        <section id="o-nas" className="flex flex-col h-screen justify-center">
          Hej tu Kamil
        </section>

        <section
          id="atrakcje"
          className="flex flex-col h-screen justify-center"
        >
          {/* noclegi - konie - grill - sauna - imprezy */}
          {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> */}
          <Card image="../src/assets/background.JPG" alt="Sauna">
            <h3 className="text-3xl font-bold mb-2">Grill</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, nulla.
            </p>
          </Card>
          {/* <Card image="../src/assets/background.JPG" name="Sauna" />
            <Card image="../src/assets/background.JPG" name="Sauna" />
            <Card image="../src/assets/background.JPG" name="Sauna" />
            <Card image="../src/assets/background.JPG" name="Sauna" />
            <Card image="../src/assets/background.JPG" name="Sauna" /> */}
          {/* </div> */}
        </section>

        <section id="galeria" className="flex flex-col h-screen justify-center">
          galeria
        </section>

        <section
          id="jak-dojechac"
          className="flex flex-col h-screen justify-center"
        >
          <p>Męcina Wielka 115, 38-307 Sękowa</p>
        </section>

        <section id="kontakt" className="flex flex-col h-screen justify-center">
          Tel: +48 730 698 503 Email: dd@gmail.com
        </section>
      </main>
    </>
  );
}

export default App;
