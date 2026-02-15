import {
  Navbar,
  Hero,
  TrustBar,
  About,
  Services,
  Gallery,
  Contact,
  Footer,
} from "@/components/landing";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <div className="mx-auto w-2/3 max-w-xl h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <Services />
        <div className="mx-auto w-2/3 max-w-xl h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <Gallery />
        <div className="mx-auto w-2/3 max-w-xl h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
