const Hero = () => {
    return (
        <section id="home" className="pt-32 pb-32 relative overflow-hidden hero-gradient">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    <div className="animate-fade-in">
                        <h1 className="text-5xl md:text-7xl font-ubuntu font-bold text-white mb-8 leading-tight">
                            Innovative
                            <span className="block gradient-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                Software Solutions
                            </span>
                        </h1>
                    </div>
                    <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                            Empowering businesses with cutting-edge technology solutions that drive
                            <span className="text-blue-300 font-semibold"> growth</span>,
                            <span className="text-purple-300 font-semibold"> efficiency</span>, and
                            <span className="text-cyan-300 font-semibold"> digital transformation</span>.
                        </p>
                    </div>
                    <div className="animate-slide-up flex flex-col sm:flex-row gap-6 justify-center items-center" style={{ animationDelay: '0.4s' }}>
                        <button className="btn-primary text-white px-10 py-4 rounded-full font-semibold text-lg group">
                            <i className="fas fa-play mr-3 group-hover:mr-4 transition-all"></i>
                            Explore Solutions
                        </button>
                        <button className="btn-secondary text-white px-10 py-4 rounded-full font-semibold text-lg group">
                            <i className="fas fa-calendar-alt mr-3 group-hover:mr-4 transition-all"></i>
                            Schedule Demo
                        </button>
                    </div>
                    <div className="mt-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                        <div className="flex justify-center items-center space-x-8 text-slate-400">
                            <div className="flex items-center space-x-2">
                                <i className="fas fa-check-circle text-green-400"></i>
                                <span className="text-sm">Trusted by 50+ companies</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <i className="fas fa-star text-yellow-400"></i>
                                <span className="text-sm">4.9/5 client satisfaction</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <i className="fas fa-shield-alt text-blue-400"></i>
                                <span className="text-sm">Enterprise security</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 floating-element"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 floating-element" style={{ animationDelay: '-2s' }}></div>
            <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 floating-element" style={{ animationDelay: '-4s' }}></div>
            <div className="absolute bottom-40 right-10 w-24 h-24 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full opacity-20 floating-element" style={{ animationDelay: '-1s' }}></div>
        </section>
    );
};

export default Hero;
