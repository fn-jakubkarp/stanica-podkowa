import { ArrowRight } from "lucide-react";
import React from "react";
import CardTestimonials from "../../UI/Card/CardTestimonials";
import { CTestimonials, testimonialData } from "./content";

const Testimonials: React.FC = () => {
  return (
    <section className="bg-primary-50">
      <div className="container-custom py-4 lg:py-8">
        <div className="mb-8 flex flex-col items-center">
          <div className="max-w-xl text-center">
            <h2 className=" font-bold">{CTestimonials.header}</h2>

            <p className=" max-w-lg text-gray-500 md:text-xl">
              {CTestimonials.description}
            </p>
          </div>

          <div className="mt-6 w-full md:w-auto">
            <button className="btn btn-primary flex w-full items-center justify-center gap-2">
              <a
                href={CTestimonials.reviewsUrl}
                className="flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                {CTestimonials.button}
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
