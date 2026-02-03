import { Check } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { Link } from 'react-router-dom';

export const Pricing = () => {
    const plans = [
        {
            name: "Starter",
            price: "$1,499",
            description: "Perfect for small businesses needing a professional presence.",
            features: [
                "Custom 5-Page Website",
                "Mobile Responsive Design",
                "Basic SEO Optimization",
                "Contact Form Integration",
                "1 Month Support"
            ],
            cta: "Get Started",
            highlighted: false
        },
        {
            name: "Professional",
            price: "$2,999",
            description: "Complete solution with AI integration for growing brands.",
            features: [
                "10-Page Premium Website",
                "AI Chatbot Integration",
                "Advanced SEO Package",
                "CMS for Blog/Content",
                "Analytics Dashboard",
                "3 Months Support"
            ],
            cta: "Most Popular",
            highlighted: true
        },
        {
            name: "Enterprise",
            price: "Custom",
            description: "Tailored digital transformation for large organizations.",
            features: [
                "Full-Scale Web Application",
                "Custom AI Models & Agents",
                "Database Design & API",
                "Priority 24/7 Support",
                "Dedicated Project Manager",
                "SLA Guarantee"
            ],
            cta: "Contact Sales",
            highlighted: false
        }
    ];

    return (
        <section className="py-24 bg-slate-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Simple, Transparent Pricing</h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Choose the package that fits your business needs. No hidden fees.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-start">
                    {plans.map((plan, index) => (
                        <ScrollReveal key={index} delay={index * 100} width="100%">
                            <div
                                className={`
                  relative rounded-2xl p-8 transition-all duration-300
                  ${plan.highlighted
                                        ? 'bg-white shadow-2xl ring-2 ring-violet-500 scale-105 z-10'
                                        : 'bg-white/50 backdrop-blur-sm border border-slate-200 hover:shadow-xl hover:bg-white'
                                    }
                `}
                            >
                                {plan.highlighted && (
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                        RECOMMENDED
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                                <div className="flex items-baseline mb-6">
                                    <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                                    {plan.price !== "Custom" && <span className="text-slate-500 ml-2">/project</span>}
                                </div>
                                <p className="text-slate-600 mb-8 h-12">{plan.description}</p>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <Check className="w-5 h-5 text-violet-500 mr-3 flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    to="/contact"
                                    className={`
                    block w-full py-4 rounded-xl text-center font-bold transition-all
                    ${plan.highlighted
                                            ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-violet-500/30'
                                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                        }
                  `}
                                >
                                    {plan.cta}
                                </Link>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
