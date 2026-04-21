import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Hudson Web Group",
  url: "https://hudsonwebgroup.com",
  email: "hello@hudsonwebgroup.com",
  description:
    "A results-driven digital marketing agency delivering web design, SEO, paid advertising, email marketing, and bespoke software for businesses that refuse to stand still.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO & Content Strategy" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Advertising" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Email Marketing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bespoke Software" } },
    ],
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <main>
        <Nav />
        <Hero />
        <About />
        <Services />
        <Footer />
      </main>
    </>
  );
}
