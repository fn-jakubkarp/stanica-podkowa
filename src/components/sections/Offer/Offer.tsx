import { useNavigate } from "react-router-dom";

export default function Offer() {

    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/cennik");
    };
  return (
    <section className="w-full bg-secondary py-12 md:py-24 lg:py-32 ">
      <div className="container w-full max-w-screen-xl mx-auto px-4 md:px-6 defaultPaddings">
        <div className="space-y-6 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Nasza oferta
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
            Discover the best of rural living with our carefully curated
            experiences and amenities.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-white p-6 shadow-lg ">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 ">
              <LeafIcon className="h-6 w-6 text-green-500 " />
            </div>
            <h3 className="mb-2 text-xl font-bold">Organic Farm Tour</h3>
            <p className="text-gray-500 ">
              Explore our sustainable farm and learn about our organic farming
              practices.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg ">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 ">
              <FlameKindlingIcon className="h-6 w-6 text-yellow-500 " />
            </div>
            <h3 className="mb-2 text-xl font-bold">Campfire Experiences</h3>
            <p className="text-gray-500 ">
              Gather around the campfire for stargazing, storytelling, and
              s'mores.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg ">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 ">
              <FishIcon className="h-6 w-6 text-blue-500 " />
            </div>
            <h3 className="mb-2 text-xl font-bold">Fishing Excursions</h3>
            <p className="text-gray-500 ">
              Cast your line in our well-stocked ponds and enjoy a peaceful day
              of fishing.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg ">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 ">
              <MountainIcon className="h-6 w-6 text-red-500 " />
            </div>
            <h3 className="mb-2 text-xl font-bold">Hiking Trails</h3>
            <p className="text-gray-500 ">
              Explore our network of scenic hiking trails and immerse yourself
              in nature.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FishIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" />
      <path d="M18 12v.5" />
      <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86" />
      <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33" />
      <path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" />
      <path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" />
    </svg>
  );
}

function FlameKindlingIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z" />
      <path d="m5 22 14-4" />
      <path d="m5 18 14 4" />
    </svg>
  );
}

function LeafIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
