import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ServiceHighlights } from "@/components/service-highlights"
import { Services } from "@/components/services"
import { BeforeAfter } from "@/components/before-after"
import { About } from "@/components/about"
import { Reviews } from "@/components/reviews"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ServiceHighlights />
      <Services />
      <BeforeAfter />
      <About />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  )
}
