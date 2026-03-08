import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import CTABanner from "@/components/sections/CTABanner";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Clients from "@/components/sections/Clients";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Navbar />
      <Hero />
      <CTABanner />
      <Services />
      <About />
      <Clients />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
