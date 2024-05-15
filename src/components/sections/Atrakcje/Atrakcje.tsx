// Assets
import grill from "../../../assets/grill.jpg";
import sauna from "../../../assets/sauna.jpg";
import imprezy from "../../../assets/imprezy.jpg";
import konie from "../../../assets/konie.jpg";
import noclegi from "../../../assets/noclegi.jpg";
import paintball from "../../../assets/paintball.jpg";

import Card from "../../UI/Card/Card";

interface AtrakcjeProps {}

const Atrakcje: React.FC<AtrakcjeProps> = ({}) => {
  return (
    <>
      <section
        id="atrakcje"
        className="flex flex-col min-h-screen justify-center"
      >
        <div className="flex flex-wrap">
          <Card image={grill} alt="Grill">
            <h3 className="text-3xl font-bold mb-2">Grill</h3>
            <p>
              Rozkoszuj się soczystymi grillowanymi potrawami w naszym ogrodzie!
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
              Odkryj piękno natury podczas jazdy konnej z naszymi doświadczonymi
              instruktorami.
            </p>
          </Card>
          <Card image={paintball} alt="Paintball">
            <h3 className="text-3xl font-bold mb-2">Paintball</h3>
            <p>
              Adrenalina i zabawa czekają na Ciebie na naszym polu do paintballa
            </p>
          </Card>
          <Card image={noclegi} alt="Noclegi">
            <h3 className="text-3xl font-bold mb-2">Noclegi</h3>
            <p>
              Oferujemy komfortowe noclegi w przytulnych pokojach z widokiem na
              naturę.
            </p>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Atrakcje;
