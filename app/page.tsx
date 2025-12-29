import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { UseCases } from "@/components/UseCases";
import { Projects } from "@/components/Projects";
import { References } from "@/components/References";
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
        <Projects />
        <SectionDivider />
        <HowItWorks />
        <SectionDivider />
        <WhyTechBridge />
        <SectionDivider />
        <About />
        <SectionDivider />
        <CTA />
        <SectionDivider />
        <References />
        <SectionDivider />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
