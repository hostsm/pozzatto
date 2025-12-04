import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import BeesSection from '@/components/BeesSection';
import ProductsSection from '@/components/ProductsSection';
import ExportsSection from '@/components/ExportsSection';
import QualitySection from '@/components/QualitySection';
import CertificationsSection from '@/components/CertificationsSection';
import CatalogSection from '@/components/CatalogSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <BeesSection />
        <ProductsSection />
        <ExportsSection />
        <QualitySection />
        <CertificationsSection />
        <CatalogSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
