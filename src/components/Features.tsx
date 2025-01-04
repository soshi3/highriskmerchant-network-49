import { Shield, Zap, Headphones, Activity } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "セキュアな処理",
    description: "ハイリスクビジネス向けの高度な不正防止と安全な決済処理",
  },
  {
    icon: Zap,
    title: "迅速な統合",
    description: "既存のシステムやプラットフォームとの素早く簡単な統合",
  },
  {
    icon: Headphones,
    title: "専門家のサポート",
    description: "ハイリスク処理をナビゲートする専門家チームのサポート",
  },
  {
    icon: Activity,
    title: "24時間監視",
    description: "継続的な取引監視とリスク管理",
  },
];

export const Features = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature) => (
        <div key={feature.title} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <feature.icon className="h-10 w-10 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};