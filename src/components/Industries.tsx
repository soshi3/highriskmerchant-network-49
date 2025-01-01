import { ShoppingBag, Plane, Gavel, Pencil, Globe, ShieldCheck } from "lucide-react";

const industries = [
  { icon: ShoppingBag, name: "Adult" },
  { icon: Plane, name: "Airline Booking" },
  { icon: Gavel, name: "Auction Houses" },
  { icon: Globe, name: "Web Design" },
  { icon: ShieldCheck, name: "Security" },
  { icon: Pencil, name: "SEO" },
];

export const Industries = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {industries.map((industry) => (
        <div
          key={industry.name}
          className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
        >
          <industry.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
          <h3 className="font-medium">{industry.name}</h3>
        </div>
      ))}
    </div>
  );
};