import {
  cottageImages,
  newHouseImages,
  outdoorSummer,
  outdoorWinter,
} from "./assets";

const summerSlides = [
  { src: outdoorSummer.arbor.main },
  { src: outdoorSummer.arbor.entrance },
  { src: outdoorSummer.forecourt },
  { src: outdoorSummer.hayBales },
  { src: outdoorSummer.house },
  { src: outdoorSummer.land },
  { src: outdoorSummer.playground },
  { src: outdoorSummer.signpost },
];

const winterSlides = [
  { src: outdoorWinter.arbor.main },
  { src: outdoorWinter.arbor.bottom },
  { src: outdoorWinter.arbor.top },
  { src: outdoorWinter.arbor.interior[0] },
  { src: outdoorWinter.arbor.interior[1] },
  { src: outdoorWinter.cottage.main },
  { src: outdoorWinter.cottage.icicle[0] },
  { src: outdoorWinter.cottage.icicle[1] },
  { src: outdoorWinter.cottage.terrace },
  { src: outdoorWinter.sauna },
];

const cottageSlides = [
  { src: cottageImages.kitchen },
  { src: cottageImages.room.big },
  { src: cottageImages.room.double },
  { src: cottageImages.bathroom.bottom },
  { src: cottageImages.livingRoom },
  { src: cottageImages.wallCarpet },
  { src: cottageImages.salon },
  { src: cottageImages.bathroom.top },
];

const newHouseSlides = [
  { src: newHouseImages.bathroom.top },
  { src: newHouseImages.bathroom.bottom },
  { src: newHouseImages.hall },
  { src: newHouseImages.kidsArea },
  { src: newHouseImages.kitchen.main },
  { src: newHouseImages.kitchen.detail },
  { src: newHouseImages.livingRoom.main },
  { src: newHouseImages.livingRoom.wide },
  { src: newHouseImages.rooms.double },
  { src: newHouseImages.rooms.triple },
  { src: newHouseImages.rooms.quad },
];

// TODO: Change ====> Mansion Slides (using same images as newHouse for now)
const mansionSlides = [
  { src: newHouseImages.bathroom.top },
  { src: newHouseImages.bathroom.bottom },
  { src: newHouseImages.hall },
  { src: newHouseImages.kidsArea },
  { src: newHouseImages.kitchen.main },
  { src: newHouseImages.kitchen.detail },
  { src: newHouseImages.livingRoom.main },
  { src: newHouseImages.livingRoom.wide },
  { src: newHouseImages.rooms.double },
  { src: newHouseImages.rooms.triple },
  { src: newHouseImages.rooms.quad },
];

export const allSlides = {
  summer: summerSlides,
  winter: winterSlides,
  cottage: cottageSlides,
  newHouse: newHouseSlides,
  mansion: mansionSlides,
};
