export const CPriceDetails = {
  header: "Cennik pokoi gościnnych",
  roomNote:
    "Ceny za pokój przy wynajmnie na minimum 2 doby. Przy wynajmie na jedną dobę, Święta, długie weekendy, Sylwestra itp. ceny ustalane są indywidualnie.",
  additionalNote:
    "W okresie 1 listopada do 31 marca koszt wynajęcia balii wzrasta o 50zł.",
  additional: "Dodatkowe atrakcje",
};

export const roomPrices = [
  { people: "1 osoba", price: "130" },
  { people: "2 osoby", price: "200" },
  { people: "3 osoby", price: "270" },
  { people: "4 osoby", price: "320" },
];

export const additionalPrices = [
  {
    name: "Sauna",
    price: "100zł / 1h",
  },
  {
    name: "Balia",
    price: (
      <>
        150 zł / 1,5h
        <br />
        200 zł / 2h
        <br />
        250 zł / 4h*
      </>
    ),
  },
  {
    name: "Wyżywienie",
    price: "Ustalana indywidualnie",
  },
  {
    name: "Taczka drewna",
    price: "50 zł / sztuka",
  },
];
