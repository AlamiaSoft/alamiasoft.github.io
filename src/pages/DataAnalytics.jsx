const DataAnalytics = () => {
    return (
        <>
            <section className="service-hero min-h-screen flex items-center justify-center text-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="animate-fade-in">
                        <div className="feature-icon w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                            <i className="fas fa-chart-line text-3xl text-alamia-accent"></i>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-ubuntu font-bold mb-8 leading-tight">
                            Data <span className="gradient-text">Analytics</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                            Advanced analytics and business intelligence solutions to transform your data into actionable insights and strategic decisions.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-ubuntu font-bold text-alamia-dark mb-6">
                            Analytics Services
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="glass-card p-8 rounded-2xl">
                            <div className="feature-icon w-16 h-16 mb-6 flex items-center justify-center rounded-2xl">
                                <i className="fas fa-database text-2xl text-alamia-accent"></i>
                            </div>
                            <h3 className="text-2xl font-ubuntu font-semibold mb-4">Data Warehousing</h3>
                            <p className="text-slate-600">Build centralized data repositories for comprehensive business intelligence.</p>
                        </div>
                        <div className="glass-card p-8 rounded-2xl">
                            <div className="feature-icon w-16 h-16 mb-6 flex items-center justify-center rounded-2xl">
                                <i className="fas fa-chart-bar text-2xl text-alamia-accent"></i>
                            </div>
                            <h3 className="text-2xl font-ubuntu font-semibold mb-4">BI Dashboards</h3>
                            <p className="text-slate-600">Interactive dashboards with real-time insights using Tableau and Power BI.</p>
                        </div>
                        <div className="glass-card p-8 rounded-2xl">
                            <div className="feature-icon w-16 h-16 mb-6 flex items-center justify-center rounded-2xl">
                                <i className="fas fa-brain text-2xl text-alamia-accent"></i>
                            </div>
                            <h3 className="text-2xl font-ubuntu font-semibold mb-4">Machine Learning</h3>
                            <p className="text-slate-600">Predictive analytics and ML models to forecast trends and optimize operations.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-alamia-dark text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-ubuntu font-bold mb-8">
                        Unlock the Power of Your Data
                    </h2>
                    <a href="/#contact" className="btn-primary text-white px-8 py-4 rounded-full text-lg font-medium inline-block">
                        Get Started
                    </a>
                </div>
            </section>
        </>
    );
};

export default DataAnalytics;
