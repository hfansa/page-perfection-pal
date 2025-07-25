import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-business.jpg";
import logo from "/lovable-uploads/764a30d4-0812-4d75-a9f3-381183df7c5c.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional business environment" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary-light/85"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-16 h-16 bg-accent-teal/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent-emerald/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-32 w-12 h-12 bg-primary-glow/30 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center text-white">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src={logo} 
            alt="Bllectual" 
            className="h-16 w-auto"
          />
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Your{" "}
          <span className="text-primary-glow">
            Business Solutions
          </span>{" "}
          Partner
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-white/90">
          Bllectual empowers organizations to thrive. Our team of experts delivers innovative business solutions, 
          specializing in internal auditing, fraud analytics, and IT services.
        </p>

        {/* Key points */}
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          <div className="flex items-center gap-2 text-lg">
            <Shield className="w-6 h-6 text-accent-teal" />
            <span>Risk Mitigation</span>
          </div>
          <div className="flex items-center gap-2 text-lg">
            <Users className="w-6 h-6 text-accent-emerald" />
            <span>Expert Team</span>
          </div>
          <div className="flex items-center gap-2 text-lg">
            <TrendingUp className="w-6 h-6 text-accent-teal" />
            <span>Goal Achievement</span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="accent" 
            size="lg"
            className="text-lg px-8 py-4 h-auto"
          >
            Explore Solutions
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-8 py-4 h-auto border-white/50 text-white hover:bg-white/20 hover:text-white"
          >
            Contact Us Today
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-teal mb-2">&lt;1%</div>
            <div className="text-white/80">Annual Churn Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-emerald mb-2">MENA+</div>
            <div className="text-white/80">Global Reach</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-teal mb-2">GRC</div>
            <div className="text-white/80">Specialists</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};