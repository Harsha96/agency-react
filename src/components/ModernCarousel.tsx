import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';

interface ModernCarouselProps {
    children: React.ReactNode[];
    autoPlay?: boolean;
    autoPlayInterval?: number;
    showIndicators?: boolean;
}

export const ModernCarousel = ({
    children,
    autoPlay = true,
    autoPlayInterval = 5000,
    showIndicators = true
}: ModernCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    // Smooth slide variants with proper horizontal motion
    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 0.95
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            x: direction > 0 ? '-100%' : '100%',
            opacity: 0,
            scale: 0.95
        })
    };

    const swipeConfidenceThreshold = 5000;
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

    // Auto-play
    useEffect(() => {
        if (autoPlay && !isDragging) {
            timerRef.current = setInterval(() => {
                paginate(1);
            }, autoPlayInterval);

            return () => {
                if (timerRef.current) {
                    clearInterval(timerRef.current);
                }
            };
        }
    }, [autoPlay, autoPlayInterval, currentIndex, isDragging]);

    const handleDragStart = () => {
        setIsDragging(true);
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
    };

    const handleDragEnd = (_: any, { offset, velocity }: PanInfo) => {
        setIsDragging(false);
        const swipe = swipePower(offset.x, velocity.x);

        if (swipe < -swipeConfidenceThreshold) {
            paginate(1);
        } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1);
        }
    };

    return (
        <div className="relative w-full overflow-hidden">
            {/* Carousel Container */}
            <div className="relative w-full" style={{ minHeight: '300px' }}>
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 200, damping: 25 },
                            opacity: { duration: 0.3 },
                            scale: { duration: 0.3 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        className="absolute w-full top-0 left-0"
                    >
                        {children[currentIndex]}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Modern Indicators */}
            {showIndicators && children.length > 1 && (
                <div className="flex justify-center items-center gap-2 mt-8">
                    {children.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className="group relative"
                            aria-label={`Go to slide ${index + 1}`}
                        >
                            {/* Active indicator */}
                            {index === currentIndex ? (
                                <div className="flex items-center gap-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full px-3 py-1.5 shadow-md">
                                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                                    <span className="text-xs font-semibold text-white">{index + 1}</span>
                                </div>
                            ) : (
                                <div className="w-2 h-2 rounded-full bg-slate-300 hover:bg-orange-400 transition-all duration-300" />
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
