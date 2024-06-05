import { hero_us } from "../../../utils/assets";
interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = ({}) => {
  return (
    <>
      <section className="defaultPaddings mx-auto justify-center flex w-full max-w-screen-xl py-12 md:py-24">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <img
            src={hero_us}
            width="550"
            height="550"
            alt="About Us"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Our Rural Business
              </h1>
              <p className=" overflow-hidden md:text-xl">
                Welcome to our family-owned rural business, where we take pride
                in crafting high-quality products and providing exceptional
                services to our community. Founded in 1985, our business has
                been a cornerstone of this beautiful countryside for over three
                decades.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Our History</h2>
              <p className=" md:text-lg ">
                Our story began when our grandparents, John and Jane Doe,
                decided to turn their passion for farming and local
                craftsmanship into a thriving business. They started by selling
                their homegrown produce and handmade goods at the local farmers'
                market, quickly gaining a loyal following in the community.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p className=" md:text-lg ">
                At the heart of our business is a deep commitment to
                sustainability, community, and quality. We strive to source our
                materials locally, support other small businesses in the area,
                and minimize our environmental impact. Our mission is to
                preserve the rural way of life and provide our customers with
                products and services that reflect the authentic character of
                this beautiful region.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
