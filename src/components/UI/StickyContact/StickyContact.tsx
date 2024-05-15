const StickyContact: React.FC = () => {
  const handleCall = () => {
    window.location.href = "tel:+48510058955";
  };

  return (
    <div className="fixed flex justify-center bottom-0 left-1/2 transform -translate-x-1/2  bg-white text-text w-full z-50 h-[50px] sm:hidden">
      <button onClick={handleCall}>Zadzwoń i zarezerwuj</button>
    </div>
  );
};

export default StickyContact;
