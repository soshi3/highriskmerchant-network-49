import { 
  ShoppingBag, Plane, Gavel, Car, Search, BadgeAlert, 
  Binary, Briefcase, Building2, Cannabis, Coins, Phone,
  CreditCard, BookOpen, LineChart, Bitcoin, Heart, 
  PiggyBank, FileText, Trophy, Landmark, Sword, 
  TrendingUp, Wine, Smile, Paintbrush, BarChart3,
  Shield, Ban, Calculator, Repeat2, Pill, SendHorizontal,
  Network, Home, Beaker, Dice1, Store, DollarSign,
  Stethoscope, GemIcon, Building, UtensilsCrossed,
  ShoppingCart, Gamepad2, Sparkles, Users, Package, 
  Gift, HeadphonesIcon, PlaneTakeoff, Cigarette, Globe
} from "lucide-react";

const industries = [
  { icon: ShoppingBag, name: "Adult" },
  { icon: Plane, name: "Airline Booking" },
  { icon: Gavel, name: "Auction Houses" },
  { icon: Car, name: "Automotive" },
  { icon: Search, name: "Background Checks" },
  { icon: BadgeAlert, name: "Bad Credit Repair" },
  { icon: Binary, name: "Binary Option Trading" },
  { icon: Briefcase, name: "Business Consulting" },
  { icon: Building2, name: "Business Opportunities" },
  { icon: Cannabis, name: "CBD Oil" },
  { icon: Coins, name: "Coins Collectibles" },
  { icon: Phone, name: "Collection Agency" },
  { icon: Repeat2, name: "Continuity Billing" },
  { icon: BookOpen, name: "Credit Education Repaid" },
  { icon: LineChart, name: "Credit Monitoring" },
  { icon: Bitcoin, name: "Crypto Currency" },
  { icon: Heart, name: "Dating" },
  { icon: PiggyBank, name: "Debt Settlement" },
  { icon: FileText, name: "Document Preparation" },
  { icon: Trophy, name: "Fantasy Sports" },
  { icon: Landmark, name: "Fintech" },
  { icon: Sword, name: "Firearms" },
  { icon: TrendingUp, name: "Forex Platforms" },
  { icon: Wine, name: "Gentlemen's Clubs" },
  { icon: Smile, name: "Health Beauty" },
  { icon: Paintbrush, name: "High Ticket Coating" },
  { icon: BarChart3, name: "High Volume" },
  { icon: Shield, name: "Hippa Compliant" },
  { icon: Ban, name: "Insurance Premium Financing" },
  { icon: Calculator, name: "Investment Advisory" },
  { icon: Repeat2, name: "Investment Recovery" },
  { icon: Pill, name: "Male Enhancement" },
  { icon: SendHorizontal, name: "Money Transfer" },
  { icon: Network, name: "Multi Level Marketing" },
  { icon: Home, name: "Nonprofit" },
  { icon: Beaker, name: "Nutraceuticals" },
  { icon: Dice1, name: "Online Gamble" },
  { icon: Store, name: "Pawn Shops" },
  { icon: DollarSign, name: "Payday Lenders" },
  { icon: Building, name: "Franchise" },
  { icon: Users, name: "Peer to Peer Lending" },
  { icon: Stethoscope, name: "Pharmacy" },
  { icon: GemIcon, name: "Previous Metals Jewelry" },
  { icon: Building2, name: "Property Management" },
  { icon: UtensilsCrossed, name: "Restaurant" },
  { icon: ShoppingCart, name: "Shopping Membership" },
  { icon: Gamepad2, name: "Skill Based Gaming" },
  { icon: Sparkles, name: "Skin Hair Care" },
  { icon: Users, name: "Social Gaming" },
  { icon: Package, name: "Subscription Box" },
  { icon: Gift, name: "Sweepstakes" },
  { icon: HeadphonesIcon, name: "Tech Support" },
  { icon: Stethoscope, name: "Telemedicine" },
  { icon: LineChart, name: "Trading Platforms" },
  { icon: PlaneTakeoff, name: "Travel" },
  { icon: Cigarette, name: "Vape" },
  { icon: Globe, name: "Web Design SEO" },
];

export const Industries = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {industries.map((industry) => (
        <div
          key={industry.name}
          className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
        >
          <industry.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
          <h3 className="font-medium text-sm">{industry.name}</h3>
        </div>
      ))}
    </div>
  );
};