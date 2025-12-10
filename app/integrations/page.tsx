import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Integrations } from "@/components/Integrations";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { SectionDivider } from "@/components/SectionDivider";

export const metadata = {
  title: "Integrations – Lumafin Business",
  description: "Connect Lumafin to your ERP, accounting software, and communication tools."
};

export default function IntegrationsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Integrations />
        <SectionDivider />
        <Testimonials />
        <SectionDivider />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
