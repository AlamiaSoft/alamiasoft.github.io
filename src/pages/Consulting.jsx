const Consulting = () => {
    return (
        <>
            <section className="service-hero min-h-screen flex items-center justify-center text-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="animate-fade-in">
                        <div className="feature-icon w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                            <i className="fas fa-handshake text-3xl text-alamia-accent"></i>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-ubuntu font-bold mb-8 leading-tight">
                            IT <span className="gradient-text">Consulting</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                            Expert guidance and strategic planning to help you navigate technology challenges and achieve your business objectives.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-ubuntu font-bold text-alamia-dark mb-6">
                            Consulting Services
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="glass-card p-8 rounded-2xl">
                            <div className="feature-icon w-16 h-16 mb-6 flex items-center justify-center rounded-2xl">
                                <i className="fas fa-route text-2xl text-alamia-accent"></i>
                            </div>
                            <h3 className="text-2xl font-ubuntu font-semibold mb-4">Digital Strategy</h3>
                            <p className="text-slate-600">Comprehensive digital transformation roadmaps aligned with your business goals.</p>
                        </div>
                        <div className="glass-card p-8 rounded-2xl">
                            <div className="feature-icon w-16 h-16 mb-6 flex items-center justify-center rounded-2xl">
                                <i className="fas fa-cogs text-2xl text-alamia-accent"></i>
                            </div>
                            <h3 className="text-2xl font-ubuntu font-semibold mb-4">Technology Assessment</h3>
                            <p className="text-slate-600">Evaluate your current tech stack and identify optimization opportunities.</p>
                        </div>
                        <div className="glass-card p-8 rounded-2xl">
                            <div className="feature-icon w-16 h-16 mb-6 flex items-center justify-center rounded-2xl">
                                <i className="fas fa-users text-2xl text-alamia-accent"></i>
                            </div>
                            <h3 className="text-2xl font-ubuntu font-semibold mb-4">Team Augmentation</h3>
                            <p className="text-slate-600">Expert developers and consultants to supplement your existing team.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-alamia-dark text-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-ubuntu font-bold mb-8">
                        Let's Build Your Technology Strategy
                    </h2>
                    <a href="/#contact" className="btn-primary text-white px-8 py-4 rounded-full text-lg font-medium inline-block">
                        Schedule Consultation
                    </a>
                </div>
            </section>
        </>
    );
};

export default Consulting;
