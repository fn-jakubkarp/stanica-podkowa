import CardAtractions from "../../UI/Card/CardAtractions";

export default function Attractions() {
  return (
    <section className="mx-auto w-full max-w-screen-xl py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-6">
          <div className="text-center">
            <div className="mb-4 flex flex-col items-center justify-center md:mb-8">
              <h2 className="font-bold lg:text-5xl">ATRAKCJE</h2>
              <span className="font-semibold lg:text-3xl">w okolicy</span>
            </div>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl ">
              Odkryj lokalne perełki i ukryte cuda które sprawią, że Twój
              wypoczynek stanie się na prawdę wyjątkowy.
            </p>
          </div>

          <div className="mx-auto grid w-full max-w-screen-xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <CardAtractions
              card={{
                title: "Uzdrowisko Wapienne - 2km",
                text: "Uzdrowisko Wapienne oferuje turnusy sanatoryjne i rehabilitacyjne, duży basen ze skocznią oraz basen dla dzieci, a także różnorodne masaże relaksacyjne i terapeutyczne.",
                id: 1,
              }}
            />
            <CardAtractions
              card={{
                title: "Wieża widokowa 'Ferdel' - 5km",
                text: "Wieża widokowa 'Ferdel' zapewnia panoramiczne widoki na malownicze krajobrazy okolicy, idealna dla miłośników fotografii i pieszych wędrówek.",
                id: 1,
              }}
            />
            <CardAtractions
              card={{
                title: "Park linowy w Sękowej - 8km",
                text: "Oferuje ekscytujące trasy o różnym stopniu trudności, zapewniając niezapomniane przygody dla całej rodziny.",
                id: 1,
              }}
            />
            <CardAtractions
              card={{
                title: "Gorlice - 11km",
                text: "Gorlice to miasto, w którym zapalono pierwszą lampę naftową na świecie, a także miejsce z jednym z najstarszych i najpiękniejszych miejskich parków w Polsce.",
                id: 1,
              }}
            />
            <CardAtractions
              card={{
                title: "Biecz - 20km",
                text: "Biecz to stare królewskie miasto, znane z wieży ratuszowej z punktem widokowym, XV-wiecznego Kościoła Bożego Ciała, licznych starych muzeów oraz najstarszego szpitala w Polsce.",
                id: 1,
              }}
            />
            <CardAtractions
              card={{
                title: "Szlak Architektury Drewnianej - 23km",
                text: "255 najcenniejszych zabytkowych obiektów drewnianych tworzy Szlak Architektury Drewnianej w Małopolsce. Szlak został oznakowany i udostępniony do zwiedzania, a w 2003 i 2013 roku osiem obiektów wpisano na Listę Światowego Dziedzictwa UNESCO.",
                id: 1,
              }}
            />
            <CardAtractions
              card={{
                title: "Szlak Architektury Drewnianej - 23km",
                text: "255 najcenniejszych zabytkowych obiektów drewnianych tworzy Szlak Architektury Drewnianej w Małopolsce. Szlak został oznakowany i udostępniony do zwiedzania, a w 2003 i 2013 roku osiem obiektów wpisano na Listę Światowego Dziedzictwa UNESCO.",
                id: 1,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
// TODO: to refactor, apply 'show more' btn
// </li>
//           <li className="flex w-full justify-center bg-secondary">
//             Skansen 'Karpacka Troja' - 26km
//           </li>
//           <li className="flex w-full justify-center">
//             Zalew 'Klimkówka' - 30km
//           </li>
//           <li className="flex w-full justify-center bg-secondary">
//             Skansen 'Stara Baśń' - 30km
//           </li>
//           <li className="flex w-full justify-center">
//             Rezerwat skalny 'Kornuty' - 23km
//           </li>
//           <li className="flex w-full justify-center bg-secondary">
//             Ciężkowice, ścieżka w koronach drzew - 38km
//           </li>
//           <li className="flex w-full justify-center">
//             Ciężkowice, 'Skamieniałe Miasto' - 40km
//           </li>
//           <li className="flex w-full justify-center bg-secondary">
//             Bardejów, Słowacja - 51km
//           </li>
//           <li className="flex w-full justify-center">
//             Krynica, ścieżka w koronach drzew - 53km
//           </li>
//           <li className="flex w-full justify-center bg-secondary">
//             Wyciąg narciarski, Sękowa - 8km
//           </li>
//           <li className="flex w-full justify-center">
//             Wyciąg narciarski, Magura Małastowska - 16km
//           </li>
//           <li className="flex w-full justify-center bg-secondary">
//             Wyciąg narciarski, Smerekowiec - 25km
//           </li>
//           <li className="flex w-full justify-center">
//             Wyciąg narciarski, Krynica - 51km
//           </li>
//           <li className="flex w-full justify-center bg-secondary">
//             Trasy biegowe, Krzywa - 23km
//           </li>
