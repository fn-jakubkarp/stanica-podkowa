import { animated, useSpring } from "@react-spring/web";
import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { phoneNumbers } from "../../../constants/phoneNumbers";
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
      className="fixed bottom-0 z-50 w-full sm:hidden"
      style={stickySpring}
    >
      <div className="flex h-16 w-full items-center bg-primary-50 justify-around shadow-lg border border-top">
        <a
          href="https://maps.app.goo.gl/1prR5CRuaxLkR8UT6"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-full  items-center justify-center gap-3 bg-primary-50 px-4 text-primary-700 transition-all hover:bg-primary-100"
        >
          <div className="flex items-center justify-center gap-2 rounded-full bg-primary-100 p-2 px-4">
            <FaMapMarkerAlt className="text-lg" aria-hidden="true" />
            <span className="font-josefin text-base font-semibold">Mapa</span>
          </div>
        </a>

        <button
          onClick={() => handleCall(phoneNumbers.kamil)}
          className="flex h-full  items-center justify-center gap-3 bg-primary-50 px-4 text-primary-700 transition-all hover:bg-primary-100"
          aria-label="Zadzwoń, aby zarezerwować"
        >
          <div className="flex items-center justify-center gap-2 rounded-full bg-primary-100 p-2 px-4">
            <FaPhoneAlt className="text-lg" aria-hidden="true" />
            <span className="font-josefin text-base font-semibold">
              Rezerwacja
            </span>
          </div>
        </button>
      </div>

      {/* Safe area for devices with home indicator */}
      <div className="h-safe-area bg-white" />
    </animated.div>
  );
};

export default StickyContact;
