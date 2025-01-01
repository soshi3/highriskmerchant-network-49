import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

export const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form submitted!",
      description: "We'll get back to you soon.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <Input placeholder="Name*" required />
      <Input type="tel" placeholder="Phone Number" />
      <Input type="email" placeholder="Email*" required />
      <Input placeholder="Website URL" />
      <Textarea placeholder="Comment" className="min-h-[100px]" />
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  );
};