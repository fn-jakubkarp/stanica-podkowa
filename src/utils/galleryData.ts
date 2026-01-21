import { CardType } from "../components/UI/Card/CardType";
import * as assets from "../utils/assets";
import { allSlides } from "./lightboxSlides";
export interface GalleryItemType {
  id: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  slides: Array<{ src: string }>;
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

export const showcaseNewHouse: CardType[] = [
  {
    url: assets.newHouseImages.rooms.double,
    alt: "Zdjęcie pokoju",
    id: 1,
  },
  {
    url: assets.newHouseImages.bathroom.top,
    alt: "Zdjęcie łazienki",
    id: 2,
  },
  {
    url: assets.newHouseImages.livingRoom.main,
    alt: "Zdjęcie salonu",
    id: 3,
  },
  {
    url: assets.newHouseImages.kitchen.main,
    alt: "Zdjęcie kuchnii",
    id: 4,
  },
  {
    url: assets.newHouseImages.kidsArea,
    alt: "Zdjęcie sekcji dla dzieci",
    id: 5,
  },
];

export const showcaseCottage: CardType[] = [
  {
    url: assets.cottageImages.room.double,
    alt: "Zdjęcie pokoju",
    id: 1,
  },
  {
    url: assets.cottageImages.bathroom.bottom,
    alt: "Zdjęcie łazienki",
    id: 2,
  },
  {
    url: assets.cottageImages.livingRoom,
    alt: "Zdjęcie salonu",
    id: 3,
  },
  {
    url: assets.cottageImages.kitchen,
    alt: "Zdjęcie kuchnii",
    id: 4,
  },
];
