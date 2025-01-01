const stats = [
  { number: "8+", label: "Years in Business" },
  { number: "500+", label: "Worldwide Customers" },
  { number: "30+", label: "Currencies Accepted" },
  { number: "25+", label: "Technology Integrations" },
  { number: "$1B+", label: "Processed Annually" },
  { number: "3", label: "Offices (USA, UK, UAE)" },
];

export const Stats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};