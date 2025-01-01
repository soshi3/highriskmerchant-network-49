import { useParams, Link } from "react-router-dom";
import { industries } from "@/components/Industries";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { Navbar } from "@/components/Navbar";
import { ArrowLeft } from "lucide-react";

const IndustryDetail = () => {
  const { industryName } = useParams();
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

  return (
    <div className="min-h-screen">
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary to-white"></div>
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(110,89,165,0.3),rgba(255,255,255,0))]"></div>
        </div>
        
        <Navbar />
        
        <div className="container mx-auto px-4 pt-32">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Industries
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <industry.icon className="h-12 w-12 text-primary" />
                <h1 className="text-4xl font-bold">{industry.name}</h1>
              </div>
              
              <div className="prose prose-lg">
                <p className="text-xl text-gray-600 mb-6">{industry.description}</p>
                
                <h2 className="text-2xl font-semibold mb-4">Why Choose Our {industry.name} Payment Processing?</h2>
                <ul className="space-y-4">
                  <li>Specialized high-risk merchant accounts tailored for {industry.name.toLowerCase()} businesses</li>
                  <li>Competitive rates and flexible payment terms</li>
                  <li>Advanced fraud protection and risk management</li>
                  <li>24/7 customer support and dedicated account manager</li>
                  <li>Fast approval process and quick account setup</li>
                  <li>Multiple currency support and global payment processing</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Our {industry.name} Solutions Include:</h2>
                <ul className="space-y-4">
                  <li>Secure payment gateway integration</li>
                  <li>Chargeback prevention and management</li>
                  <li>Multi-currency processing capabilities</li>
                  <li>Recurring billing and subscription management</li>
                  <li>PCI DSS compliance support</li>
                  <li>Real-time transaction monitoring</li>
                </ul>
              </div>
            </div>
            
            <div className="lg:sticky lg:top-32">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold mb-6">Get Started with {industry.name} Processing</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryDetail;