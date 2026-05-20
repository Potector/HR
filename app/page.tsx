import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { VisionSection } from "@/components/vision-section";
import { WhyUsSection } from "@/components/why-us-section";
import { ServicesSection } from "@/components/services-section";
import { TeamSection } from "@/components/team-section";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <VisionSection />
        <WhyUsSection />
        <ServicesSection />
        <TeamSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
