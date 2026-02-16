
interface SectionDividerProps {
    type?: 'slant' | 'curve' | 'wave';
    color?: string;
    className?: string;
    reverse?: boolean;
}

export const SectionDivider = ({
    type = 'slant',
    color = 'fill-slate-50',
    className = '',
    reverse = false
}: SectionDividerProps) => {
    return (
        <div className={`relative w-full overflow-hidden leading-[0] z-10 ${className} ${reverse ? 'rotate-180' : ''}`}>
            {type === 'slant' && (
                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className={`relative block w-full h-[60px] md:h-[100px] ${color}`}
                >
                    <path d="M1200 120L0 120 0 0z" />
                </svg>
            )}
            {type === 'curve' && (
                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className={`relative block w-full h-[60px] md:h-[100px] ${color}`}
                >
                    <path d="M600 112.77C268.63 112.77 0 65.52 0 7.23V120H1200V7.23C1200 65.52 931.37 112.77 600 112.77Z" />
                </svg>
            )}
            {type === 'wave' && (
                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className={`relative block w-full h-[60px] md:h-[100px] ${color}`}
                >
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
                </svg>
            )}
        </div>
    );
};
