import { animated } from "@react-spring/web";
import useInViewTrailAnimation from "../../hooks/useInViewTrailAnimation";
import { hero_hero } from "../../utils/assets";

const Gallery: React.FC = () => {
  const letters = ["G", "A", "L", "E", "R", "I", "A"];
  const { ref: lettersRef, trail: lettersTrail } = useInViewTrailAnimation(
    letters,
    200,
    false,
  );

  return (
    <>
      <div className="flex flex-col h-full w-screen items-center justify-center bg-secondary px-4 gap-12">
        <div className="w-screen relative flex justify-center items-center">
          <img
            src={hero_hero}
            alt="Tło strony, zdjęcie pokoju"
            className="opacity-70 masked"
          />
          <animated.header className="flex absolute" ref={lettersRef}>
            {lettersTrail.map((props, index) => (
              <animated.h1 key={index} className=" text-5xl pr-1" style={props}>
                {letters[index]}
              </animated.h1>
            ))}
          </animated.header>
        </div>

        <section className="flex flex-col ">
          <div className="">
            <img src={hero_hero} alt="" className="" />
          </div>
          <h3 className="self-end pt-4 pr-4">Posiadłość</h3>
        </section>
        {/* <section>
          <img src={nh_living_room} alt="" />
          <h3>Wnętrze</h3>
        </section>
        <section>
          <img src={hero_sauna} alt="" />
          <h3>Okolica zimą</h3>
        </section>
        <section>
          <img src={hero_hero} alt="" />
          <h3>Okolica latem</h3>
        </section> */}
      </div>
    </>
  );
};

export default Gallery;
