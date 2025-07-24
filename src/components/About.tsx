import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Award, 
  Globe, 
  TrendingUp,
  CheckCircle,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

export const About = () => {
  const teamHighlights = [
    {
      icon: Users,
      title: "Experienced Professionals",
      description: "Our team comprises experienced professionals with deep understanding of GRC, bringing diverse skills and expertise."
    },
    {
      icon: Award,
      title: "Subject-Matter Experts",
      description: "Consultants and trainers with professional certifications and extensive hands-on experience from top companies."
    },
    {
      icon: TrendingUp,
      title: "Passionate About GRC",
      description: "Team members committed to staying current with latest trends and industry best practices."
    }
  ];

  const globalPresence = [
    { region: "MENA", description: "Middle East & North Africa", active: true },
    { region: "Europe", description: "European Markets", active: true },
    { region: "USA", description: "United States", active: true },
    { region: "China", description: "Asian Markets", active: true }
  ];

  const industries = [
    "Banking & Financial Services",
    "Insurance",
    "Retail",
    "Oil & Gas", 
    "Government Services",
    "Consulting Services"
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Headquarters",
      details: "Grand Tower Bloc B 3rd floor Unit 106\nAjman, UAE"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: "UAE: +971 55 165 5129\nLebanon: +961 3 264 925\nKuwait: +965 6 621 8851"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@bllectual.com\nsupport@bllectual.com"
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Bllectual
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We strengthen businesses across multiple industries, helping organizations 
            achieve regulatory compliance and implement best practices in corporate governance.
          </p>
        </div>

        {/* Team Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {teamHighlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card key={index} className="text-center group hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-accent-teal transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Global Presence & Industries */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Global Presence */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-foreground flex items-center">
              <Globe className="w-8 h-8 mr-3 text-accent-teal" />
              Global Presence
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {globalPresence.map((location, index) => (
                <Card key={index} className="bg-gradient-card border-0">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-accent-emerald rounded-full"></div>
                      <div>
                        <div className="font-semibold text-foreground">{location.region}</div>
                        <div className="text-sm text-muted-foreground">{location.description}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Industries Served */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-foreground flex items-center">
              <TrendingUp className="w-8 h-8 mr-3 text-accent-teal" />
              Industries Served
            </h3>
            <div className="space-y-3">
              {industries.map((industry, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                  <CheckCircle className="w-5 h-5 text-accent-teal flex-shrink-0" />
                  <span className="font-medium text-foreground">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div id="contact" className="bg-gradient-hero rounded-2xl p-12 shadow-professional">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Get in Touch
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Ready to strengthen your organization's governance, risk, and compliance? 
              Contact our experts today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{contact.title}</h4>
                  <p className="text-white/90 whitespace-pre-line text-sm leading-relaxed">
                    {contact.details}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Success Metric */}
          <div className="text-center mt-12 pt-8 border-t border-white/20">
            <div className="text-accent-teal text-4xl font-bold mb-2">&lt; 1%</div>
            <div className="text-white/90">
              Annual churn rate - a testament to our client satisfaction and service excellence
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};