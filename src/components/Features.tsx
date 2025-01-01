import { Shield, Zap, Headphones, Activity } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure Processing",
    description: "Advanced fraud protection and secure payment processing for high-risk businesses",
  },
  {
    icon: Zap,
    title: "Fast Integration",
    description: "Quick and easy integration with your existing systems and platforms",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Dedicated team of experts to help you navigate high-risk processing",
  },
  {
    icon: Activity,
    title: "24/7 Monitoring",
    description: "Continuous transaction monitoring and risk management",
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