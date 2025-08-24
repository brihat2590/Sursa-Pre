import { HeroSection } from "@/components/hero-section"
import { DashboardPreview } from "@/components/dashboard-preview"
import { BentoSection } from "@/components/bento-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import  FooterSection  from "@/components/footer-section"
import { AnimatedSection } from "@/components/animated-section"
import { WishlistSection } from "@/components/wishlist-section"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden pb-0">
      <div className="relative z-10">
        <main className="max-w-[1320px] mx-auto relative px-4 sm:px-8 md:px-6 lg:px-0">
          <HeroSection />
          {/* Dashboard Preview Wrapper */}
          <div className="relative mt-8 sm:mt-16 md:mt-12 lg:absolute lg:bottom-[-400px] lg:left-1/2 lg:transform lg:-translate-x-1/2 z-30">
            <AnimatedSection>
              <DashboardPreview />
            </AnimatedSection>
          </div>
        </main>
        
        <AnimatedSection id="features-section" className="relative z-10 max-w-[1320px] mx-auto mt-2 sm:mt-4 md:mt-6 lg:mt-16 px-4 sm:px-8 md:px-6 lg:px-0" delay={0.2}>
          <BentoSection />
        </AnimatedSection>
        <AnimatedSection
          id="waitlist-section"
          className="relative z-10 max-w-[1320px] mx-auto mt-6 sm:mt-10 md:mt-8 lg:mt-16 px-4 sm:px-8 md:px-6 lg:px-0"
          delay={0.2}
        >
          <WishlistSection />
        </AnimatedSection>
        <AnimatedSection id="faq-section" className="relative z-10 max-w-[1320px] mx-auto mt-6 sm:mt-10 md:mt-8 lg:mt-16 px-4 sm:px-8 md:px-6 lg:px-0" delay={0.2}>
          <FAQSection />
        </AnimatedSection>
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-6 sm:mt-10 md:mt-8 lg:mt-16 px-4 sm:px-8 md:px-6 lg:px-0" delay={0.2}>
          <CTASection />
        </AnimatedSection>
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-6 sm:mt-10 md:mt-8 lg:mt-16 px-4 sm:px-8 md:px-6 lg:px-0" delay={0.2}>
          <FooterSection />
        </AnimatedSection>
      </div>
    </div>
  )
}
