import HomeSection from '../components/HomeSection';
import AnimatedWebsiteSection from '../components/AnimatedWebsiteSection'; // Adjust the import path as necessary
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import OurProcessSection from '../components/OurProcessSection';
import PortfolioSection from '../components/PortfolioSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FinalCTASection from '../components/FinalCTASection';

export default function Home() {


    return (
        <div className="relative min-h-screen overflow-hidden bg-[#000000] mt-10">

            <div className="absolute inset-0 bg-gradient-to-br from-[#002e1c] via-[#038a56] to-[#04e68f] opacity-20" />

            <HomeSection />
            <AnimatedWebsiteSection />
            <WhyChooseUsSection />
            <OurProcessSection />
            <PortfolioSection />
            <TestimonialsSection />
            <FinalCTASection />
        </div>
    );
}


