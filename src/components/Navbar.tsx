import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-xl font-bold text-primary">
              ハイリスク マーチャント ネットワーク
            </a>
            <div className="hidden md:flex space-x-6">
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="default" size="lg">
              お問い合わせ
            </Button>
            <button className="md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};