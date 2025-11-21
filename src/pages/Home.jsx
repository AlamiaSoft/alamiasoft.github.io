import Hero from '../components/home/Hero';
import ServicesSection from '../components/home/ServicesSection';
import ProductsSection from '../components/home/ProductsSection';
import AboutSection from '../components/home/AboutSection';
import ContactSection from '../components/home/ContactSection';

const Home = () => {
    return (
        <>
            <Hero />
            <ServicesSection />
            <ProductsSection />
            <AboutSection />
            <ContactSection />
        </>
    );
};

export default Home;
