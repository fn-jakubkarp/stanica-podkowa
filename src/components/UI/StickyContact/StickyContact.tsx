import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const StickyContact: React.FC = () => {
  const handleCall = () => {
    window.location.href = "tel:+48510058955";
  };

  return (
    <div className="fixed flex justify-around bottom-0 left-1/2 transform -translate-x-1/2  bg-white text-text w-full z-50 h-[50px] sm:hidden">
      <button className="border-r flex items-center justify-center w-1/4">
        <FaMapMarkerAlt />
      </button>
      <button
        onClick={handleCall}
        className="flex items-center gap-2 w-3/4 justify-center"
      >
        <FaPhoneAlt /> Rezerwacja
      </button>
    </div>
  );
};

export default StickyContact;
