export default function GlobalBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none bg-slate-50 overflow-hidden">
            {/* Ultra-subtle light overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/50 via-white to-indigo-50/30" />

            {/* Very faint decorative shapes without heavy blur */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-100/20 rounded-full translate-x-1/2 -translate-y-1/2 blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-100/20 rounded-full -translate-x-1/2 translate-y-1/2 blur-[80px]" />
        </div>
    );
}
