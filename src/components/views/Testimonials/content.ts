export interface ITestimonial {
  name: string;
  quote: string;
  rating: number;
}

export const CTestimonials = {
  header: "OPINIE",
  description: "Poczytaj opinie gości, którzy nas odwiedzili.",
  reviewsUrl:
    "https://www.google.com/travel/hotels/entity/CgsIndncvoarmIzMARAB/reviews?gsas=1&ts=CAESCAoCCAMKAggDGiAKAhoAEhoSFAoHCOgPEAwYCRIHCOgPEAwYChgBMgIQACoECgAaAA&qs=OAI&biw=2400&bih=1146&hl=pl-PL",
  button: "Zobacz wszystkie",
};

export const testimonialData: ITestimonial[] = [
  {
    name: "Agnieszka",
    quote:
      "Stanica Podkowa to miejsce, które z pewnością warto odwiedzić. Świetne warunki, bogata oferta rekreacyjna oraz serdeczna atmosfera sprawiają, że każdy pobyt tutaj jest niezapomnianym doświadczeniem. Polecam gorąco wszystkim, którzy szukają spokoju i kontaktu z naturą! 😍",
    rating: 5,
  },
  {
    name: "Katarzyna",
    quote:
      "Polecam z całego serca! Cisza, spokój, daleko od ludzi. Domek super, miejsce na grill super, właściciele super :) dużym plusem było dla nas to, że dzieciaki mieli gdzie zagrać w piłkę. Na pewno jeszcze tam wrócimy! :)",
    rating: 5,
  },
  {
    name: "Krzysztof",
    quote:
      "Cudowne, spokojne miejsce, idealne na imprezę rodzinną, spotkanie ze znajomymi, weekend we dwoje i wiele innych tego typu okazji :-) pan Kamil i pani Kasia dopilnują żeby niczego Wam nie brakowało :-) Polecam z całego serca",
    rating: 5,
  },
];
