import { FlameKindling, Home, PlayCircle } from "lucide-react";

export const COffer = {
  header: "NASZA OFERTA",
  description:
    "Poznaj bogactwo atrakcji i możliwości wypoczynku, jakie oferuje nasza agroturystyka.",
  button: "Odkryj ofertę w całości",
};

export const OfferCardData = [
  {
    icon: <Home className="h-6 w-6" />,
    title: "Noclegi",
    description:
      "Zapraszamy do naszych dwóch uroczych domów na wynajem. Każdy oferuje przestronne, przytulnie urządzone pokoje oraz w pełni wyposażoną kuchnię. Z balkonu rozciąga się malowniczy widok, który zachwyca o każdej porze roku.",
    iconBg: "bg-primary-100",
    iconColor: "text-primary-500",
  },
  {
    icon: <FlameKindling className="h-6 w-6" />,
    title: "Grill",
    description:
      "Nasza przestrzeń grillowa to idealne miejsce na wieczorne spotkania z rodziną i przyjaciółmi. Oferujemy przytulne miejsce do biesiadowania na świeżym powietrzu. Ciesz się smakiem grillowanych potraw w wyjątkowej atmosferze!",
    iconBg: "bg-earth-100",
    iconColor: "text-earth-500",
  },
  {
    icon: <PlayCircle className="h-6 w-6" />,
    title: "Atrakcje dla Dzieci",
    description:
      "Dla najmłodszych mamy prosty plac zabaw z huśtawkami, zjeżdżalnią i piaskownicą. Jest to idealne miejsce na beztroską zabawę na świeżym powietrzu. Dbamy o to, aby dzieci miały wspaniałe wspomnienia z pobytu.",
    iconBg: "bg-accent-100",
    iconColor: "text-accent-500",
  },
];
