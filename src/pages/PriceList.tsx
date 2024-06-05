import { pricelist_header, mask5 } from "../utils/assets";
import { animated } from "@react-spring/web";
import useInViewTrailAnimation from "../hooks/useInViewTrailAnimation";

// Custom components
import DetailedPriceList from "../components/UI/DetailedPriceList/DetailedPriceList";
import RoomsPriceList from "../components/UI/RoomsPriceList/RoomsPriceList";

const PriceList: React.FC = () => {
  const letters = ["C", "E", "N", "N", "I", "K"];
  const { ref: lettersRef, trail: lettersTrail } = useInViewTrailAnimation(
    letters,
    200,
    false,
  );

  return (
    <div className="flex h-full w-screen flex-col items-center justify-center  bg-secondary">
      <div className="relative flex w-screen items-center justify-center lg:h-[50vh]">
        <img
          src={pricelist_header}
          alt="Tło strony, zdjęcie pokoju"
          className="z-10 w-screen object-cover"
        />
        <img
          src={mask5}
          alt="Additional Overlay"
          className="absolute left-0 top-0 z-20 h-full w-screen object-cover"
        />
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-t from-black to-black opacity-45"></div>

        <animated.header className="absolute flex" ref={lettersRef}>
          {lettersTrail.map((props, index) => (
            <animated.h1
              key={index}
              className="z-10 mb-12 pr-1 text-5xl text-text-LIGHT sm:text-7xl md:mb-14 lg:mb-24"
              style={props}
            >
              {letters[index]}
            </animated.h1>
          ))}
        </animated.header>
      </div>
      <div className="defaultPaddings mx-auto flex max-w-screen-2xl  flex-col">
        <h2 className="mb-2 flex w-full justify-center text-3xl font-bold lg:mb-2 lg:text-5xl">
          POKOJE
        </h2>
        <p>
          W gospodarstwie posiadamy stary, drewniany klimatyczny domek oraz nowo
          powstały dom. Drewniany domek posiada 3 dwuosobowe sypialnie oraz
          salon w którym pomieści się do czterech osób.
        </p>
        <p>
          Nowy dom posiada 4 odrębne sypialnie, każda wyposażona w osobną
          łazienkę
        </p>
      </div>
      
      <RoomsPriceList />
      <DetailedPriceList />
      <div className="defaultPaddings mx-auto flex h-full w-full max-w-screen-xl flex-col justify-center gap-2">
        <h3 className="flex w-full justify-center text-3xl font-bold md:text-5xl">
          Potwierdzenie rezerwacji
        </h3>
        <p className="">
          Rezerwacji pobytu można dokonać osobiście, telefonicznie lub pocztą
          elektroniczną. Potwierdzeniem rezerwacji jest wpłata 40% kosztów
          pobytu w formie zadatku. Na wpłatę lub przesłanie potwierdzenia
          czekamy 3 dni. Pozostała kwota należności uiszczana jest w dniu
          przyjazdu. Na potrzeby wynajmu doba rozpoczyna się o 15.00 w dniu
          przyjazdu, kończy o godzinie 11.00 w dniu wyjazdu.
        </p>
      </div>
      <div className=" defaultPaddings mx-auto mb-12 flex h-full w-full max-w-screen-xl flex-col justify-center gap-2">
        <h3 className="flex w-full justify-center text-3xl font-bold md:text-5xl">
          Dane do przelewu
        </h3>
        <span className="flex w-full justify-center text-xl font-semibold md:text-5xl">
          na poczet zadatku
        </span>
        <ul>
          <li className="font-semibold">Kamil Haluch</li>
          <li className="font-semibold">Męcina Wielka 115, 38-307 Sękowa</li>
          <li className="font-semibold">04862700013028370086260001</li>
          <li className="font-semibold">
            Tytułem: Zadatek - Imię Nazwisko - termin rezerwacji
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PriceList;

