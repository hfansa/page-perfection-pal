import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Twitter, 
  ArrowUp
} from "lucide-react";
import logo from "@/assets/bllectual-logo.png";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: "Solutions",
      links: [
        "Risk Management",
        "Audit Management", 
        "Compliance Management",
        "Analytics",
        "Internal Controls",
        "Privacy & Data Governance"
      ]
    },
    {
      title: "Services",
      links: [
        "IT Services",
        "Digital Transformation",
        "Consulting",
        "Training & Certification",
        "Fraud Analytics",
        "Vendor Risk Management"
      ]
    },
    {
      title: "Training",
      links: [
        "ICA Certificates",
        "CFE Review Course",
        "CIA Preparation",
        "Compliance Training",
        "Custom Programs",
        "Professional Development"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Our Team",
        "Careers",
        "Case Studies",
        "News & Insights",
        "Contact Us"
      ]
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground relative">
      {/* Scroll to top button */}
      <Button
        onClick={scrollToTop}
        variant="accent"
        size="icon"
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 shadow-button"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>

      <div className="container mx-auto px-6 pt-16 pb-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <img 
              src={logo} 
              alt="Bllectual" 
              className="h-12 w-auto mb-6 filter brightness-0 invert"
            />
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Empowering organizations to thrive through innovative business solutions, 
              specializing in internal auditing, fraud analytics, and IT services.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-teal flex-shrink-0 mt-0.5" />
                <div className="text-sm text-primary-foreground/80">
                  Grand Tower Bloc B 3rd floor Unit 106<br />
                  Ajman, UAE
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent-teal flex-shrink-0" />
                <div className="text-sm text-primary-foreground/80">
                  +971 55 165 5129
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent-teal flex-shrink-0" />
                <div className="text-sm text-primary-foreground/80">
                  info@bllectual.com
                </div>
              </div>
            </div>
          </div>

          {/* Footer sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-4 text-primary-foreground">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-primary-foreground/80 hover:text-accent-teal transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-primary-foreground/80 text-sm">
            © 2024 Bllectual. All rights reserved.
          </div>
          
          {/* Regional contact numbers */}
          <div className="flex flex-wrap gap-4 text-sm text-primary-foreground/80">
            <span>Lebanon: +961 3 264 925</span>
            <span>Kuwait: +965 6 621 8851</span>
          </div>

          {/* Social links */}
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-accent-teal">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-accent-teal">
              <Twitter className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-primary-foreground/60">
            <span>ISO 27001 Compliant</span>
            <span>SOX Expertise</span>
            <span>GDPR Ready</span>
            <span>ITGC Certified</span>
            <span>&lt;1% Churn Rate</span>
          </div>
        </div>
      </div>
    </footer>
  );
};