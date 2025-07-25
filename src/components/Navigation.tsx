import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/bllectual-logo.png";
export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [{
    label: "Home",
    href: "#home"
  }, {
    label: "Solutions",
    href: "#solutions"
  }, {
    label: "Services",
    href: "#services"
  }, {
    label: "About",
    href: "#about"
  }, {
    label: "Contact",
    href: "#contact"
  }];
  return <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-professional" : "bg-transparent"}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20 bg-transparent">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Bllectual" className={`h-10 w-auto transition-all duration-300 ${isScrolled ? "opacity-100" : "filter brightness-0 invert opacity-90"}`} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <a key={item.label} href={item.href} className={`font-medium transition-colors hover:text-accent ${isScrolled ? "text-foreground" : "text-white"}`}>
                {item.label}
              </a>)}
          </div>

          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button variant={isScrolled ? "premium" : "accent"} size="sm" className="hidden sm:flex">
              <Phone className="w-4 h-4 mr-2" />
              Contact
            </Button>

            {/* Mobile menu button */}
            <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden p-2 transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-professional">
            <div className="px-6 py-4 space-y-4">
              {navItems.map(item => <a key={item.label} href={item.href} className="block font-medium text-foreground hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>
                  {item.label}
                </a>)}
              <Button variant="premium" size="sm" className="w-full">
                <Phone className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};