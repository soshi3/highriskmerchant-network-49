import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    website: "",
    comment: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "amllimitedhk@gmail.com",
          subject: "New Contact Form Submission",
          ...formData
        }),
      });

      if (!response.ok) throw new Error("Failed to send email");

      toast({
        title: "Form submitted successfully!",
        description: "We'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        website: "",
        comment: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <Input 
        placeholder="Name*" 
        name="name"
        value={formData.name}
        onChange={handleChange}
        required 
      />
      <Input 
        type="tel" 
        placeholder="Phone Number" 
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <Input 
        type="email" 
        placeholder="Email*" 
        name="email"
        value={formData.email}
        onChange={handleChange}
        required 
      />
      <Input 
        placeholder="Website URL" 
        name="website"
        value={formData.website}
        onChange={handleChange}
      />
      <Textarea 
        placeholder="Comment" 
        name="comment"
        value={formData.comment}
        onChange={handleChange}
        className="min-h-[100px]" 
      />
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
};