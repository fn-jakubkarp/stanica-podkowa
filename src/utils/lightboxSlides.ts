import {
  cottageImages,
  newHouseImages,
  outdoorSummer,
  outdoorWinter,
} from "./assets";

// Summer Slides
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

// Winter Slides
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

// Old House/Cottage Slides
const cottageSlides = [
  { src: cottageImages.room },
  { src: cottageImages.kitchen },
  { src: cottageImages.bathroom },
  { src: cottageImages.livingRoom },
];

// New House Slides
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
