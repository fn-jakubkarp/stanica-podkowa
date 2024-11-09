import * as assets from "../utils/assets";
import { allSlides } from "./lightboxSlides";

export interface GalleryItemType {
  id: string;
  image: any;
  alt: string;
  title: string;
  description: string;
  slides: any;
}

const mansion = assets.outdoorSummer.forecourt;
const summer = assets.outdoorSummer.signpost;
const winter = assets.outdoorWinter.arbor.bottom;
const cottage = assets.cottageImages.salon;
const house = assets.newHouseImages.livingRoom.wide;

export const galleryData: GalleryItemType[] = [
  {
    id: "mansion",
    image: mansion,
    alt: "Zdjęcie drewnianej altany, z placem zabaw w tle",
    title: "Posiadłość",
    description: "Zachwyć się malowniczymi widokami naszej posiadłości.",
    slides: allSlides.mansion,
  },
  {
    id: "summer",
    image: summer,
    alt: "Krajobraz zachodu słońca z drogowskazem na przodzie",
    title: "Lato",
    description: "Ciesz się urokami lata w otoczeniu natury.",
    slides: allSlides.summer,
  },
  {
    id: "interior",
    image: house,
    alt: "Wnętrze domu z przestronnym salonem",
    title: "Pokoje gościnne",
    description: "Odkryj przytulne i komfortowe wnętrza naszych domów.",
    slides: allSlides.newHouse,
  },
  {
    id: "winter",
    image: winter,
    alt: "Drewniana altana pokryta śniegiem",
    title: "Zima",
    description: "Doświadcz magii zimy w naszej malowniczej okolicy.",
    slides: allSlides.winter,
  },
  {
    id: "wooden-house",
    image: cottage,
    alt: "Drewniany dom w otoczeniu natury",
    title: "Drewniany dom",
    description: "Odkryj urok naszego drewnianego domu w sercu natury.",
    slides: allSlides.cottage,
  },
];
