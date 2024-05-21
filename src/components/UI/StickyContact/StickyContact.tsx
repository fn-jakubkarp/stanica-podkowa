import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { animated, useSpring } from "@react-spring/web";
import { useState, useEffect } from "react";
const StickyContact: React.FC = () => {
  const handleCall = () => {
    window.location.href = "tel:+48510058955";
  };

  const [hidden, setHidden] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const threshold = 250;

      if (currentScrollY > lastScrollY && currentScrollY > threshold) {
        setHidden(false); // Show when scrolling down
      } else if (currentScrollY < lastScrollY) {
        setHidden(true); // Hide when scrolling up
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
      className="fixed flex justify-around bottom-0 transform -translate-x-1/2  bg-white text-text w-full z-50 h-[50px] sm:hidden"
      style={stickySpring}
    >
      <button className="border-r flex items-center justify-center w-1/4">
        <FaMapMarkerAlt />
      </button>
      <button
        onClick={handleCall}
        className="flex items-center gap-2 w-3/4 justify-center"
      >
        <FaPhoneAlt /> Rezerwacja
      </button>
    </animated.div>
  );
};

export default StickyContact;
