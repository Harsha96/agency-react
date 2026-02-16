import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';

interface Lazy3DProps {
    importFn: () => Promise<{ default: React.ComponentType<any> }>;
    fallback?: React.ReactNode;
    [key: string]: any;
}

const DefaultPlaceholder = () => (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-900/10 backdrop-blur-sm animate-pulse rounded-3xl">
        <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
    </div>
);

/**
 * A utility component to lazy load Three.js / Heavy 3D components
 * with a smooth fade-in transition and a lightweight placeholder.
 */
export const Lazy3D = ({ importFn, fallback, ...props }: Lazy3DProps) => {
    const LazyComponent = lazy(importFn);

    return (
        <Suspense fallback={fallback || <DefaultPlaceholder />}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-full h-full"
            >
                <LazyComponent {...props} />
            </motion.div>
        </Suspense>
    );
};

export default Lazy3D;
