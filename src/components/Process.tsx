import { ScrollReveal } from './ScrollReveal';
import { Ear, Lightbulb, Rocket } from 'lucide-react';

export const Process = () => {
    const steps = [
        {
            icon: <Ear className="w-8 h-8" />,
            title: "Understand",
            description: "We listen to your needs and goals.",
            color: "bg-blue-100 text-blue-600"
        },
        {
            icon: <Lightbulb className="w-8 h-8" />,
            title: "Create",
            description: "We design and develop smart digital solutions.",
            color: "bg-violet-100 text-violet-600"
        },
        {
            icon: <Rocket className="w-8 h-8" />,
            title: "Deliver",
            description: "We launch, support, and help you grow.",
            color: "bg-pink-100 text-pink-600"
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-30 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">How We Work</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connector Line */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-200 via-violet-200 to-pink-200" />

                    {steps.map((step, index) => (
                        <ScrollReveal key={index} delay={index * 200} width="100%">
                            <div className="relative flex flex-col items-center text-center">
                                <div className={`w-24 h-24 rounded-2xl ${step.color} flex items-center justify-center mb-8 relative z-10 shadow-lg transform transition-transform hover:scale-110 duration-300`}>
                                    {step.icon}
                                    <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-white rounded-full border shadow flex items-center justify-center font-bold text-sm text-slate-500">
                                        {index + 1}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                                <p className="text-slate-600 leading-relaxed max-w-xs">
                                    {step.description}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
