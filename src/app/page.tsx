import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import GamesShowcase from "@/components/sections/GamesShowcase";
import ParallaxExperience from "@/components/sections/ParallaxExperience";
import VideoGallery from "@/components/sections/VideoGallery";
import Testimonials from "@/components/sections/Testimonials";
import EventTypes from "@/components/sections/EventTypes";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <GamesShowcase />
      <ParallaxExperience />
      <EventTypes />
      <VideoGallery />
      <Testimonials />
      <ContactSection />
    </>
  );
}
