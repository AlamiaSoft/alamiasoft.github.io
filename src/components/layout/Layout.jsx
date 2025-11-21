import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    useEffect(() => {
        // Scroll progress indicator
        const handleScroll = () => {
            const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            const progressBar = document.getElementById('scroll-progress');
            if (progressBar) {
                progressBar.style.transform = `scaleX(${scrolled / 100})`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="font-nunito text-alamia-dark antialiased">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
