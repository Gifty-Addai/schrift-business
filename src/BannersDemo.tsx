import HeroBanner from './components/sections/HeroBanner';
import ServicesBanner from './components/sections/ServicesBanner';
import './styles/global.scss';

/**
 * Demo page showcasing the business banners
 * 
 * This page demonstrates:
 * 1. HeroBanner - Main landing banner with CTA and stats
 * 2. ServicesBanner - Portfolio-style services showcase with hexagonal design
 * 
 * To use these banners in your main app, simply import and place them where needed.
 */
function BannersDemo() {
    return (
        <div className="banners-demo">
            <HeroBanner />
            <ServicesBanner />
        </div>
    );
}

export default BannersDemo;
