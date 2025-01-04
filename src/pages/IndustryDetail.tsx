import { useParams, Link } from "react-router-dom";
import { industries } from "@/components/Industries";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { Navbar } from "@/components/Navbar";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";

// 業界別のSEOコンテンツを定義
const industrySeoContent: { [key: string]: string } = {
  "subscription-box": `サブスクリプションボックスビジネスの決済処理において、セキュリティと効率性は最も重要な要素です。
  当社の決済ソリューションは、自動定期課金、顧客データの暗号化、不正検知システムを備え、
  サブスクリプションビジネスの成長をサポートします。コンプライアンス準拠の決済システムにより、
  顧客満足度の向上とビジネス拡大を実現します。`,
  "adult": `アダルトエンターテインメント業界向けにカスタマイズされた決済ソリューションを提供します。
  高度なセキュリティ基準と規制遵守に重点を置き、スムーズな取引処理を実現します。
  チャージバック防止と不正防止機能を備えたシステムで、安全な決済環境を構築します。`,
  "airline-booking": `航空券予約システム専用の決済処理ソリューションを提供します。
  リアルタイム予約確認、多通貨対応、安全な決済処理により、
  航空会社と旅行代理店の業務を効率化します。`,
  // ... その他の業界も同様に追加可能
};

const IndustryDetail = () => {
  const { industryName } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [industryName]);
  
  const industry = industries.find(
    (ind) => ind.name.toLowerCase().replace(/\s+/g, '-') === industryName
  );

  if (!industry) {
    return (
      <div className="min-h-screen bg-secondary">
        <Navbar />
        <div className="container mx-auto px-4 pt-32">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">業界が見つかりません</h1>
            <Link to="/">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                ホームに戻る
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const seoContent = industrySeoContent[industryName || ''] || `${industry.name}業界向けにカスタマイズされた決済ソリューションを提供します。
    高度なセキュリティ対策と効率的な取引処理システムで、ビジネスの成長をサポートします。
    24時間365日のサポートと豊富な業界経験に裏打ちされたサービスを提供します。`;

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
            業界一覧に戻る
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

              <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">{industry.name}向け決済ソリューション</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {seoContent}
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">なぜ当社の{industry.name}決済処理を選ぶのか</h2>
                  <div className="grid gap-4">
                    {[
                      `${industry.name}ビジネス向けに特化したハイリスク加盟店口座`,
                      "競争力のある料率と柔軟な支払い条件",
                      "高度な不正防止とリスク管理",
                      "24時間365日のカスタマーサポートと専任アカウントマネージャー",
                      "迅速な審査プロセスと素早いアカウント設定",
                      "複数通貨対応とグローバル決済処理"
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
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">当社の{industry.name}ソリューションの特徴</h2>
                  <div className="grid gap-4">
                    {[
                      "安全な決済ゲートウェイ統合",
                      "チャージバック防止と管理",
                      "マルチカレンシー処理機能",
                      "定期課金とサブスクリプション管理",
                      "PCI DSS準拠サポート",
                      "リアルタイム取引監視"
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
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">{industry.name}の決済処理を始める</h2>
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