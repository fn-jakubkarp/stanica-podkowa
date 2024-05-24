import { animated, useSpring } from "@react-spring/web";
import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { handleCall } from "../../../utils/handleCall";
const StickyContact: React.FC = () => {
  const [hidden, setHidden] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const threshold = 250;

      // Check if user has reached the bottom of the page
      const isBottomOfPage =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;

      if (
        currentScrollY > lastScrollY &&
        currentScrollY > threshold &&
        !isBottomOfPage
      ) {
        setHidden(false); // Show when scrolling down and not at the bottom
      } else if (currentScrollY < lastScrollY || isBottomOfPage) {
        setHidden(true); // Hide when scrolling up or at the bottom
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const stickySpring = useSpring({
    to: { transform: hidden ? "translateY(100%)" : "translateY(0%)" },
    config: { duration: 350 },
  });

  return (
    <animated.div
      className="text-text fixed bottom-0 z-50 flex h-[50px] w-full -translate-x-1/2 transform justify-around bg-white sm:hidden"
      style={stickySpring}
    >
      <button
        className="flex w-1/4 items-center justify-center border-r hover:bg-gray-200 "
        aria-label="Map"
        role="button"
      >
        <FaMapMarkerAlt aria-hidden="true" />
      </button>
      <button
        onClick={handleCall}
        className="flex w-3/4 items-center justify-center gap-2 hover:bg-gray-200 "
        aria-label="Call for reservation"
        role="button"
      >
        <FaPhoneAlt aria-hidden="true" /> Rezerwacja
      </button>
    </animated.div>
  );
};

export default StickyContact;
