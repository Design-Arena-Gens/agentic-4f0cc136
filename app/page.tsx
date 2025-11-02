import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureHighlights from "@/components/FeatureHighlights";
import TherapistGrid from "@/components/TherapistGrid";
import SessionBooking from "@/components/SessionBooking";
import TestimonialMarquee from "@/components/TestimonialMarquee";
import ResourceCards from "@/components/ResourceCards";
import SupportBanner from "@/components/SupportBanner";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import { therapists } from "@/lib/data/therapists";
import { testimonials } from "@/lib/data/testimonials";
import { resources } from "@/lib/data/resources";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeatureHighlights />
        <TherapistGrid therapists={therapists} />
        <SessionBooking therapists={therapists} />
        <TestimonialMarquee testimonials={testimonials} />
        <ResourceCards resources={resources} />
        <SupportBanner />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
