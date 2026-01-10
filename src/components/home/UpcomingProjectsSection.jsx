const UpcomingProjectsSection = () => {
    const projects = [
        {
            name: "Fleet Manager",
            client: "Transportation Solutions",
            description: "Advanced fleet management and logistics tracking system for optimizing vehicle operations and route planning.",
            icon: "fa-truck",
            gradient: "from-orange-500 to-red-600",
            bgGradient: "from-orange-50 to-red-50"
        },
        {
            name: "Clinic/Hospital Management",
            client: "Healthcare Solution",
            description: "Comprehensive healthcare management system for patient records, appointments, billing, and medical workflows.",
            icon: "fa-hospital",
            gradient: "from-cyan-500 to-blue-600",
            bgGradient: "from-cyan-50 to-blue-50"
        },
        {
            name: "Alamia OS",
            client: "Unified Platform",
            description: "All-in-one business operating system integrating CRM, HR, Project Management, and more into a single powerful platform.",
            icon: "fa-layer-group",
            gradient: "from-violet-500 to-purple-600",
            bgGradient: "from-violet-50 to-purple-50"
        },
        {
            name: "Alamia Accounts ERP",
            client: "Financial Management",
            description: "Tally-inspired accounting and financial management system with comprehensive ledger, voucher, and reporting capabilities.",
            icon: "fa-calculator",
            gradient: "from-green-500 to-emerald-600",
            bgGradient: "from-green-50 to-emerald-50"
        }
    ];

    return (
        <section id="upcoming-projects" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-ubuntu font-bold text-alamia-dark mb-6">
                        Upcoming <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Innovative solutions currently in development to empower businesses across diverse industries.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`glass-card p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${project.bgGradient} border border-gray-100`}
                        >
                            <div className="flex items-start gap-6">
                                <div className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                                    <i className={`fas ${project.icon} text-white text-2xl`}></i>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <h3 className="text-2xl font-ubuntu font-bold text-alamia-dark mb-1">
                                                {project.name}
                                            </h3>
                                            <p className="text-sm text-slate-500 font-medium">{project.client}</p>
                                        </div>
                                        {/* <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold whitespace-nowrap">
                                            Coming Soon
                                        </span> */}
                                    </div>
                                    <p className="text-slate-600 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Info Box */}
                <div className="mt-12 text-center">
                    <div className="inline-block glass-card px-8 py-4 rounded-full">
                        <p className="text-slate-600">
                            <i className="fas fa-info-circle text-blue-500 mr-2"></i>
                            These projects are currently under active development and will be available soon.
                        </p>
                    </div>
                </div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-10 floating-element"></div>
            <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-10 floating-element" style={{ animationDelay: '-2s' }}></div>
        </section>
    );
};

export default UpcomingProjectsSection;
