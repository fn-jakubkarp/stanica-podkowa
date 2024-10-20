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
    <div className="mx-auto flex h-full w-screen max-w-screen-xl flex-col items-center justify-center  ">
      <div className="flex h-[calc(20vh+108px)] flex-col items-center justify-center">
        <animated.header className=" flex" ref={lettersRef}>
          {lettersTrail.map((props, index) => (
            <animated.h1
              key={index}
              className="text-text-LIGHT z-10 mb-12 pr-1 text-5xl sm:text-7xl md:mb-14 lg:mb-24"
              style={props}
            >
              {letters[index]}
            </animated.h1>
          ))}
        </animated.header>
      </div>
      <div className="defaultPaddings mx-auto flex max-w-screen-2xl flex-col gap-4">
        <h2 className="flex w-full justify-center text-3xl font-bold lg:mb-2 lg:text-5xl">
          NASZA OFERTA
        </h2>
        <p>
          W gospodarstwie posiadamy drewniany klimatyczny dom o powierzchni
          120m2, który wynajmowany jest w całości na wyłączność. Do Waszej
          dyspozycji oddajemy również pokoje gościnne w drugim budynku.
        </p>
        <p>
          Nowy dom posiada 4 odrębne sypialnie, każda wyposażona w osobną
          łazienkę
        </p>
      </div>

      <RoomsPriceList />
      <DetailedPriceList />

      <div className="defaultPaddings mx-auto flex h-full w-full max-w-screen-xl flex-col justify-center gap-8">
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
        <span className="flex w-full justify-center text-xl font-semibold md:text-4xl">
          na poczet zadatku
        </span>
        <ul>
          <li className="font-medium">Kamil Haluch</li>
          <li>Męcina Wielka 115, 38-307 Sękowa</li>
          <li className="font-medium">04862700013028370086260001</li>
          <li>Tytułem: Zadatek - Imię Nazwisko - termin rezerwacji</li>
        </ul>
      </div>
    </div>
  );
};

export default PriceList;
