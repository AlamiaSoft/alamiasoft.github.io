const CustomDevelopment = () => {
    return (
        <>
            {/* Service Hero Section */}
            <section className="service-hero min-h-screen flex items-center justify-center text-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="animate-fade-in">
                        <div className="feature-icon w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                            <i className="fas fa-code text-3xl text-alamia-accent"></i>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-ubuntu font-bold mb-8 leading-tight">
                            Custom <span className="gradient-text">Development</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                            Tailored software solutions designed specifically for your business needs. From concept to deployment, we build applications that drive growth and efficiency.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a href="#process" className="btn-primary text-white px-8 py-4 rounded-full text-lg font-medium">
                                Our Process
                            </a>
                            <a href="#technologies" className="btn-secondary text-white px-8 py-4 rounded-full text-lg font-medium">
                                Technologies
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Overview */}
            <section className="py-20 bg-gradient-to-b from-alamia-gray to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="animate-fade-in">
                            <h2 className="text-4xl md:text-5xl font-ubuntu font-bold text-alamia-dark mb-8">
                                Why Choose Custom Development?
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="feature-icon w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <i className="fas fa-bullseye text-alamia-accent"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-ubuntu font-semibold mb-2">Perfect Fit</h3>
                                        <p className="text-alamia-dark-gray">Solutions designed specifically for your unique business requirements and workflows.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="feature-icon w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <i className="fas fa-expand-arrows-alt text-alamia-accent"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-ubuntu font-semibold mb-2">Scalability</h3>
                                        <p className="text-alamia-dark-gray">Built to grow with your business, handling increased load and new features seamlessly.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="feature-icon w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <i className="fas fa-shield-alt text-alamia-accent"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-ubuntu font-semibold mb-2">Full Control</h3>
                                        <p className="text-alamia-dark-gray">Complete ownership of your software with no vendor lock-in or licensing restrictions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="glass-card p-8 rounded-3xl">
                            <div className="stats-card p-6 rounded-2xl mb-6">
                                <div className="text-center">
                                    <div className="text-4xl font-ubuntu font-bold text-alamia-accent mb-2">500+</div>
                                    <div className="text-alamia-dark-gray">Custom Applications Built</div>
                                </div>
                            </div>
                            <div className="stats-card p-6 rounded-2xl mb-6">
                                <div className="text-center">
                                    <div className="text-4xl font-ubuntu font-bold text-alamia-green mb-2">98%</div>
                                    <div className="text-alamia-dark-gray">Client Satisfaction Rate</div>
                                </div>
                            </div>
                            <div className="stats-card p-6 rounded-2xl">
                                <div className="text-center">
                                    <div className="text-4xl font-ubuntu font-bold text-alamia-blue mb-2">24/7</div>
                                    <div className="text-alamia-dark-gray">Support & Maintenance</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Development Process */}
            <section id="process" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-ubuntu font-bold text-alamia-dark mb-6">
                            Our Development Process
                        </h2>
                        <p className="text-xl text-alamia-dark-gray max-w-3xl mx-auto">
                            A proven methodology that ensures your project is delivered on time, within budget, and exceeds expectations.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="process-step p-8 rounded-3xl text-center">
                            <div className="feature-icon w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-lightbulb text-2xl text-alamia-accent"></i>
                            </div>
                            <h3 className="text-xl font-ubuntu font-semibold mb-4">Discovery</h3>
                            <p className="text-alamia-dark-gray">Understanding your business needs, goals, and technical requirements through detailed consultation.</p>
                        </div>
                        <div className="process-step p-8 rounded-3xl text-center">
                            <div className="feature-icon w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-drafting-compass text-2xl text-alamia-accent"></i>
                            </div>
                            <h3 className="text-xl font-ubuntu font-semibold mb-4">Design</h3>
                            <p className="text-alamia-dark-gray">Creating detailed wireframes, prototypes, and technical architecture for your solution.</p>
                        </div>
                        <div className="process-step p-8 rounded-3xl text-center">
                            <div className="feature-icon w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-code text-2xl text-alamia-accent"></i>
                            </div>
                            <h3 className="text-xl font-ubuntu font-semibold mb-4">Development</h3>
                            <p className="text-alamia-dark-gray">Agile development with regular updates, testing, and feedback integration throughout the process.</p>
                        </div>
                        <div className="process-step p-8 rounded-3xl text-center">
                            <div className="feature-icon w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-rocket text-2xl text-alamia-accent"></i>
                            </div>
                            <h3 className="text-xl font-ubuntu font-semibold mb-4">Deployment</h3>
                            <p className="text-alamia-dark-gray">Seamless launch with comprehensive testing, training, and ongoing support for your team.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section id="technologies" className="py-20 bg-gradient-to-b from-alamia-gray to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-ubuntu font-bold text-alamia-dark mb-6">
                            Technologies We Use
                        </h2>
                        <p className="text-xl text-alamia-dark-gray max-w-3xl mx-auto">
                            We leverage cutting-edge technologies to build robust, scalable, and future-proof applications.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="glass-card p-8 rounded-3xl">
                            <h3 className="text-2xl font-ubuntu font-semibold mb-6 text-alamia-dark">Frontend</h3>
                            <div className="flex flex-wrap gap-3">
                                <span className="tech-tag px-4 py-2 rounded-full text-sm font-medium">React</span>
                                <span className="tech-tag px-4 py-2 rounded-full text-sm font-medium">Vue.js</span>
                                <span className="tech-tag px-4 py-2 rounded-full text-sm font-medium">Angular</span>
                                <span className="tech-tag px-4 py-2 rounded-full text-sm font-medium">TypeScript</span>
                                <span className="tech-tag px-4 py-2 rounded-full text-sm font-medium">Next.js</span>
                                <span className="tech-tag px-4 py-2 rounded-full text-sm font-medium">Tailwind CSS</span>
                            </div>
                        </div>
                        <div className="glass-card p-8 rounded-3xl">
                            <h3 className="text-2xl font-ubuntu font-semibold mb-6 text-alamia-dark">Backend</h3>
                            <div className="flex flex-wrap gap-3">
                                <span className="tech-tag px-4 py-2 rounded-full text-sm font-medium">Node.js</span>
                                <span className="tech-tag px-4 py-2 rounded-full text-sm font-medium">Python</span>
                                <span className="tech-tag px-4 py-2 rounded-full text-sm font-medium">Java</span>
                                <span className="tech-tag px-4 py-2 rounded-full text-sm font-medium">C#</span>
                                <span className="tech-tag px-4 py-2 rounded-full text-sm font-medium">PHP</span>
                                <span className="tech-tag px-4 py-2 rounded-full text-sm font-medium">Go</span>
                            </div>
                        </div>
                        <div className="glass-card p-8 rounded-3xl">
                            <h3 className="text-2xl font-ubuntu font-semibold mb-6 text-alamia-dark">Database</h3>
                            <div className="flex flex-wrap gap-3">
                                <span className="tech-tag px-4 py-2 rounded-full text-sm font-medium">PostgreSQL</span>
                                <span className="tech-tag px-4 py-2 rounded-full text-sm font-medium">MongoDB</span>
                                <span className="tech-tag px-4 py-2 rounded-full text-sm font-medium">MySQL</span>
                                <span className="tech-tag px-4 py-2 rounded-full text-sm font-medium">Redis</span>
                                <span className="tech-tag px-4 py-2 rounded-full text-sm font-medium">Elasticsearch</span>
                                <span className="tech-tag px-4 py-2 rounded-full text-sm font-medium">Firebase</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-alamia-dark text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-ubuntu font-bold mb-8">
                        Ready to Build Your Custom Solution?
                    </h2>
                    <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
                        Let's discuss your project requirements and create a solution that perfectly fits your business needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a href="/#contact" className="btn-primary text-white px-8 py-4 rounded-full text-lg font-medium">
                            Start Your Project
                        </a>
                        <a href="/#contact" className="btn-secondary text-white px-8 py-4 rounded-full text-lg font-medium">
                            Schedule Consultation
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CustomDevelopment;
