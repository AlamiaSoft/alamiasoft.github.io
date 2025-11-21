import { Link } from 'react-router-dom';

const ProductsSection = () => {
    return (
        <section id="products" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-ubuntu font-bold text-alamia-dark mb-6">
                        Our <span className="gradient-text">Products</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Innovative products designed to accelerate your business growth and digital transformation.
                    </p>
                </div>

                <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
                    {/* AI Agent Kit Pro */}
                    <div className="glass-card p-10 rounded-3xl group hover:shadow-2xl transition-all duration-300">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="flex-shrink-0">
                                <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-3xl font-ubuntu font-bold text-alamia-dark mb-4">AI Agent Kit Pro</h3>
                                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                    Build your AI agent team in minutes, not months. Complete starter kit with production-ready AI agents for development and marketing.
                                </p>
                                <div className="flex flex-wrap gap-3 mb-6 justify-center md:justify-start">
                                    <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Developer Edition</span>
                                    <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Marketing Edition</span>
                                    <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">$149</span>
                                </div>
                                <Link
                                    to="/products/ai-agent-kit-pro"
                                    className="inline-flex items-center btn-primary text-white px-8 py-3 rounded-full font-semibold group-hover:shadow-xl transition-all"
                                >
                                    Learn More
                                    <i className="fas fa-arrow-right ml-3 group-hover:ml-4 transition-all"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 floating-element"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 floating-element" style={{ animationDelay: '-3s' }}></div>
        </section>
    );
};

export default ProductsSection;
