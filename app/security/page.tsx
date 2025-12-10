import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Security } from "@/components/Security";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { SectionDivider } from "@/components/SectionDivider";

export const metadata = {
  title: "Security – Lumafin Business",
  description: "Enterprise-grade security with encryption, GDPR compliance, and Swiss hosting."
};

export default function SecurityPage() {
  return (
    <>
      <Navbar />
      <main>
        <Security showHeader={true} />
        <SectionDivider />
        <FAQ />
        <SectionDivider />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
