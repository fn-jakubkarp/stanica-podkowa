import { useState } from "react";
import CardAttractions from "../../UI/Card/CardAtractions";

const Attractions = () => {
  const attractions = [
    {
      title: "Uzdrowisko Wapienne - 2km",
      text: "Uzdrowisko Wapienne oferuje turnusy sanatoryjne i rehabilitacyjne, duży basen ze skocznią oraz basen dla dzieci, a także różnorodne masaże relaksacyjne i terapeutyczne.",
      id: 1,
    },
    {
      title: "Wieża widokowa 'Ferdel' - 5km",
      text: "Wieża widokowa 'Ferdel' zapewnia panoramiczne widoki na malownicze krajobrazy okolicy, idealna dla miłośników fotografii i pieszych wędrówek.",
      id: 2,
    },
    {
      title: "Park linowy w Sękowej - 8km",
      text: "Oferuje ekscytujące trasy o różnym stopniu trudności, zapewniając niezapomniane przygody dla całej rodziny.",
      id: 3,
    },
    {
      title: "Gorlice - 11km",
      text: "Gorlice to miasto, w którym zapalono pierwszą lampę naftową na świecie, a także miejsce z jednym z najstarszych i najpiękniejszych miejskich parków w Polsce.",
      id: 4,
    },
    {
      title: "Biecz - 20km",
      text: "Biecz to stare królewskie miasto, znane z wieży ratuszowej z punktem widokowym, XV-wiecznego Kościoła Bożego Ciała, licznych starych muzeów, najstarszego szpitala w Polsce oraz szkoły katów.",
      id: 5,
    },
    {
      title: "Szlak Architektury Drewnianej - 23km",
      text: "255 najcenniejszych zabytkowych obiektów drewnianych tworzy Szlak Architektury Drewnianej w Małopolsce. Szlak został oznakowany i udostępniony do zwiedzania, a w 2003 i 2013 roku osiem obiektów wpisano na Listę Światowego Dziedzictwa UNESCO.",
      id: 6,
    },
  ];

  const [isExpanded, setIsExpanded] = useState(false);

  const displayedAttractions =
    window.innerWidth >= 768 || isExpanded
      ? attractions
      : attractions.slice(0, 2);

  return (
    <section className="w-full bg-primary-50 py-8 md:py-12 lg:py-24">
      <div className="container-custom">
        <div className="space-y-6">
          <div className="text-center">
            <div className="mb-4 flex flex-col items-center justify-center md:mb-8">
              <h2 className="font-bold">ATRAKCJE</h2>
              <span className="text-2xl font-semibold text-primary-500 lg:text-3xl">
                w okolicy
              </span>
            </div>
            <p className="mx-auto max-w-[700px] text-balance text-gray-500 md:text-xl">
              Odkryj lokalne perełki i ukryte cuda które sprawią, że Twój
              wypoczynek stanie się na prawdę wyjątkowy.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayedAttractions.map((attraction) => (
              <CardAttractions key={attraction.id} card={attraction} />
            ))}
          </div>

          {/* Toggle button - only visible on mobile */}
          {window.innerWidth < 768 && attractions.length > 2 && (
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="rounded-md border border-primary-500 px-4 py-2 text-sm font-medium text-primary-500 transition-colors hover:bg-primary-50"
              >
                {isExpanded ? "Zwiń" : "Rozwiń więcej"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Attractions;
