import { Link } from 'react-router-dom';
import { Palette, Zap, Layout, CheckCircle, ArrowRight } from 'lucide-react';

export default function DesignService() {
    const benefits = [
        'Unique brand identity development',
        'Professional marketing materials',
        'Eye-catching social media presence',
        'Consistent visual language',
        'Increased brand recognition',
    ];

    const services = [
        {
            title: 'Logo & Identity',
            description: 'Custom logos and full brand style guides.',
            icon: <Palette className="w-8 h-8" />,
        },
        {
            title: 'Marketing Design',
            description: 'Brochures, flyers, and digital marketing assets.',
            icon: <Layout className="w-8 h-8" />,
        },
        {
            title: 'Social Graphics',
            description: 'Engaging content for all social platforms.',
            icon: <Zap className="w-8 h-8" />,
        },
    ];

    return (
        <div className="min-h-screen">
            <section className="relative bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                                <Palette className="w-4 h-4" />
                                <span>Graphic Design & Branding</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                                Creative Design
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed tracking-wide mb-8">
                                Visuals that tell your story and make your brand unforgettable.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center px-10 py-5 text-lg bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
                                >
                                    Start Your Project
                                    <ArrowRight className="ml-2 w-6 h-6" />
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-500 rounded-2xl transform rotate-3 opacity-10"></div>
                            <img
                                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Design Services"
                                className="relative rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Creative Solutions</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Merging artistic vision with technical precision.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow border-2 border-gray-100 flex flex-col items-center text-center"
                            >
                                <div className="inline-flex p-3 rounded-lg bg-blue-600 text-white mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-12 shadow-inner border border-gray-100">
                        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Visuals Matter</h3>
                        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                                    <span className="text-lg text-gray-700">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's create something impactful.</h2>
                    <p className="text-xl mb-10 opacity-90 italic">
                        "Your brand is what people say about you when you're not in the room."
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center px-10 py-5 text-lg bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all transform hover:scale-105 shadow-xl shadow-blue-500/20"
                    >
                        Start Your Journey
                        <ArrowRight className="ml-2 w-6 h-6" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
