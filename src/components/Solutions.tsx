import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  ClipboardCheck, 
  FileCheck, 
  BarChart3, 
  Lock, 
  Users,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import solutionsImage from "@/assets/solutions-bg.jpg";

export const Solutions = () => {
  const solutions = [
    {
      icon: Shield,
      title: "Risk Management",
      description: "Centralize and simplify core risk management activities in a single, integrated platform across the end-to-end risk process.",
      features: ["Risk Assessment", "Mitigation Planning", "Real-time Monitoring", "Reporting & Analytics"]
    },
    {
      icon: ClipboardCheck,
      title: "Audit Management",
      description: "Flexible audit management solution designed to drive efficiency across your entire audit workflow from planning to reporting.",
      features: ["Audit Planning", "Workflow Automation", "Evidence Management", "Comprehensive Reporting"]
    },
    {
      icon: FileCheck,
      title: "Compliance Management",
      description: "Stay current on ever-changing regulatory requirements and standards to strengthen organization-wide compliance.",
      features: ["Regulatory Tracking", "Policy Management", "Compliance Monitoring", "Violation Remediation"]
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description: "Automate processes and deliver the answers that drive strategic change using our state-of-art Analytics Solution.",
      features: ["Data Intelligence", "Process Automation", "Predictive Analytics", "Strategic Insights"]
    },
    {
      icon: Lock,
      title: "Internal Controls Management",
      description: "Manage and automate internal controls program including SOX, ITGC, ICFR and OMB A-123 compliance requirements.",
      features: ["Control Testing", "SOX Compliance", "Workflow Automation", "Three Lines of Defense"]
    },
    {
      icon: Users,
      title: "Privacy & Data Governance",
      description: "Safeguard consumer privacy and data against modern threats with comprehensive privacy program operationalization.",
      features: ["Privacy Program", "Data Protection", "Third-party Monitoring", "Incident Response"]
    }
  ];

  return (
    <section id="solutions" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={solutionsImage} 
          alt="Solutions background" 
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/50 to-background"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Comprehensive{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              GRC Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our integrated suite of Governance, Risk, and Compliance solutions empowers organizations 
            to manage risk, ensure compliance, and drive operational excellence.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-professional transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0"
              >
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-gradient-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-accent-teal transition-colors">
                    {solution.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-accent-teal mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:border-accent-teal group-hover:text-accent-teal transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-hero rounded-2xl p-12 shadow-professional">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your GRC Program?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover how our integrated solutions can help you manage risk, 
            ensure compliance, and drive operational excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" className="text-lg px-8 py-4 h-auto">
              Schedule Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto border-white/30 text-white hover:bg-white/10"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};