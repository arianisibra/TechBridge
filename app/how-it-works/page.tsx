import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { SectionDivider } from "@/components/SectionDivider";

export const metadata = {
  title: "How It Works – Lumafin Business",
  description: "See how Lumafin automates invoice processing in 3 simple steps."
};

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main>
        <HowItWorks />
        <SectionDivider />
        <Testimonials />
        <SectionDivider />
        <FAQ />
        <SectionDivider />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
