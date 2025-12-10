import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Benefits } from "@/components/Benefits";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { SectionDivider } from "@/components/SectionDivider";
import { InvoiceDashboardMock } from "@/components/InvoiceDashboardMock";

export const metadata = {
  title: "Product – Lumafin Business",
  description: "AI-powered invoice automation with OCR extraction, approval workflows, and ERP integration."
};

export default function ProductPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-white py-12">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <InvoiceDashboardMock />
          </div>
        </section>
        <SectionDivider />
        <Benefits />
        <SectionDivider />
        <Features />
        <SectionDivider />
        <Testimonials />
        <SectionDivider />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
