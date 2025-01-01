import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { Features } from "@/components/Features";
import { Industries } from "@/components/Industries";
import { Stats } from "@/components/Stats";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="relative">
        {/* Enhanced abstract background with multiple layers */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary to-white"></div>
          
          {/* Abstract patterns */}
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(110,89,165,0.3),rgba(255,255,255,0))]"></div>
          <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] bg-[radial-gradient(circle_at_center,#FEC6A1_0%,transparent_70%)] blur-xl opacity-20"></div>
          <div className="absolute top-[5%] right-[10%] w-[250px] h-[250px] bg-[radial-gradient(circle_at_center,#E5DEFF_0%,transparent_70%)] blur-xl opacity-30"></div>
          <div className="absolute top-[30%] left-[40%] w-[200px] h-[200px] bg-[radial-gradient(circle_at_center,#D3E4FD_0%,transparent_70%)] blur-xl opacity-25"></div>
          
          {/* Animated blobs */}
          <div className="absolute top-[15%] right-[30%] w-[150px] h-[150px] rounded-full bg-gradient-to-r from-[#8B5CF6]/10 to-[#D946EF]/10 animate-pulse"></div>
          <div className="absolute top-[40%] left-[15%] w-[100px] h-[100px] rounded-full bg-gradient-to-r from-[#F97316]/10 to-[#0EA5E9]/10 animate-pulse delay-700"></div>
        </div>
        
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium">
                  8 Years in Business
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  High-Risk Merchant Account Provider
                </h1>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-2">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">✓</div>
                    <div>
                      <div className="font-medium">99% Approval Rate</div>
                      <div className="text-sm text-gray-600">Industry-leading acceptance</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">✓</div>
                    <div>
                      <div className="font-medium">No Setup Fee</div>
                      <div className="text-sm text-gray-600">Start processing instantly</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:pl-12">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              High-Risk Merchant Account Provider
            </h2>
            <p className="text-gray-600">
              Our company specializes in providing merchant account services tailored for high-risk industries, helping you navigate complex payment environments with ease.
            </p>
          </div>
          <Features />
          <div className="text-center mt-12">
            <Button size="lg">Get Started Today</Button>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 bg-secondary" id="industries">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            High-Risk Industries We Accept
          </h2>
          <Industries />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
          <Stats />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Let's Get Started?</h2>
            <p className="text-gray-600 mb-8">
              Low or high, your risk level won't stop you from getting a fast and easy approval. We accept and provide for a number of industries.
            </p>
            <ContactForm />
          </div>
          <div className="text-center text-sm text-gray-600 mt-12">
            Copyright © 2025 High risk merchant .network All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;