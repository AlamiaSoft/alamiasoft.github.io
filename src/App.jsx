import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import CustomDevelopment from './pages/CustomDevelopment';
import CloudSolutions from './pages/CloudSolutions';
import DataAnalytics from './pages/DataAnalytics';
import Consulting from './pages/Consulting';
import AIAgentKitPro from './pages/AIAgentKitPro';
import AlamiaConnect from './pages/AlamiaConnect';
import './index.css';


function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services/custom-development" element={<CustomDevelopment />} />
                    <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
                    <Route path="/services/data-analytics" element={<DataAnalytics />} />
                    <Route path="/services/consulting" element={<Consulting />} />
                    <Route path="/products/ai-agent-kit-pro" element={<AIAgentKitPro />} />
                    <Route path="/products/alamiaconnect-crm" element={<AlamiaConnect />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
