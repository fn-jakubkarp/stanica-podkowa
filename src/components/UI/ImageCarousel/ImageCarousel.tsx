import { animated, useSpring } from "@react-spring/web";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { CardType } from "../Card/CardType";
const animations = {
  slide: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  },
  controls: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.5,
      },
    },
  },
};

interface CarouselProps {
  images: CardType[];
  autoplayInterval?: number;
  className?: string;
}

const ImageCarousel = ({
  images,
  autoplayInterval = 4000,
  className = "",
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Calculate the total width of the carousel based on number of images
  const totalWidth = `${images.length * 100}%`;
  const slideWidth = `${100 / images.length}%`;

  // Spring animation for smooth sliding
  const slideProps = useSpring({
    from: { transform: "translateX(0%)" },
    to: { transform: `translateX(-${currentIndex * (100 / images.length)}%)` },
    config: { tension: 280, friction: 60 },
    onStart: () => setIsTransitioning(true),
    onRest: () => setIsTransitioning(false),
  });

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }
  }, [images.length, isTransitioning]);

  const previousSlide = useCallback(() => {
    if (!isTransitioning) {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  }, [images.length, isTransitioning]);

  const goToSlide = (index: number) => {
    if (!isTransitioning) {
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;

    if (isAutoPlaying && !isTransitioning) {
      intervalId = setInterval(nextSlide, autoplayInterval);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying, nextSlide, autoplayInterval, isTransitioning]);

  // Ensure there are images to display
  if (!images.length) {
    return null;
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={animations.slide}
      className={`group relative h-full w-full overflow-hidden rounded-lg ${className}`}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <animated.div
        className="relative h-full"
        style={{
          ...slideProps,
          width: totalWidth,
          display: "flex",
        }}
      >
        {images.map((image) => (
          <div
            key={image.id}
            className="relative"
            style={{ width: slideWidth }}
          >
            {image.url && (
              <img
                src={image.url}
                alt={image.alt || ""}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            )}
          </div>
        ))}
      </animated.div>

      <motion.div
        variants={animations.controls}
        className="absolute inset-0 flex items-center justify-between p-4"
      >
        <button
          onClick={previousSlide}
          className="rounded-full bg-white/80 p-2 shadow-lg transition-all duration-200 hover:bg-white hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-50"
          aria-label="Previous slide"
          disabled={isTransitioning}
        >
          <ChevronLeft className="h-6 w-6 text-primary-700" />
        </button>
        <button
          onClick={nextSlide}
          className="rounded-full bg-white/80 p-2 shadow-lg transition-all duration-200 hover:bg-white hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-50"
          aria-label="Next slide"
          disabled={isTransitioning}
        >
          <ChevronRight className="h-6 w-6 text-primary-700" />
        </button>
      </motion.div>

      {/* Pgination dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`h-2 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-50 ${
              index === currentIndex
                ? "bg-primary-600 w-6 rounded-full"
                : "hover:bg-primary-200 w-2 rounded-full bg-primary-100"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? "true" : "false"}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ImageCarousel;
