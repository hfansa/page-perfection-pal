import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Cloud, 
  Briefcase, 
  GraduationCap,
  Search,
  UserCheck,
  ArrowRight,
  Star
} from "lucide-react";

export const Services = () => {
  const serviceCategories = [
    {
      icon: Code,
      title: "IT & Digital Services",
      description: "Comprehensive technology solutions to modernize your operations and drive digital transformation.",
      color: "bg-accent-teal",
      services: [
        { name: "Digital Transformation", level: "Enterprise" },
        { name: "IT Managed Services", level: "Premium" },
        { name: "IT Outsourcing", level: "Scalable" },
        { name: "Custom Development", level: "Tailored" }
      ]
    },
    {
      icon: Briefcase,
      title: "Consulting Services",
      description: "Expert guidance and strategic consulting to strengthen your risk management and compliance programs.",
      color: "bg-accent-emerald",
      services: [
        { name: "Fraud Awareness Programs", level: "Comprehensive" },
        { name: "Whistleblowing Solutions", level: "Secure" },
        { name: "Risk Assessment", level: "Thorough" },
        { name: "Internal Audit Consulting", level: "Expert" }
      ]
    },
    {
      icon: GraduationCap,
      title: "Training & Certification",
      description: "Professional development programs and industry-recognized certifications for your team.",
      color: "bg-primary",
      services: [
        { name: "ICA Certificates", level: "Accredited" },
        { name: "CFE Review Course", level: "Intensive" },
        { name: "CIA Preparation", level: "Structured" },
        { name: "Custom Training", level: "Tailored" }
      ]
    }
  ];

  const specializations = [
    {
      icon: Search,
      title: "Fraud Analytics",
      description: "Advanced data analytics to detect, investigate, and prevent fraudulent activities.",
      stats: "99.5% Detection Rate"
    },
    {
      icon: UserCheck,
      title: "Vendor Risk Management",
      description: "Comprehensive third-party risk assessment and ongoing monitoring solutions.",
      stats: "500+ Vendors Assessed"
    },
    {
      icon: Cloud,
      title: "IT Security Risk",
      description: "Digital risk management across your organization with integrated security frameworks.",
      stats: "Zero Breach Record"
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Professional{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From consulting and training to complete IT transformation, we deliver 
            the expertise your organization needs to excel in today's complex business environment.
          </p>
        </div>

        {/* Service Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="group hover:shadow-professional transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0">
                <CardHeader className="pb-4">
                  <div className={`w-14 h-14 ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-accent-teal transition-colors">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {category.services.map((service, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">{service.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {service.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:border-accent-teal group-hover:text-accent-teal transition-colors"
                  >
                    Explore Services
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Specializations */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Our Specializations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specializations.map((spec, index) => {
              const Icon = spec.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-button">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent-teal transition-colors">
                    {spec.title}
                  </h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {spec.description}
                  </p>
                  <div className="flex items-center justify-center gap-1 text-accent-teal font-semibold">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm">{spec.stats}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-hero rounded-2xl p-12 shadow-professional">
            <h3 className="text-3xl font-bold text-white mb-4">
              Let's Discuss Your Requirements
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement the right solutions 
              for your organization's unique challenges.
            </p>
            <Button variant="accent" size="lg" className="text-lg px-8 py-4 h-auto">
              Start Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};