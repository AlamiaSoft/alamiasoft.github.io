const ContactSection = () => {
    return (
        <section id="contact" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-ubuntu font-bold text-alamia-dark mb-6">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Ready to transform your business with innovative software solutions? Let's discuss your project and bring your vision to life.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-ubuntu font-semibold text-alamia-dark mb-8">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-center p-6 glass-card rounded-2xl group hover:scale-105 transition-transform">
                                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-6">
                                        <i className="fas fa-phone text-white text-lg"></i>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-slate-500 mb-1">Phone</div>
                                        <div className="text-lg font-semibold text-alamia-dark">+92 334 5112969</div>
                                    </div>
                                </div>

                                <div className="flex items-center p-6 glass-card rounded-2xl group hover:scale-105 transition-transform">
                                    <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-6">
                                        <i className="fas fa-envelope text-white text-lg"></i>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-slate-500 mb-1">Email</div>
                                        <div className="text-lg font-semibold text-alamia-dark">contact@alamiasoft.com</div>
                                    </div>
                                </div>

                                <div className="flex items-center p-6 glass-card rounded-2xl group hover:scale-105 transition-transform">
                                    <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mr-6">
                                        <i className="fas fa-clock text-white text-lg"></i>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-slate-500 mb-1">Response Time</div>
                                        <div className="text-lg font-semibold text-alamia-dark">Within 24 hours</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-8">
                            <h4 className="text-lg font-semibold text-alamia-dark mb-6">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="#" className="w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="#" className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form p-10 rounded-3xl">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-alamia-dark mb-3">Full Name</label>
                                    <input type="text" className="input-field w-full px-4 py-4 rounded-xl focus:outline-none transition-all" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-alamia-dark mb-3">Email Address</label>
                                    <input type="email" className="input-field w-full px-4 py-4 rounded-xl focus:outline-none transition-all" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-alamia-dark mb-3">Subject</label>
                                <input type="text" className="input-field w-full px-4 py-4 rounded-xl focus:outline-none transition-all" placeholder="Project Discussion" />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-alamia-dark mb-3">Message</label>
                                <textarea rows="5" className="input-field w-full px-4 py-4 rounded-xl focus:outline-none transition-all resize-none" placeholder="Tell us about your project..."></textarea>
                            </div>

                            <button type="submit" className="w-full btn-primary text-white py-4 rounded-xl font-semibold text-lg group">
                                <i className="fas fa-paper-plane mr-3 group-hover:mr-4 transition-all"></i>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
