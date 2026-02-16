import { motion } from 'framer-motion';

interface SectionRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export function SectionReveal({ children, className = '', delay = 0 }: SectionRevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
                duration: 0.8,
                delay,
                ease: "easeOut"
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function MaskedReveal({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
    return (
        <div className="overflow-hidden">
            <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
            >
                {children}
            </motion.div>
        </div>
    );
}
