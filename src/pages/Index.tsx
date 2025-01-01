import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { Features } from "@/components/Features";
import { Industries } from "@/components/Industries";
import { Stats } from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Index = () => {
  const [primaryColor, setPrimaryColor] = useState("#6E59A5");

  const colors = {
    purple: {
      primary: "#6E59A5",
      gradient: "rgba(110,89,165,0.3)",
      secondary: "#F6F6F7",
    },
    blueTeal: {
      primary: "#4A90B8",
      gradient: "rgba(74,144,184,0.3)",
      secondary: "#F0F7FA",
    },
    gold: {
      primary: "#B8860B",
      gradient: "rgba(184,134,11,0.3)",
      secondary: "#FAF6F0",
    },
  };

  useEffect(() => {
    const selectedTheme = Object.values(colors).find(theme => theme.primary === primaryColor);
    if (selectedTheme) {
      document.documentElement.style.setProperty("--primary-color", selectedTheme.primary);
      document.documentElement.style.setProperty("--gradient-color", selectedTheme.gradient);
      document.documentElement.style.setProperty("--secondary-color", selectedTheme.secondary);
    }
  }, [primaryColor, colors]);

  return (
    <div className="min-h-screen">
      <div className="relative">
        {/* Updated gradient background with more dramatic effect */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)] via-[var(--gradient-color)] to-white opacity-90"></div>
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(ellipse_100%_100%_at_50%_-20%,var(--primary-color),transparent)] opacity-40"></div>
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
        <footer className="bg-[var(--secondary-color)] py-20 px-4">
          <div className="container mx-auto">
            <div className="flex flex-col items-center max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Let's Get Started?</h2>
              <p className="text-gray-600 mb-8">
                Low or high, your risk level won't stop you from getting a fast and easy approval. We accept and provide for a number of industries.
              </p>
              <div className="w-full flex justify-center">
                <ContactForm />
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-4 mb-4">
                {Object.entries(colors).map(([name, theme]) => (
                  <button
                    key={name}
                    onClick={() => setPrimaryColor(theme.primary)}
                    className={`w-8 h-8 rounded-full transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary`}
                    style={{ backgroundColor: theme.primary }}
                    aria-label={`Switch to ${name} theme`}
                  />
                ))}
              </div>
              <div className="text-center text-sm text-gray-600">
                Copyright © 2025 High risk merchant .network All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;