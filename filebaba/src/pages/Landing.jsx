import React, { useEffect } from "react";
import { useClerk, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import HeroSection from "../components/landing/HeroSection";
import FeatureSection from "../components/landing/FeatureSection";
import PricingSection from "../components/landing/PricingSection";
import TestimonialSection from "../components/landing/TestimonialSection";
import CTASection from "../components/landing/CTASection";
import FooterSection from "../components/landing/FooterSection";
import { features, pricingPlans, testimonials } from "../assets/data";

const Landing = () => {
  const { openSignIn, openSignUp } = useClerk();
  const { isSignedIn, user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn && user) {
      navigate("/dashboard");
    }
  }, [isSignedIn, user, navigate]);

  return (
    <div className="landing-page bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero section */}
      <HeroSection openSignIn={openSignIn} openSignUp={openSignUp} />
      {/* Features */}
      <FeatureSection features={features} />
      {/* Pricing section */}
      <PricingSection
        pricingPlans={pricingPlans}
        openSignIn={openSignIn}
        openSignUp={openSignUp}
      />
      {/* Testimonials */}
      <TestimonialSection testimonials={testimonials} />
      {/* Call to action */}
      <CTASection openSignIn={openSignIn} openSignUp={openSignUp} />
      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default Landing;
