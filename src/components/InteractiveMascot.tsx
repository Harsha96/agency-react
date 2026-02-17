import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Mascot3D from './Mascot3D';

export const InteractiveMascot = () => {
    const [hoverMessage, setHoverMessage] = useState<string | null>(null);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    // Toggle button visibility based on scroll
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // We check for contact page for the specific happy animation
    const isContactPage = location.pathname === '/contact';

    // Helper to get message based on current page
    const getPageContextMessage = (path: string) => {
        if (path === '/contact') return "Yay! Let's talk! 🎉";
        if (path.includes('/services')) return "Ready to scale? 📈";
        if (path.includes('/portfolio')) return "Build yours next? ✨";
        if (path.includes('/about')) return "We'd love to help! 💙";
        if (path.includes('/blog')) return "Got questions? 💭";
        if (path === '/login') return "Welcome back! 🔐";
        return "Let's get started! 🚀"; // Home & Default
    };

    const defaultPageMessage = getPageContextMessage(location.pathname);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;

            const target = e.target as HTMLElement;
            const interactive = target.closest('button, a, [role="button"]') as HTMLElement;
            const isHoveringSelf = containerRef.current.contains(target);

            let msg: string | null = null;

            if (isHoveringSelf) {
                // Check if hovering the scroll button specifically
                if (interactive && interactive.getAttribute('aria-label') === 'Scroll to top') {
                    msg = "Go to top! ☝️";
                } else {
                    // Hovering the cat itself: Show page-specific context message
                    msg = getPageContextMessage(location.pathname);
                }
            } else if (interactive) {
                // Hovering other interactive elements - Context Awareness
                const text = (interactive.textContent || '').toLowerCase();
                const href = (interactive as HTMLAnchorElement).href?.toLowerCase() ||
                    (interactive.getAttribute('href') || '').toLowerCase();

                // Priority 1: High Impact Actions
                if (text.includes('contact') || href.includes('contact') || text.includes('touch')) msg = "Let's connect! 🤝";
                else if (text.includes('delete') || text.includes('remove') || text.includes('cancel')) msg = "Careful! 🙀";
                else if (text.includes('submit') || text.includes('send') || text.includes('confirm')) msg = "Make it happen! 📨";

                // Priority 2: Sections
                else if (text.includes('about') || href.includes('about') || text.includes('team')) msg = "Meet the experts! 👨‍💻";
                else if (text.includes('service') || href.includes('service')) msg = "Scale your biz! 🚀";
                else if (text.includes('portfolio') || href.includes('portfolio') || text.includes('work') || text.includes('case')) msg = "See results! 🏆";
                else if (text.includes('blog') || href.includes('blog') || text.includes('news')) msg = "Expert insights! 💡";
                else if (text.includes('login') || href.includes('login') || text.includes('sign')) msg = "Client Portal 🔐";

                // Priority 3: Specific Services
                else if (text.includes('seo') || href.includes('seo')) msg = "Rank #1 Google! 🥇";
                else if (text.includes('ai') || href.includes('ai') || text.includes('bot')) msg = "Automate it! 🤖";
                else if (text.includes('web') || href.includes('web') || text.includes('design')) msg = "Pixel perfect! 🎨";
                else if (text.includes('data') || href.includes('data') || text.includes('analy')) msg = "Data secrets! 📊";
                else if (text.includes('dev') || href.includes('dev') || text.includes('soft')) msg = "Code wizards! 🧙‍♂️";
                else if (text.includes('cat') || text.includes('kitty')) msg = "That's me! 😺";

                // Priority 4: Generic Calls to Action
                else if (text.includes('read') || text.includes('learn') || text.includes('view') || text.includes('more')) msg = "Deep dive! 🌊";
                else if (text.includes('start') || text.includes('get') || text.includes('try')) msg = "Do it now! 🔥";
                else if (text.includes('back') || text.includes('return')) msg = "Go back! 🔙";

                // Priority 5: Socials
                else if (href.includes('twitter') || href.includes('linkedin') || href.includes('github') || href.includes('instagram') || href.includes('facebook')) msg = "Follow us! 🌐";
                else if (href.includes('mailto')) msg = "Email us! 📧";
                else if (href.includes('tel')) msg = "Call us! ☎️";

                // Fallback
                else msg = "Click to explore! ✨";
            }

            setHoverMessage(msg);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [location.pathname]);

    // Message to display
    const displayMessage = hoverMessage || defaultPageMessage;

    return (
        <div
            ref={containerRef}
            className={`fixed bottom-6 right-6 w-24 h-24 md:w-32 md:h-32 z-50 pointer-events-auto transition-transform duration-300 ${isContactPage ? 'animate-bounce' : 'animate-float'}`}
        >
            <Link to="/contact" className="block w-full h-full relative group">
                {/* 3D Robot Cat */}
                <Mascot3D hoverMessage={hoverMessage} />

                {/* Go To Top Button - Fixed Corner Position - Only visible after scroll */}
                <div
                    className={`absolute -bottom-2 -right-2 transition-all duration-500 transform ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
                >
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full shadow-lg shadow-orange-500/30 flex items-center justify-center z-50 hover:scale-110 transition-transform duration-300"
                        aria-label="Scroll to top"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m18 15-6-6-6 6" />
                        </svg>
                    </button>
                </div>

                {/* Speech Bubble Tooltip - Visible on Hover Message or Self Hover */}
                <div className={`absolute -top-24 right-0 bg-white border-2 border-slate-900 rounded-xl p-3 shadow-xl transition-opacity duration-300 whitespace-nowrap z-50 ${hoverMessage ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-sm font-bold text-slate-900">
                        {displayMessage}
                    </p>
                    <div className="absolute bottom-[-8px] right-8 w-4 h-4 bg-white border-b-2 border-r-2 border-slate-900 transform rotate-45"></div>
                </div>
            </Link>
        </div>
    );
};
