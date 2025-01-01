import { useInView } from 'react-intersection-observer';
import { useCountAnimation } from '@/hooks/useCountAnimation';

const stats = [
  { number: 8, label: "Years in Business", suffix: "+" },
  { number: 500, label: "Worldwide Customers", suffix: "+" },
  { number: 30, label: "Currencies Accepted", suffix: "+" },
  { number: 25, label: "Technology Integrations", suffix: "+" },
  { number: 1, label: "Processed Annually", prefix: "$", suffix: "B+" },
  { number: 3, label: "Offices (USA, UK, UAE)" },
];

export const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="text-3xl font-bold text-primary mb-2">
            {inView && (
              <>
                {stat.prefix}
                {useCountAnimation(stat.number)}
                {stat.suffix}
              </>
            )}
          </div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};