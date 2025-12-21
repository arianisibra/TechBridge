import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { UseCases } from "@/components/UseCases";
import { WhyTechBridge } from "@/components/WhyTechBridge";
import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { SectionDivider } from "@/components/SectionDivider";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <UseCases />
        <SectionDivider />
        <HowItWorks />
        <SectionDivider />
        <WhyTechBridge />
        <SectionDivider />
        <About />
        <SectionDivider />
        <CTA />
        <SectionDivider />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
