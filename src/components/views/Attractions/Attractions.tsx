import { useState } from "react";
import CardAttractions from "../../UI/Card/CardAtractions";
import { CAttractions, attractionsList } from "./content";
const Attractions = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayedAttractions =
    window.innerWidth >= 768 || isExpanded
      ? attractionsList
      : attractionsList.slice(0, 2);

  return (
    <section className="w-full bg-primary-50 py-12 md:py-6 lg:py-24">
      <div className="container-custom">
        <div className="space-y-6">
          <div className="text-center">
            <div className="mb-4 flex flex-col items-center justify-center md:mb-8">
              <h2 className="font-bold">{CAttractions.header}</h2>
              <span className="text-2xl font-semibold text-primary-500 lg:text-3xl">
                {CAttractions.subheader}
              </span>
            </div>
            <p className="mx-auto max-w-[700px] text-balance text-gray-500 md:text-xl">
              {CAttractions.description}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayedAttractions.map((attraction) => (
              <CardAttractions key={attraction.id} card={attraction} />
            ))}
          </div>

          {/* Toggle button - only visible on mobile */}
          {window.innerWidth < 768 && attractionsList.length > 2 && (
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="rounded-md border border-primary-500 px-4 py-2 text-sm font-medium text-primary-500 transition-colors hover:bg-primary-50"
              >
                {isExpanded ? "Zwiń" : "Rozwiń więcej"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Attractions;
