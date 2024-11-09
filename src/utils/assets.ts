/**
 * Asset Imports and Modular Exports
 * Organized by category with semantic naming
 */

// Brand Assets
import bulletPoint from "../assets/svgs/bullet_point.svg";
import logoDark from "../assets/svgs/darkLogo.svg";
import logo from "../assets/svgs/logo.svg";

// Hero Section Images
import heroAccommodation from "../assets/Hero/accommodation.jpg";
import heroEvents from "../assets/Hero/events.jpg";
import heroGrill from "../assets/Hero/grill.jpg";
import heroMain from "../assets/Hero/hero.webp";
import heroHorses from "../assets/Hero/horses.jpg";
import heroMacro from "../assets/Hero/macro.jpg";
import heroNightSky from "../assets/Hero/night_sky.webp?url";
import heroOldHouse from "../assets/Hero/old_house.jpg";
import heroPlain from "../assets/Hero/plain.jpg";
import heroSauna from "../assets/Hero/sauna.jpg";
import heroUs from "../assets/Hero/us.jpg";

// Indoor Images
// New House
import newHouseBathroomBottom from "../assets/Indoor/House/bathroom_bottom.jpg";
import newHouseBathroomTop from "../assets/Indoor/House/bathroom_top.jpg";
import newHouseKidsArea from "../assets/Indoor/House/kid_section.jpg";
import newHouseKitchen from "../assets/Indoor/House/kitchen.jpg";
import newHouseKitchenDetail from "../assets/Indoor/House/kitchen_closeup.jpg";
import newHouseLivingRoomWide from "../assets/Indoor/House/living_room.jpg";
import newHouseLivingRoom from "../assets/Indoor/House/living_room_2.jpg";
import newHouseHall from "../assets/Indoor/House/main_hall.jpg";
import newHouseRoomQuad from "../assets/Indoor/House/room_four.jpg";
import newHouseRoomTriple from "../assets/Indoor/House/room_three.jpg";
import newHousePricelist from "../assets/Indoor/House/room_top.jpg";
import newHouseRoomDouble from "../assets/Indoor/House/room_two.jpg";

// Old House/Cottage
import cottageBigRoom from "../assets/Indoor/Cottage/big_room.jpg";
import cottageBottomBathroom from "../assets/Indoor/Cottage/bottom_bathroom.jpg";
import cottageDoubleRoom from "../assets/Indoor/Cottage/double_room.jpg";
import cottageKitchen from "../assets/Indoor/Cottage/kitchen.jpg";
import cottageLivingRoom from "../assets/Indoor/Cottage/living_room.jpg";
import cottageSalon from "../assets/Indoor/Cottage/salon.jpg";
import cottageTopBathroom from "../assets/Indoor/Cottage/top_bathroom.jpg";
import cottageWallCarpet from "../assets/Indoor/Cottage/wall_carpet.jpg";

// Outdoor Images
// Summer
import summerArbor from "../assets/Outdoor/Summer/arbor.jpg";
import summerArborEntrance from "../assets/Outdoor/Summer/arbor_enterance.jpg";
import summerForecourt from "../assets/Outdoor/Summer/forecourt.jpg";
import summerHayBales from "../assets/Outdoor/Summer/hay_bales.jpg";
import summerHouse from "../assets/Outdoor/Summer/house.jpg";
import summerLand from "../assets/Outdoor/Summer/land.jpg";
import summerPlayground from "../assets/Outdoor/Summer/playground_stairs.jpg";
import summerSignpost from "../assets/Outdoor/Summer/signpost.jpg";

// Winter
import winterArbor from "../assets/Outdoor/Winter/arbor.jpg";
import winterArborBottom from "../assets/Outdoor/Winter/arbor_bottom.jpg";
import winterArborInterior1 from "../assets/Outdoor/Winter/arbor_interior.jpg";
import winterArborInterior2 from "../assets/Outdoor/Winter/arbor_interior2.jpg";
import winterArborTop from "../assets/Outdoor/Winter/arbor_top.jpg";
import winterCottage from "../assets/Outdoor/Winter/cottage.jpg";
import winterCottageIcicle1 from "../assets/Outdoor/Winter/cottage_icicle.jpg";
import winterCottageIcicle2 from "../assets/Outdoor/Winter/cottage_icicle_2.jpg";
import winterCottageTerrace from "../assets/Outdoor/Winter/cottage_terrace.jpg";
import winterSauna from "../assets/Outdoor/Winter/sauna.jpg";

// Export groups
export const brandAssets = {
  logo,
  logoDark,
  bulletPoint,
};

export const heroImages = {
  main: heroMain,
  nightSky: heroNightSky,
  accommodation: heroAccommodation,
  events: heroEvents,
  grill: heroGrill,
  horses: heroHorses,
  macro: heroMacro,
  oldHouse: heroOldHouse,
  plain: heroPlain,
  sauna: heroSauna,
  us: heroUs,
};

export const newHouseImages = {
  bathroom: {
    top: newHouseBathroomTop,
    bottom: newHouseBathroomBottom,
  },
  hall: newHouseHall,
  kidsArea: newHouseKidsArea,
  kitchen: {
    main: newHouseKitchen,
    detail: newHouseKitchenDetail,
  },
  livingRoom: {
    main: newHouseLivingRoom,
    wide: newHouseLivingRoomWide,
  },
  rooms: {
    double: newHouseRoomDouble,
    triple: newHouseRoomTriple,
    quad: newHouseRoomQuad,
  },
  pricelist: newHousePricelist,
};

export const cottageImages = {
  room: {
    big: cottageBigRoom,
    double: cottageDoubleRoom,
  },
  bathroom: {
    top: cottageTopBathroom,
    bottom: cottageBottomBathroom,
  },
  kitchen: cottageKitchen,
  livingRoom: cottageLivingRoom,
  salon: cottageSalon,
  wallCarpet: cottageWallCarpet,
};

export const outdoorSummer = {
  arbor: {
    main: summerArbor,
    entrance: summerArborEntrance,
  },
  forecourt: summerForecourt,
  hayBales: summerHayBales,
  house: summerHouse,
  land: summerLand,
  playground: summerPlayground,
  signpost: summerSignpost,
};

export const outdoorWinter = {
  arbor: {
    main: winterArbor,
    bottom: winterArborBottom,
    top: winterArborTop,
    interior: [winterArborInterior1, winterArborInterior2],
  },
  cottage: {
    main: winterCottage,
    icicle: [winterCottageIcicle1, winterCottageIcicle2],
    terrace: winterCottageTerrace,
  },
  sauna: winterSauna,
};

// Default export with all images
export default {
  brandAssets,
  heroImages,
  newHouseImages,
  cottageImages,
  outdoorSummer,
  outdoorWinter,
};
