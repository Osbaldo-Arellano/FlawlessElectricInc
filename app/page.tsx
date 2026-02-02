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
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
