import { Link } from 'react-router-dom';
import { MessageSquare, Heart, Shield, Settings, CheckCircle, ArrowRight } from 'lucide-react';

export default function SupportService() {
    const benefits = [
        'Peace of mind for your online presence',
        'Timely updates and security patches',
        'Expert advice whenever you need it',
        'Performance optimization and monitoring',
        'Reliable partnership for long-term growth',
    ];

    const services = [
        {
            title: 'Content Creation',
            description: 'Regular blog posts, copy updates, and multimedia content.',
            icon: <MessageSquare className="w-8 h-8" />,
        },
        {
            title: 'Technical Support',
            description: 'Troubleshooting and resolved technical issues fast.',
            icon: <Settings className="w-8 h-8" />,
        },
        {
            title: 'Ongoing Maintenance',
            description: 'Keeping your platforms secure, fast, and up-to-date.',
            icon: <Shield className="w-8 h-8" />,
        },
    ];

    return (
        <div className="min-h-screen">
            <section className="relative bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                                <Heart className="w-4 h-4" />
                                <span>Content & Online Support</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                                Reliable Support
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed tracking-wide mb-8">
                                We're here to help you maintain, optimize, and grow your digital presence every day.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center px-10 py-5 text-lg bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20"
                                >
                                    Contact Support
                                    <ArrowRight className="ml-2 w-6 h-6" />
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-indigo-500 rounded-2xl transform rotate-3 opacity-10"></div>
                            <img
                                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Support Services"
                                className="relative rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Support & Maintenance</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Because digital success requires continuous care.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow border-2 border-gray-100 flex flex-col items-center text-center"
                            >
                                <div className="inline-flex p-3 rounded-lg bg-indigo-600 text-white mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-12 shadow-inner border border-gray-100">
                        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Commitment</h3>
                        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <CheckCircle className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1" />
                                    <span className="text-lg text-gray-700">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Need immediate help?</h2>
                    <p className="text-xl mb-10 opacity-90">
                        Reach out to our specialists today and we'll get it sorted.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center px-10 py-5 text-lg bg-white text-indigo-900 font-bold rounded-xl hover:bg-indigo-50 transition-all transform hover:scale-105 shadow-xl"
                    >
                        Get Support Now
                        <ArrowRight className="ml-2 w-6 h-6" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
