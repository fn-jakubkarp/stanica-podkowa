import "./styles/main.css";
import Logo from "./components/Logo/Logo";
function App() {
  return (
    <>
      <main className="flex min-h-screen flex-row items-center justify-center">
        <Logo />
        <section id="welcome-section" className="flex flex-col">
          <h1>Stanica Podkowwa</h1>
          {/* <h2>Agroturystyka w Beskidzie Niskim</h2> */}
        </section>

        <section>
          {/* Oferta
                - noclegi
                - konie
                - grill
                - sauna
                - imprezy */}
        </section>
      </main>
    </>
  );
}

export default App;
