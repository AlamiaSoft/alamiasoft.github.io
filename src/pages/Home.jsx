import Hero from '../components/home/Hero';
import ServicesSection from '../components/home/ServicesSection';
import ProductsSection from '../components/home/ProductsSection';
import UpcomingProjectsSection from '../components/home/UpcomingProjectsSection';
import AboutSection from '../components/home/AboutSection';
import ContactSection from '../components/home/ContactSection';

const Home = () => {
    return (
        <>
            <Hero />
            <ProductsSection />
            <UpcomingProjectsSection />
            <ServicesSection />
            <AboutSection />
            <ContactSection />
        </>
    );
};

export default Home;
