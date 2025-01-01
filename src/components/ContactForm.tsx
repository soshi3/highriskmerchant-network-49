import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    website: "",
    comment: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log('Submitting form data:', formData);

      const response = await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log('Server response:', data);

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send email');
      }

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
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
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again later.",
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
        {isSubmitting ? "Sending..." : "Submit"}
      </Button>
    </form>
  );
};