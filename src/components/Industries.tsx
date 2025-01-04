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
  { icon: ShoppingBag, name: "アダルト", description: "アダルトエンターテインメント業界向けの高承認率と競争力のある料率の決済処理ソリューション" },
  { icon: Plane, name: "航空券予約", description: "航空会社と旅行予約ビジネス向けの安全な決済処理" },
  { icon: Gavel, name: "オークションハウス", description: "オークションハウスと入札プラットフォーム向けの専門的な加盟店口座" },
  { icon: Car, name: "自動車", description: "自動車販売、部品、サービス向けの決済ソリューション" },
  { icon: Search, name: "身元調査", description: "身元調査サービス向けの信頼性の高い決済処理" },
  { icon: BadgeAlert, name: "信用回復", description: "信用回復と金融サービス向けの加盟店口座" },
  { icon: Binary, name: "バイナリーオプション", description: "バイナリーオプション取引プラットフォーム向けの安全な処理" },
  { icon: Briefcase, name: "ビジネスコンサルティング", description: "コンサルティングと専門サービス向けの決済ソリューション" },
  { icon: Building2, name: "ビジネス機会", description: "ビジネス機会ベンチャー向けの加盟店口座" },
  { icon: Cannabis, name: "CBDオイル", description: "CBDと麻製品向けの専門的な処理" },
  { icon: Coins, name: "コイン収集", description: "収集用コインと記念品向けの決済処理" },
  { icon: Phone, name: "債権回収", description: "債権回収機関向けの加盟店口座" },
  { icon: Repeat2, name: "継続課金", description: "サブスクリプションと定期課金ビジネス向けのソリューション" },
  { icon: BookOpen, name: "信用教育", description: "信用教育と修復サービス向けの処理" },
  { icon: LineChart, name: "信用モニタリング", description: "信用モニタリングサービス向けの決済ソリューション" },
  { icon: Bitcoin, name: "暗号通貨", description: "暗号通貨取引所とサービス向けの加盟店口座" },
  { icon: Heart, name: "出会い系", description: "オンラインデートとマッチングサービス向けの決済処理" },
  { icon: PiggyBank, name: "債務整理", description: "債務整理と金融サービス向けのソリューション" },
  { icon: FileText, name: "書類作成", description: "書類作成サービス向けの処理" },
  { icon: Trophy, name: "ファンタジースポーツ", description: "ファンタジースポーツプラットフォーム向けの加盟店口座" },
  { icon: Landmark, name: "フィンテック", description: "金融テクノロジー企業向けの決済ソリューション" },
  { icon: Sword, name: "銃器", description: "銃器と弾薬販売向けの専門的な処理" },
  { icon: TrendingUp, name: "外国為替", description: "外国為替取引プラットフォーム向けの加盟店口座" },
  { icon: Wine, name: "ナイトクラブ", description: "アダルトエンターテインメント会場向けの決済処理" },
  { icon: Smile, name: "健康美容", description: "健康・美容製品とサービス向けのソリューション" },
  { icon: Paintbrush, name: "高額コーティング", description: "高額コーティングと仕上げサービス向けの処理" },
  { icon: BarChart3, name: "大量取引", description: "大量取引向けの加盟店口座" },
  { icon: Shield, name: "HIPAA準拠", description: "HIPAA準拠の決済処理ソリューション" },
  { icon: Ban, name: "保険料ファイナンス", description: "保険料ファイナンス向けの処理" },
  { icon: Calculator, name: "投資顧問", description: "投資顧問サービス向けの決済ソリューション" },
  { icon: Repeat2, name: "投資回収", description: "投資回収サービス向けの加盟店口座" },
  { icon: Pill, name: "男性向け健康食品", description: "男性向け健康食品向けの処理" },
  { icon: SendHorizontal, name: "送金", description: "送金と海外送金サービス向けのソリューション" },
  { icon: Network, name: "マルチレベルマーケティング", description: "MLMビジネス向けの決済処理" },
  { icon: Home, name: "非営利団体", description: "非営利団体向けの加盟店口座" },
  { icon: Beaker, name: "栄養補助食品", description: "栄養補助食品とサプリメント販売向けの処理" },
  { icon: Dice1, name: "オンラインギャンブル", description: "オンラインギャンブルとゲームプラットフォーム向けのソリューション" },
  { icon: Store, name: "質屋", description: "質屋向けの決済処理" },
  { icon: DollarSign, name: "給与前貸し", description: "給与前貸しサービス向けの加盟店口座" },
  { icon: Building, name: "フランチャイズ", description: "フランチャイズビジネス向けの決済ソリューション" },
  { icon: Users, name: "P2Pレンディング", description: "P2Pレンディングプラットフォーム向けの処理" },
  { icon: Stethoscope, name: "薬局", description: "薬局と医薬品販売向けのソリューション" },
  { icon: GemIcon, name: "貴金属・宝飾品", description: "貴金属と宝飾品向けの加盟店口座" },
  { icon: Building2, name: "不動産管理", description: "不動産管理会社向けの決済処理" },
  { icon: UtensilsCrossed, name: "レストラン", description: "レストランと飲食サービス向けのソリューション" },
  { icon: ShoppingCart, name: "ショッピング会員", description: "ショッピング会員プログラム向けの処理" },
  { icon: Gamepad2, name: "スキルゲーム", description: "スキルベースのゲームプラットフォーム向けの加盟店口座" },
  { icon: Sparkles, name: "スキンケア・ヘアケア", description: "スキンケアとヘアケア製品向けの決済ソリューション" },
  { icon: Users, name: "ソーシャルゲーム", description: "ソーシャルゲームプラットフォーム向けの処理" },
  { icon: Package, name: "サブスクリプションボックス", description: "サブスクリプションボックスサービス向けのソリューション" },
  { icon: Gift, name: "懸賞", description: "懸賞とコンテスト向けの加盟店口座" },
  { icon: HeadphonesIcon, name: "テクニカルサポート", description: "テクニカルサポートサービス向けの決済処理" },
  { icon: Stethoscope, name: "遠隔医療", description: "遠隔医療とヘルスケアサービス向けのソリューション" },
  { icon: LineChart, name: "取引プラットフォーム", description: "取引プラットフォームビジネス向けの処理" },
  { icon: PlaneTakeoff, name: "旅行", description: "旅行と観光ビジネス向けの加盟店口座" },
  { icon: Cigarette, name: "電子タバコ", description: "電子タバコと関連製品販売向けの決済ソリューション" },
  { icon: Globe, name: "ウェブデザイン・SEO", description: "ウェブデザインとSEOサービス向けの処理" },
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