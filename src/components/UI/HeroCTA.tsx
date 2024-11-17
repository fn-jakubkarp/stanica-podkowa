import React from "react";

interface HeroCTAProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const HeroCTA: React.FC<HeroCTAProps> = ({
  children,
  onClick,
  className = "",
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        btn
        group
        relative
        inline-flex
        items-center
        justify-center
        overflow-hidden
        bg-primary-500
        text-white
        transition-all
        duration-300
        ease-out
        hover:bg-primary-500/90
        ${className}
      `}
      type="button"
      {...props}
    >
      <div className="animate-gradient absolute inset-0 h-full w-full bg-gradient-to-r from-earth-300/20 via-accent-300/20 to-earth-300/20 opacity-0 transition-all duration-300 ease-out group-hover:bg-[length:400%_100%] group-hover:opacity-100"></div>

      <div className="relative flex transform items-center gap-2 px-6 py-2 font-josefin text-2xl font-semibold transition-transform duration-300 ">
        {children}
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-full scale-x-0 transform bg-accent-500 transition-transform duration-300 group-hover:scale-x-100"></div>
    </button>
  );
};

export default HeroCTA;
