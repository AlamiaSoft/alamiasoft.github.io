import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-alamia-dark via-slate-900 to-alamia-dark-gray text-white py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-cyan-900/10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-2">
                        <div className="flex items-center mb-6">
                            <img className="brand-logo" src="/assets/images/alamia-logo-light-transparent.png" alt="AlamiaSoft Logo" />
                        </div>
                        <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
                            Innovative software solutions that drive business growth and digital transformation. Your clear path to growth.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                                <i className="fab fa-linkedin-in text-sm"></i>
                            </a>
                            <a href="#" className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                                <i className="fab fa-github text-sm"></i>
                            </a>
                            <a href="#" className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                                <i className="fab fa-twitter text-sm"></i>
                            </a>
                            <a href="#" className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                                <i className="fab fa-youtube text-sm"></i>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-ubuntu font-semibold text-lg mb-6 text-white">Services</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/services/custom-development" className="text-slate-300 hover:text-white hover:translate-x-2 transform transition-all duration-300 flex items-center">
                                    <i className="fas fa-chevron-right text-xs mr-2 text-alamia-accent"></i>Custom Development
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/cloud-solutions" className="text-slate-300 hover:text-white hover:translate-x-2 transform transition-all duration-300 flex items-center">
                                    <i className="fas fa-chevron-right text-xs mr-2 text-alamia-accent"></i>Cloud Solutions
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/data-analytics" className="text-slate-300 hover:text-white hover:translate-x-2 transform transition-all duration-300 flex items-center">
                                    <i className="fas fa-chevron-right text-xs mr-2 text-alamia-accent"></i>Data Analytics
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/consulting" className="text-slate-300 hover:text-white hover:translate-x-2 transform transition-all duration-300 flex items-center">
                                    <i className="fas fa-chevron-right text-xs mr-2 text-alamia-accent"></i>Consulting
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-ubuntu font-semibold text-lg mb-6 text-white">Company</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#about" className="text-slate-300 hover:text-white hover:translate-x-2 transform transition-all duration-300 flex items-center">
                                    <i className="fas fa-chevron-right text-xs mr-2 text-alamia-accent"></i>About Us
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-slate-300 hover:text-white hover:translate-x-2 transform transition-all duration-300 flex items-center">
                                    <i className="fas fa-chevron-right text-xs mr-2 text-alamia-accent"></i>Contact
                                </a>
                            </li>
                            <li>
                                <Link to="/privacy-policy" className="text-slate-300 hover:text-white hover:translate-x-2 transform transition-all duration-300 flex items-center">
                                    <i className="fas fa-chevron-right text-xs mr-2 text-alamia-accent"></i>Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms-of-service" className="text-slate-300 hover:text-white hover:translate-x-2 transform transition-all duration-300 flex items-center">
                                    <i className="fas fa-chevron-right text-xs mr-2 text-alamia-accent"></i>Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-700/50 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-center md:text-left mb-4 md:mb-0">
                            <p className="text-slate-400 text-sm">
                                &copy; 2025 AlamiaSoft. All rights reserved. Made with <i className="fas fa-heart text-red-500 mx-1"></i> for innovation.
                            </p>
                        </div>
                        <div className="flex items-center space-x-6 text-sm text-slate-400">
                            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
                            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full floating-element"></div>
            <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full floating-element" style={{ animationDelay: '-2s' }}></div>
        </footer>
    );
};

export default Footer;
