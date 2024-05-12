import Navbar from "./components/Navbar/Navbar";
import "./styles/main.css";
function App() {
  return (
    <>
      <main className="bg-background flex min-h-screen flex-column justify-start items-start p-2">
        <Navbar />

        {/* <section id="welcome-section" className="flex flex-col">
          <h1>Stanica Podkowwa</h1>
          <h2>Agroturystyka w Beskidzie Niskim</h2>
        </section>

        <section>
          Oferta
                - noclegi
                - konie
                - grill
                - sauna
                - imprezy
        </section> */}
      </main>
    </>
  );
}

export default App;
