import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Logos } from "@/components/Logos";
import { Problem } from "@/components/Problem";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Integrations } from "@/components/Integrations";
import { Security } from "@/components/Security";
import { UseCases } from "@/components/UseCases";
import { Questions } from "@/components/Questions";
import { Testimonials } from "@/components/Testimonials";
import { Quote } from "@/components/Quote";
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
        <Logos />
        <SectionDivider />
        <Problem />
        <SectionDivider />
        <HowItWorks />
        <SectionDivider />
        <Features />
        <SectionDivider />
        <Integrations />
        <SectionDivider />
        <Security />
        <SectionDivider />
        <UseCases />
        <SectionDivider />
        <Questions />
        <SectionDivider />
        <Testimonials />
        <SectionDivider />
        <Quote />
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
