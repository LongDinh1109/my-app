import { useState, useRef, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const Carousel = ({ items }) => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel my-12 mx-auto 2xl:w-[75vw] xl:w-[60vw] lg:w-[55vw]">
      <div className="relative">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 px-2 text-black w-10 h-10 border border-neutral-300 rounded-full text-center hover:opacity-80 bg-white z-10  transition-all ease-in-out duration-300 ${
              isDisabled("prev") ? "hidden" : ""
            }`}
            disabled={isDisabled("prev")}
          >
            <ChevronLeftIcon className="h-5 w-5" />
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className={`absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 px-[10px] text-black w-10 h-10 border rounded-full border-neutral-300 text-center hover:opacity-80 bg-white z-10 transition-all ease-in-out duration-300 ${
              isDisabled("next") ? "hidden" : ""
            }`}
            disabled={isDisabled("next")}
          >
            <ChevronRightIcon className="h-5 w-5" />
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-5 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {items()}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
