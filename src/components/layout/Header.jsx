import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    // Handle smooth scroll to section
    const handleNavClick = (e, sectionId) => {
        e.preventDefault();

        // If we're not on the home page, navigate to home first
        if (location.pathname !== '/') {
            navigate('/');
            // Wait for navigation to complete, then scroll
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    const offsetTop = element.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        } else {
            // We're already on home page, just scroll
            const element = document.getElementById(sectionId);
            if (element) {
                const offsetTop = element.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }

        // Close mobile menu if open
        setMobileMenuOpen(false);
    };

    return (
        <>
            {/* Scroll Progress Indicator */}
            <div className="scroll-indicator" id="scroll-progress"></div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full nav-glass z-50 transition-all duration-300" id="navbar">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-18">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 flex items-center">
                                <Link to="/">
                                    <img className="brand-logo" src="/assets/images/alamia-logo-dark-transparent.png" alt="AlamiaSoft Logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-center space-x-8">
                                <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="nav-link text-alamia-dark-gray hover:text-alamia-accent px-4 py-2 text-sm cursor-pointer">Home</a>
                                <div className="relative group">
                                    <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="nav-link text-alamia-dark-gray hover:text-alamia-accent px-4 py-2 text-sm flex items-center cursor-pointer">
                                        Services <i className="fas fa-chevron-down ml-1 text-xs"></i>
                                    </a>
                                    <div className="absolute top-full left-0 mt-2 w-64 glass-card rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                        <div className="p-4 space-y-2">
                                            <Link to="/services/custom-development" className="block px-4 py-3 text-alamia-dark-gray hover:text-alamia-accent hover:bg-alamia-light/50 rounded-lg transition-all">
                                                <i className="fas fa-code mr-3 text-alamia-accent"></i>Custom Development
                                            </Link>
                                            <Link to="/services/cloud-solutions" className="block px-4 py-3 text-alamia-dark-gray hover:text-alamia-accent hover:bg-alamia-light/50 rounded-lg transition-all">
                                                <i className="fas fa-cloud mr-3 text-alamia-accent"></i>Cloud Solutions
                                            </Link>
                                            <Link to="/services/data-analytics" className="block px-4 py-3 text-alamia-dark-gray hover:text-alamia-accent hover:bg-alamia-light/50 rounded-lg transition-all">
                                                <i className="fas fa-chart-bar mr-3 text-alamia-accent"></i>Data Analytics
                                            </Link>
                                            <Link to="/services/consulting" className="block px-4 py-3 text-alamia-dark-gray hover:text-alamia-accent hover:bg-alamia-light/50 rounded-lg transition-all">
                                                <i className="fas fa-handshake mr-3 text-alamia-accent"></i>Consulting
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative group">
                                    <span className="nav-link text-alamia-dark-gray hover:text-alamia-accent px-4 py-2 text-sm flex items-center cursor-pointer">
                                        Products <i className="fas fa-chevron-down ml-1 text-xs"></i>
                                    </span>
                                    <div className="absolute top-full left-0 mt-2 w-64 glass-card rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                        <div className="p-4 space-y-2">
                                            <Link to="/products/ai-agent-kit-pro" className="block px-4 py-3 text-alamia-dark-gray hover:text-alamia-accent hover:bg-alamia-light/50 rounded-lg transition-all">
                                                <i className="fas fa-robot mr-3 text-alamia-accent"></i>AI Agent Kit Pro
                                            </Link>
                                            <Link to="/products/alamiaconnect-crm" className="block px-4 py-3 text-alamia-dark-gray hover:text-alamia-accent hover:bg-alamia-light/50 rounded-lg transition-all">
                                                <i className="fas fa-users mr-3 text-alamia-accent"></i>AlamiaConnect CRM
                                            </Link>
                                            <a href="https://unisage.alamiasoft.com" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-alamia-dark-gray hover:text-alamia-accent hover:bg-alamia-light/50 rounded-lg transition-all">
                                                <i className="fas fa-graduation-cap mr-3 text-alamia-accent"></i>Alamia UniSage
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="nav-link text-alamia-dark-gray hover:text-alamia-accent px-4 py-2 text-sm cursor-pointer">About</a>
                                <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="nav-link text-alamia-dark-gray hover:text-alamia-accent px-4 py-2 text-sm cursor-pointer">Contact</a>
                                <button onClick={(e) => handleNavClick(e, 'contact')} className="btn-primary text-white px-6 py-2.5 rounded-full text-sm font-medium">
                                    <i className="fas fa-rocket mr-2"></i>Get Started
                                </button>
                            </div>
                        </div>
                        <div className="md:hidden">
                            <button
                                id="mobile-menu-button"
                                className="text-alamia-dark-gray hover:text-alamia-accent p-2 rounded-lg transition-colors"
                                onClick={toggleMobileMenu}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div id="mobile-menu" className={`md:hidden nav-glass border-t border-white/20 ${mobileMenuOpen ? '' : 'hidden'}`}>
                    <div className="px-4 pt-4 pb-6 space-y-3">
                        <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="block px-4 py-3 text-alamia-dark-gray hover:text-alamia-accent hover:bg-white/10 rounded-lg transition-all cursor-pointer">Home</a>
                        <div className="space-y-2">
                            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="block px-4 py-3 text-alamia-dark-gray hover:text-alamia-accent hover:bg-white/10 rounded-lg transition-all cursor-pointer">Services</a>
                            <div className="ml-4 space-y-1">
                                <Link to="/services/custom-development" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm text-alamia-dark-gray hover:text-alamia-accent hover:bg-white/10 rounded-lg transition-all">
                                    <i className="fas fa-code mr-2 text-alamia-accent"></i>Custom Development
                                </Link>
                                <Link to="/services/cloud-solutions" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm text-alamia-dark-gray hover:text-alamia-accent hover:bg-white/10 rounded-lg transition-all">
                                    <i className="fas fa-cloud mr-2 text-alamia-accent"></i>Cloud Solutions
                                </Link>
                                <Link to="/services/data-analytics" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm text-alamia-dark-gray hover:text-alamia-accent hover:bg-white/10 rounded-lg transition-all">
                                    <i className="fas fa-chart-bar mr-2 text-alamia-accent"></i>Data Analytics
                                </Link>
                                <Link to="/services/consulting" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm text-alamia-dark-gray hover:text-alamia-accent hover:bg-white/10 rounded-lg transition-all">
                                    <i className="fas fa-handshake mr-2 text-alamia-accent"></i>Consulting
                                </Link>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <span className="block px-4 py-3 text-alamia-dark-gray font-medium">Products</span>
                            <div className="ml-4 space-y-1">
                                <Link to="/products/ai-agent-kit-pro" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm text-alamia-dark-gray hover:text-alamia-accent hover:bg-white/10 rounded-lg transition-all">
                                    <i className="fas fa-robot mr-2 text-alamia-accent"></i>AI Agent Kit Pro
                                </Link>
                                <Link to="/products/alamiaconnect-crm" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm text-alamia-dark-gray hover:text-alamia-accent hover:bg-white/10 rounded-lg transition-all">
                                    <i className="fas fa-users mr-2 text-alamia-accent"></i>AlamiaConnect CRM
                                </Link>
                                <a href="https://unisage.alamiasoft.com" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm text-alamia-dark-gray hover:text-alamia-accent hover:bg-white/10 rounded-lg transition-all">
                                    <i className="fas fa-graduation-cap mr-2 text-alamia-accent"></i>Alamia UniSage
                                </a>
                            </div>
                        </div>
                        <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="block px-4 py-3 text-alamia-dark-gray hover:text-alamia-accent hover:bg-white/10 rounded-lg transition-all cursor-pointer">About</a>
                        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="block px-4 py-3 text-alamia-dark-gray hover:text-alamia-accent hover:bg-white/10 rounded-lg transition-all cursor-pointer">Contact</a>
                        <button onClick={(e) => handleNavClick(e, 'contact')} className="w-full btn-primary text-white px-6 py-3 rounded-full text-sm font-medium mt-4">
                            <i className="fas fa-rocket mr-2"></i>Get Started
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
