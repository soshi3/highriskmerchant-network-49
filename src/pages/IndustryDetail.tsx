import { useParams, Link } from "react-router-dom";
import { industries } from "@/components/Industries";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { Navbar } from "@/components/Navbar";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";

// Define industry-specific SEO content
const industrySeoContent: { [key: string]: string } = {
  "subscription-box": `In subscription box business payment processing, security and efficiency are the most crucial elements. 
  Our payment solutions feature automated recurring billing, customer data encryption, and fraud detection systems to support 
  your subscription business growth. With our compliance-ready payment system, we help you improve customer satisfaction 
  and achieve business expansion.`,
  "adult": `We provide payment solutions tailored for the adult entertainment industry. 
  With a focus on high security standards and regulatory compliance, we ensure smooth transaction processing. 
  Our system comes equipped with chargeback prevention and fraud protection features to create a secure payment environment.`,
  "airline-booking": `We offer specialized payment processing solutions for airline ticket reservation systems. 
  By providing real-time booking confirmation, multi-currency support, and secure payment processing, 
  we help streamline operations for airlines and travel agencies.`,
  // ... Add other industries similarly
};

const IndustryDetail = () => {
  const { industryName } = useParams();
  
  // Add useEffect to scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [industryName]); // Re-run when industryName changes
  
  const industry = industries.find(
    (ind) => ind.name.toLowerCase().replace(/\s+/g, '-') === industryName
  );

  if (!industry) {
    return (
      <div className="min-h-screen bg-secondary">
        <Navbar />
        <div className="container mx-auto px-4 pt-32">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Industry Not Found</h1>
            <Link to="/">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const seoContent = industrySeoContent[industryName || ''] || `We provide payment solutions tailored for the ${industry.name} industry.
    With advanced security measures and efficient transaction processing systems, we support your business growth.
    Our services are backed by 24/7 support and extensive industry experience.`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-secondary/50 to-white">
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-white"></div>
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(110,89,165,0.3),rgba(255,255,255,0))]"></div>
        </div>
        
        <Navbar />
        
        <div className="container mx-auto px-4 pt-32 pb-20">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Industries
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8 animate-fade-in" id="industry-content">
              <div className="flex items-center space-x-4 bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-sm">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <industry.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-gray-900">{industry.name}</h1>
                  <p className="text-lg text-gray-600 mt-2">{industry.description}</p>
                </div>
              </div>

              {/* Add SEO content */}
              <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">Payment Solutions for {industry.name}</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {seoContent}
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">Why Choose Our {industry.name} Payment Processing?</h2>
                  <div className="grid gap-4">
                    {[
                      `Specialized high-risk merchant accounts tailored for ${industry.name.toLowerCase()} businesses`,
                      "Competitive rates and flexible payment terms",
                      "Advanced fraud protection and risk management",
                      "24/7 customer support and dedicated account manager",
                      "Fast approval process and quick account setup",
                      "Multiple currency support and global payment processing"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-gray-700">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">Our {industry.name} Solutions Include:</h2>
                  <div className="grid gap-4">
                    {[
                      "Secure payment gateway integration",
                      "Chargeback prevention and management",
                      "Multi-currency processing capabilities",
                      "Recurring billing and subscription management",
                      "PCI DSS compliance support",
                      "Real-time transaction monitoring"
                    ].map((solution, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-gray-700">{solution}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:sticky lg:top-32">
              <Card className="border-none shadow-xl bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">Get Started with {industry.name} Processing</h2>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryDetail;