import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    width?: 'fit-content' | '100%';
    delay?: number;
}

export const ScrollReveal = ({ children, width = 'fit-content', delay = 0 }: ScrollRevealProps) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Add a small timeout for the delay
                        setTimeout(() => {
                            if (ref.current) {
                                ref.current.classList.add('reveal-visible');
                                ref.current.classList.remove('reveal-hidden');
                            }
                        }, delay);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [delay]);

    return (
        <div
            ref={ref}
            className={`reveal-hidden transition-all duration-1000 ease-out transform ${width === '100%' ? 'w-full' : ''}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};
