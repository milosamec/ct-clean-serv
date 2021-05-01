import React from 'react'
import Header from '../components/Header'
import FeaturesSection from '../components/FeaturesSection'
import AboutTeamSection from '../components/AboutTeamSection'
import ServicesSection from '../components/ServicesSection'
import TrustSection from '../components/TrustSection'
import TestimonialSection from '../components/TestimonialSection'
const HomeScreen = () => {
    return (
        <div>
            <Header />
            <FeaturesSection />
            <AboutTeamSection />
            <ServicesSection />
            <TrustSection />
            <TestimonialSection />
        </div>
    )
}

export default HomeScreen
