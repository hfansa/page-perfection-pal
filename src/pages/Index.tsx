import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Solutions } from "@/components/Solutions";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Solutions />
        <Services />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
