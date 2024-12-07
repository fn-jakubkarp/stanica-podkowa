import { ArrowRight } from "lucide-react";
import React from "react";
import CardTestimonials from "../../UI/Card/CardTestimonials";

export interface ITestimonial {
  name: string;
  quote: string;
  rating: number;
}

const reviewsUrl =
  "https://www.google.com/travel/hotels/entity/CgsIndncvoarmIzMARAB/reviews?gsas=1&ts=CAESCAoCCAMKAggDGiAKAhoAEhoSFAoHCOgPEAwYCRIHCOgPEAwYChgBMgIQACoECgAaAA&qs=OAI&biw=2400&bih=1146&hl=pl-PL";

const Testimonials: React.FC = () => {
  const testimonialData: ITestimonial[] = [
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

  return (
    <section className="bg-primary-50">
      <div className="container-custom py-4 lg:py-8">
        <div className="mb-8 md:flex md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-primary-700 md:text-4xl lg:text-5xl">
              OPINIE
            </h2>

            <p className="mt-6 max-w-lg text-gray-500 md:text-xl">
              Poczytaj opinie gości, którzy nas odwiedzili.
            </p>
          </div>

          <div className="flex cursor-pointer items-center gap-2 font-medium text-primary-700">
            <button className="btn btn-primary flex w-full ">
              <a
                href={reviewsUrl}
                className="flex flex-row items-center justify-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zobacz wszystkie
                <ArrowRight size={16} />
              </a>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {testimonialData.map((testimonial, index) => (
            <CardTestimonials
              key={index}
              name={testimonial.name}
              quote={testimonial.quote}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
