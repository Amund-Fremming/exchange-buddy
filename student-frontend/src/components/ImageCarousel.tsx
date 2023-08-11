import React, { useState, useEffect, useRef } from "react";
import { Transition } from "@headlessui/react";
import classNames from "classnames";

interface ImageCarouselProps {
    images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [scrollInterval, setScrollInterval] = useState<NodeJS.Timeout | null> (null);
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Set up the automatic scrolling interval
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) =>
                prevIndex + 1 >= images.length ? 0 : prevIndex + 1
            );
        }, 5000);
        setScrollInterval(interval);


        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, [images.length]);

    const handleTransitionEnd = () => {
        setIsTransitioning(false);
        // If the current index is the last image, reset the carousel to the first image
        if (currentIndex + 2 >= images.length) {
            setCurrentIndex(0);
        }
    };

    const resetInterval = () => {
        // reset the timer for the interval after a user button tap
        if (scrollInterval) {
            clearInterval(scrollInterval);
            const interval = setInterval(() => {
                setIsTransitioning(true);
                setCurrentIndex((prevIndex) =>
                    prevIndex + 1 >= images.length ? 0 : prevIndex + 1
                );
            }, 5000);
            setScrollInterval(interval);
        }
    };

    const handlePrevious = () => {
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) =>
         prevIndex === images.length - 1 ? 0 : prevIndex + 1
         
        );
    };

    return (
        <div
            className="relative h-96 mt-6 overflow-x-hidden"
            ref={carouselRef}
        >
            <div className="absolute top-0 left-0 h-full w-full flex lg:flex-row sm:flex-col md:flex-row  justify-center">
                {/* Display the three images */}
                {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
                    <Transition
                        key={image}
                        show={!isTransitioning}
                        enter="transition duration-300 ease-out"
                        enterFrom="transform scale-100 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-300 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                        afterLeave={handleTransitionEnd}
                    >
                        <img
                            onMouseOver={resetInterval}
                            src={image}
                            alt={`Image ${index}`}
                            className={classNames(
                                "w-fit h-full object-cover rounded-md transition transform hover:-translate-y-1",
                                { "mr-6": index !== 2 }
                            )}
                        />
                    </Transition>
                ))}
            </div>
            {/* Display the previous and next buttons */}
            <button
                className="absolute top-1/2 left-2 transition-transform hover:translate-x-1 bg-pink-600 md:bg-opacity-50 p-2 rounded-full -translate-y-1/2"
                onClick={() => {
                    handlePrevious();
                    resetInterval();
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
                </svg>
            </button>

            <button
                className="absolute top-1/2 right-2 transition-transform hover:-translate-x-1 bg-pink-600 md:bg-opacity-50 p-2 rounded-full -translate-y-1/2"
                onClick={() => {
                    handleNext();
                    resetInterval();
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"
                    />
                </svg>

            </button>
        </div>
    );
};

export default ImageCarousel;
