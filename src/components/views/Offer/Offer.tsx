import { useNavigate } from "react-router-dom";

export default function Offer() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cennik");
  };

  return (
    <section className="w-full bg-secondary py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-6 text-center">
          <h3 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Nasza oferta
          </h3>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Poznaj bogactwo atrakcji i możliwości wypoczynku, jakie oferuje
            nasza agroturystyka.
          </p>
          <button
            onClick={handleClick}
            aria-label="Poznaj naszą ofertę"
            className="inline-flex h-12 items-center justify-center rounded-md bg-gray-900 px-8 text-base font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          >
            Odkryj ofertę w całości
          </button>
        </div>
        <div className="mt-12 flex justify-center">
          <div className="grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <HouseIcon className="h-6 w-6 text-green-500" />
              </div>
              <h4 className="mb-2 text-xl font-bold">Noclegi</h4>
              <p className="text-gray-500">
                Zapraszamy do naszych dwóch uroczych domów na wynajem. Każdy
                oferuje przestronne, przytulnie urządzone pokoje oraz w pełni
                wyposażoną kuchnię. Z balkonu rozciąga się malowniczy widok,
                który zachwyca o każdej porze roku.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                <FlameKindlingIcon className="h-6 w-6 text-yellow-500" />
              </div>
              <h4 className="mb-2 text-xl font-bold">Grill</h4>
              <p className="text-gray-500">
                Nasza przestrzeń grillowa to idealne miejsce na wieczorne
                spotkania z rodziną i przyjaciółmi. Oferujemy przytulne miejsce
                do biesiadowania na świeżym powietrzu. Ciesz się smakiem
                grillowanych potraw w wyjątkowej atmosferze!
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <PlaygroundIcon className="h-6 w-6 text-blue-500" />
              </div>
              <h4 className="mb-2 text-xl font-bold">Atrakcje dla Dzieci</h4>
              <p className="text-gray-500">
                Dla najmłodszych mamy prosty plac zabaw z huśtawkami,
                zjeżdżalnią i piaskownicą. Jest to idealne miejsce na beztroską
                zabawę na świeżym powietrzu. Dbamy o to, aby dzieci miały
                wspaniałe wspomnienia z pobytu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function PlaygroundIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 4h20" />
      <path d="M4 4v16" />
      <path d="M20 4v16" />
      <rect x="8" y="12" width="8" height="3" rx="1" />
      <line x1="10" y1="4" x2="10" y2="12" />
      <line x1="14" y1="4" x2="14" y2="12" />
    </svg>
  );
}

function HouseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function FlameKindlingIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z" />
      <path d="m5 22 14-4" />
      <path d="m5 18 14 4" />
    </svg>
  );
}
