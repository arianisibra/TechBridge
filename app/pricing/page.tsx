import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { SectionDivider } from "@/components/SectionDivider";

export const metadata = {
  title: "Pricing – Lumafin Business",
  description: "Simple, transparent pricing for invoice automation. Start with a 14-day free trial."
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Pricing />
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
