const AboutSection = () => {
    return (
        <section id="about" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-ubuntu font-bold text-alamia-dark mb-8">
                            About <span className="gradient-text">AlamiaSoft</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            At AlamiaSoft, we believe in paving the way for seamless growth. As a dedicated
                            partner, we provide clear and strategic paths to elevate your potential. Our
                            focus is on fostering innovation and delivering tailored solutions that align
                            with your goals.
                        </p>
                        <p className="text-slate-600 mb-10 leading-relaxed">
                            With our expert guidance, you can navigate challenges and unlock new opportunities
                            with confidence. We are committed to being the catalyst for your success, ensuring
                            your journey to growth is as efficient and rewarding as possible.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-8 mb-10">
                            <div className="stats-card p-6 rounded-2xl text-center">
                                <div className="text-4xl font-ubuntu font-bold gradient-text mb-2">100+</div>
                                <div className="text-slate-600 font-medium">Projects Completed</div>
                                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3 rounded-full"></div>
                            </div>
                            <div className="stats-card p-6 rounded-2xl text-center">
                                <div className="text-4xl font-ubuntu font-bold gradient-text mb-2">50+</div>
                                <div className="text-slate-600 font-medium">Happy Clients</div>
                                <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-3 rounded-full"></div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button className="btn-primary text-white px-8 py-4 rounded-full font-semibold group">
                            <i className="fas fa-users mr-3 group-hover:mr-4 transition-all"></i>
                            Meet Our Team
                        </button>
                    </div>

                    <div className="glass-card p-10 rounded-3xl relative">
                        <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10"></div>

                        <div className="mb-8">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                                    <i className="fas fa-bullseye text-white text-lg"></i>
                                </div>
                                <h3 className="text-2xl font-ubuntu font-semibold text-alamia-dark">Our Mission</h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                To democratize technology by creating accessible, innovative software solutions that enable businesses of all sizes to compete and succeed in the digital marketplace.
                            </p>
                        </div>

                        <div className="section-divider"></div>

                        <div>
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                                    <i className="fas fa-eye text-white text-lg"></i>
                                </div>
                                <h3 className="text-2xl font-ubuntu font-semibold text-alamia-dark">Our Vision</h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                To be the trusted technology partner that transforms ideas into powerful digital solutions, fostering innovation and driving progress across industries.
                            </p>
                        </div>

                        {/* Values */}
                        <div className="mt-8 grid grid-cols-3 gap-4">
                            <div className="text-center p-4 bg-blue-50 rounded-xl">
                                <i className="fas fa-lightbulb text-blue-500 text-xl mb-2"></i>
                                <div className="text-sm font-medium text-blue-700">Innovation</div>
                            </div>
                            <div className="text-center p-4 bg-purple-50 rounded-xl">
                                <i className="fas fa-handshake text-purple-500 text-xl mb-2"></i>
                                <div className="text-sm font-medium text-purple-700">Partnership</div>
                            </div>
                            <div className="text-center p-4 bg-green-50 rounded-xl">
                                <i className="fas fa-award text-green-500 text-xl mb-2"></i>
                                <div className="text-sm font-medium text-green-700">Excellence</div>
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

export default AboutSection;
