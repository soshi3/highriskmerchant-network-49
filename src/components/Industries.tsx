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
import { Link } from "react-router-dom";

export const industries = [
  { icon: ShoppingBag, name: "Adult", description: "Adult entertainment industry payment processing solutions with high approval rates and competitive rates." },
  { icon: Plane, name: "Airline Booking", description: "Secure payment processing for airline and travel booking businesses." },
  { icon: Gavel, name: "Auction Houses", description: "Specialized merchant accounts for auction houses and bidding platforms." },
  { icon: Car, name: "Automotive", description: "Payment solutions for automotive sales, parts, and services." },
  { icon: Search, name: "Background Checks", description: "Reliable payment processing for background screening services." },
  { icon: BadgeAlert, name: "Bad Credit Repair", description: "Merchant accounts for credit repair and financial services." },
  { icon: Binary, name: "Binary Option Trading", description: "Secure processing for binary options trading platforms." },
  { icon: Briefcase, name: "Business Consulting", description: "Payment solutions for consulting and professional services." },
  { icon: Building2, name: "Business Opportunities", description: "Merchant accounts for business opportunity ventures." },
  { icon: Cannabis, name: "CBD Oil", description: "Specialized processing for CBD and hemp-based products." },
  { icon: Coins, name: "Coins Collectibles", description: "Payment processing for collectible coins and memorabilia." },
  { icon: Phone, name: "Collection Agency", description: "Merchant accounts for debt collection agencies." },
  { icon: Repeat2, name: "Continuity Billing", description: "Solutions for subscription and recurring billing businesses." },
  { icon: BookOpen, name: "Credit Education Repaid", description: "Processing for credit education and repair services." },
  { icon: LineChart, name: "Credit Monitoring", description: "Payment solutions for credit monitoring services." },
  { icon: Bitcoin, name: "Crypto Currency", description: "Merchant accounts for cryptocurrency exchanges and services." },
  { icon: Heart, name: "Dating", description: "Payment processing for online dating and matchmaking services." },
  { icon: PiggyBank, name: "Debt Settlement", description: "Solutions for debt settlement and financial services." },
  { icon: FileText, name: "Document Preparation", description: "Processing for document preparation services." },
  { icon: Trophy, name: "Fantasy Sports", description: "Merchant accounts for fantasy sports platforms." },
  { icon: Landmark, name: "Fintech", description: "Payment solutions for financial technology companies." },
  { icon: Sword, name: "Firearms", description: "Specialized processing for firearms and ammunition sales." },
  { icon: TrendingUp, name: "Forex Platforms", description: "Merchant accounts for forex trading platforms." },
  { icon: Wine, name: "Gentlemen's Clubs", description: "Payment processing for adult entertainment venues." },
  { icon: Smile, name: "Health Beauty", description: "Solutions for health and beauty products and services." },
  { icon: Paintbrush, name: "High Ticket Coating", description: "Processing for high-ticket coating and finishing services." },
  { icon: BarChart3, name: "High Volume", description: "Merchant accounts for high-volume transactions." },
  { icon: Shield, name: "Hippa Compliant", description: "HIPAA-compliant payment processing solutions." },
  { icon: Ban, name: "Insurance Premium Financing", description: "Processing for insurance premium financing." },
  { icon: Calculator, name: "Investment Advisory", description: "Payment solutions for investment advisory services." },
  { icon: Repeat2, name: "Investment Recovery", description: "Merchant accounts for investment recovery services." },
  { icon: Pill, name: "Male Enhancement", description: "Processing for male enhancement products." },
  { icon: SendHorizontal, name: "Money Transfer", description: "Solutions for money transfer and remittance services." },
  { icon: Network, name: "Multi Level Marketing", description: "Payment processing for MLM businesses." },
  { icon: Home, name: "Nonprofit", description: "Merchant accounts for nonprofit organizations." },
  { icon: Beaker, name: "Nutraceuticals", description: "Processing for nutraceutical and supplement sales." },
  { icon: Dice1, name: "Online Gamble", description: "Solutions for online gambling and gaming platforms." },
  { icon: Store, name: "Pawn Shops", description: "Payment processing for pawn shops." },
  { icon: DollarSign, name: "Payday Lenders", description: "Merchant accounts for payday lending services." },
  { icon: Building, name: "Franchise", description: "Payment solutions for franchise businesses." },
  { icon: Users, name: "Peer to Peer Lending", description: "Processing for P2P lending platforms." },
  { icon: Stethoscope, name: "Pharmacy", description: "Solutions for pharmacy and medication sales." },
  { icon: GemIcon, name: "Previous Metals Jewelry", description: "Merchant accounts for precious metals and jewelry." },
  { icon: Building2, name: "Property Management", description: "Payment processing for property management companies." },
  { icon: UtensilsCrossed, name: "Restaurant", description: "Solutions for restaurant and food service businesses." },
  { icon: ShoppingCart, name: "Shopping Membership", description: "Processing for shopping membership programs." },
  { icon: Gamepad2, name: "Skill Based Gaming", description: "Merchant accounts for skill-based gaming platforms." },
  { icon: Sparkles, name: "Skin Hair Care", description: "Payment solutions for skin and hair care products." },
  { icon: Users, name: "Social Gaming", description: "Processing for social gaming platforms." },
  { icon: Package, name: "Subscription Box", description: "Solutions for subscription box services." },
  { icon: Gift, name: "Sweepstakes", description: "Merchant accounts for sweepstakes and contests." },
  { icon: HeadphonesIcon, name: "Tech Support", description: "Payment processing for tech support services." },
  { icon: Stethoscope, name: "Telemedicine", description: "Solutions for telemedicine and healthcare services." },
  { icon: LineChart, name: "Trading Platforms", description: "Processing for trading platform businesses." },
  { icon: PlaneTakeoff, name: "Travel", description: "Merchant accounts for travel and tourism businesses." },
  { icon: Cigarette, name: "Vape", description: "Payment solutions for vape and e-cigarette sales." },
  { icon: Globe, name: "Web Design SEO", description: "Processing for web design and SEO services." },
];

export const Industries = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {industries.map((industry) => (
        <Link
          to={`/industry/${industry.name.toLowerCase().replace(/\s+/g, '-')}`}
          key={industry.name}
          className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
        >
          <industry.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
          <h3 className="font-medium text-sm">{industry.name}</h3>
        </Link>
      ))}
    </div>
  );
};