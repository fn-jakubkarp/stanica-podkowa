import {
  m_arbor,
  nh_living_room_wide,
  oh_living_room,
  s_signpost,
  w_arbor_bottom,
} from "../utils/assets";

import {
  interiorSlides,
  mansionSlides,
  summerSlides,
  winterSlides,
  woodenHouseSlides,
} from "./lightboxSlides";

export interface GalleryItemType {
  id: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  slides: { src: string }[];
}

export const galleryData: GalleryItemType[] = [
  {
    id: "mansion",
    image: m_arbor,
    alt: "Zdjęcie drewnianej altany, z placem zabaw w tle",
    title: "Posiadłość",
    description: "Zachwyć się malowniczymi widokami naszej posiadłości.",
    slides: mansionSlides,
  },
  {
    id: "summer",
    image: s_signpost,
    alt: "Krajobraz zachodu słońca z drogowskazem na przodzie",
    title: "Lato",
    description: "Ciesz się urokami lata w otoczeniu natury.",
    slides: summerSlides,
  },
  {
    id: "interior",
    image: nh_living_room_wide,
    alt: "Wnętrze domu z przestronnym salonem",
    title: "Pokoje gościnne",
    description: "Odkryj przytulne i komfortowe wnętrza naszych domów.",
    slides: interiorSlides,
  },
  {
    id: "winter",
    image: w_arbor_bottom,
    alt: "Drewniana altana pokryta śniegiem",
    title: "Zima",
    description: "Doświadcz magii zimy w naszej malowniczej okolicy.",
    slides: winterSlides,
  },
  {
    id: "wooden-house",
    image: oh_living_room,
    alt: "Drewniany dom w otoczeniu natury",
    title: "Drewniany dom",
    description: "Odkryj urok naszego drewnianego domu w sercu natury.",
    slides: woodenHouseSlides,
  },
];
