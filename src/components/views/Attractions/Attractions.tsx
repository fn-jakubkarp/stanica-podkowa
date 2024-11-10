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

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary-50">
      <div className="container-custom">
        <div className="space-y-6">
          <div className="text-center">
            <div className="flex flex-col items-center justify-center mb-4 md:mb-8">
              <h2 className="font-bold">ATRAKCJE</h2>
              <span className="text-2xl lg:text-3xl font-semibold text-primary-500">w okolicy</span>
            </div>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl text-balance">
              Odkryj lokalne perełki i ukryte cuda które sprawią, że Twój
              wypoczynek stanie się na prawdę wyjątkowy.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {attractions.map((attraction) => (
              <CardAttractions key={attraction.id} card={attraction} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Attractions;