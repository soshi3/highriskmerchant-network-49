import { useInView } from 'react-intersection-observer';
import { useCountAnimation } from '@/hooks/useCountAnimation';

const stats = [
  { number: 8, label: "年の実績", suffix: "+" },
  { number: 500, label: "世界中の顧客数", suffix: "+" },
  { number: 30, label: "対応通貨数", suffix: "+" },
  { number: 25, label: "技術統合数", suffix: "+" },
  { number: 1, label: "年間取引額", prefix: "$", suffix: "B+" },
  { number: 3, label: "拠点（米国、英国、UAE）" },
];

const StatItem = ({ stat, isVisible }: { stat: typeof stats[0], isVisible: boolean }) => {
  const animatedValue = useCountAnimation(isVisible ? stat.number : 0);

  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-primary mb-2">
        {stat.prefix}
        {animatedValue}
        {stat.suffix}
      </div>
      <div className="text-sm text-gray-600">{stat.label}</div>
    </div>
  );
};

export const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px',
  });

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
      {stats.map((stat) => (
        <StatItem key={stat.label} stat={stat} isVisible={inView} />
      ))}
    </div>
  );
};