import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { Features } from "@/components/Features";
import { Industries } from "@/components/Industries";
import { Stats } from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";

const Index = () => {
  const [primaryColor, setPrimaryColor] = useState("#6E59A5");
  const topFormRef = useRef<HTMLDivElement>(null);

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

  const scrollToTopForm = () => {
    topFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-[var(--gradient-color)] to-[var(--primary-color)] opacity-90"></div>
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(ellipse_100%_100%_at_50%_-20%,var(--primary-color),transparent)] opacity-40"></div>
        </div>
        
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium">
                  8年の実績
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  ハイリスク マーチャントアカウント プロバイダー
                </h1>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-2">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">✓</div>
                    <div>
                      <div className="font-medium">99%の承認率</div>
                      <div className="text-sm text-gray-600">業界トップクラスの受け入れ率</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">✓</div>
                    <div>
                      <div className="font-medium">初期費用なし</div>
                      <div className="text-sm text-gray-600">すぐに取引開始可能</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:pl-12" ref={topFormRef}>
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
                ハイリスク マーチャントアカウント プロバイダー
              </h2>
              <p className="text-gray-600">
                当社は、ハイリスク業界向けのマーチャントアカウントサービスを専門とし、複雑な決済環境をスムーズにナビゲートするお手伝いをいたします。
              </p>
            </div>
            <Features />
            <div className="text-center mt-12">
              <Button size="lg" onClick={scrollToTopForm}>今すぐ始める</Button>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 bg-secondary" id="industries">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              対応するハイリスク業界
            </h2>
            <Industries />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">会社概要</h2>
            <Stats />
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[var(--secondary-color)] py-20 px-4">
          <div className="container mx-auto">
            <div className="flex flex-col items-center max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">始めてみませんか？</h2>
              <p className="text-gray-600 mb-8">
                リスクの高低に関わらず、迅速かつ簡単な承認をお約束します。様々な業界に対応し、サービスを提供しています。
              </p>
              <div className="w-full max-w-3xl mx-auto">
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
                    aria-label={`${name}テーマに切り替え`}
                  />
                ))}
              </div>
              <div className="text-center text-sm text-gray-600">
                Copyright © 2025 ハイリスク マーチャント ネットワーク All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;