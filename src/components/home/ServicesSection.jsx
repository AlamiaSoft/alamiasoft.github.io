import { Link } from 'react-router-dom';

const ServicesSection = () => {
    return (
        <section id="services" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-ubuntu font-bold text-alamia-dark mb-6">
                        Our <span className="gradient-text">Services</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Comprehensive software solutions tailored to meet your business needs and accelerate digital transformation with cutting-edge technology.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                    {/* Custom Development */}
                    <div className="glass-card p-8 rounded-2xl group">
                        <div className="feature-icon w-16 h-16 mb-8 flex items-center justify-center rounded-2xl">
                            <i className="fas fa-code text-2xl text-alamia-accent transition-colors"></i>
                        </div>
                        <h3 className="text-2xl font-ubuntu font-semibold mb-6 text-alamia-dark">Custom Development</h3>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            Bespoke software solutions designed and developed to meet your specific business requirements and workflows with modern technologies.
                        </p>
                        <div className="flex items-center justify-between">
                            <Link to="/services/custom-development" className="text-alamia-accent font-semibold hover:text-alamia-purple transition-colors group-hover:translate-x-2 transform duration-300">
                                Learn More
                            </Link>
                            <i className="fas fa-arrow-right text-alamia-accent group-hover:translate-x-2 transform transition-transform duration-300"></i>
                        </div>
                        <div className="mt-6 flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">React</span>
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Node.js</span>
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">Python</span>
                        </div>
                    </div>

                    {/* Cloud Solutions */}
                    <div className="glass-card p-8 rounded-2xl group">
                        <div className="feature-icon w-16 h-16 mb-8 flex items-center justify-center rounded-2xl">
                            <i className="fas fa-cloud text-2xl text-alamia-accent transition-colors"></i>
                        </div>
                        <h3 className="text-2xl font-ubuntu font-semibold mb-6 text-alamia-dark">Cloud Solutions</h3>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            Scalable cloud infrastructure and services that ensure reliability, security, and optimal performance for your applications.
                        </p>
                        <div className="flex items-center justify-between">
                            <Link to="/services/cloud-solutions" className="text-alamia-accent font-semibold hover:text-alamia-purple transition-colors group-hover:translate-x-2 transform duration-300">
                                Learn More
                            </Link>
                            <i className="fas fa-arrow-right text-alamia-accent group-hover:translate-x-2 transform transition-transform duration-300"></i>
                        </div>
                        <div className="mt-6 flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">AWS</span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">Azure</span>
                            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">Docker</span>
                        </div>
                    </div>

                    {/* Data Analytics */}
                    <div className="glass-card p-8 rounded-2xl group">
                        <div className="feature-icon w-16 h-16 mb-8 flex items-center justify-center rounded-2xl">
                            <i className="fas fa-chart-line text-2xl text-alamia-accent transition-colors"></i>
                        </div>
                        <h3 className="text-2xl font-ubuntu font-semibold mb-6 text-alamia-dark">Data Analytics</h3>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            Advanced analytics and business intelligence solutions to transform your data into actionable insights and strategic decisions.
                        </p>
                        <div className="flex items-center justify-between">
                            <Link to="/services/data-analytics" className="text-alamia-accent font-semibold hover:text-alamia-purple transition-colors group-hover:translate-x-2 transform duration-300">
                                Learn More
                            </Link>
                            <i className="fas fa-arrow-right text-alamia-accent group-hover:translate-x-2 transform transition-transform duration-300"></i>
                        </div>
                        <div className="mt-6 flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">Tableau</span>
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">Power BI</span>
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">ML</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
