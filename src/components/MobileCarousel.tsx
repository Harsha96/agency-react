import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MobileCarouselProps {
    children: React.ReactNode[];
    autoPlay?: boolean;
    autoPlayInterval?: number;
    showDots?: boolean;
    showArrows?: boolean;
}

export const MobileCarousel = ({
    children,
    autoPlay = true,
    autoPlayInterval = 4000,
    showDots = true,
    showArrows = false
}: MobileCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 300 : -300,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prev) => {
            if (newDirection === 1) {
                return prev === children.length - 1 ? 0 : prev + 1;
            } else {
                return prev === 0 ? children.length - 1 : prev - 1;
            }
        });
    };

    // Auto-play functionality
    useEffect(() => {
        if (autoPlay) {
            timerRef.current = setInterval(() => {
                paginate(1);
            }, autoPlayInterval);

            return () => {
                if (timerRef.current) {
                    clearInterval(timerRef.current);
                }
            };
        }
    }, [autoPlay, autoPlayInterval, currentIndex]);

    const resetAutoPlayTimer = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        if (autoPlay) {
            timerRef.current = setInterval(() => {
                paginate(1);
            }, autoPlayInterval);
        }
    };

    return (
        <div className="relative w-full overflow-hidden">
            <div className="relative h-full">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(_, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                                resetAutoPlayTimer();
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                                resetAutoPlayTimer();
                            }
                        }}
                        className="w-full"
                    >
                        {children[currentIndex]}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            {showArrows && children.length > 1 && (
                <>
                    <button
                        onClick={() => {
                            paginate(-1);
                            resetAutoPlayTimer();
                        }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all active:scale-95"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-900" />
                    </button>
                    <button
                        onClick={() => {
                            paginate(1);
                            resetAutoPlayTimer();
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all active:scale-95"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-900" />
                    </button>
                </>
            )}

            {/* Dots Indicator */}
            {showDots && children.length > 1 && (
                <div className="flex justify-center gap-2 mt-6">
                    {children.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                                resetAutoPlayTimer();
                            }}
                            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'w-8 bg-blue-600'
                                : 'w-2 bg-blue-200 hover:bg-blue-400'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
