import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

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
    
    // Form validation
    const form = e.target as HTMLFormElement;
    const nameInput = form.querySelector('input[name="name"]') as HTMLInputElement;
    const emailInput = form.querySelector('input[name="email"]') as HTMLInputElement;
    
    let isValid = true;

    // Validate name
    if (!formData.name.trim()) {
      nameInput.setCustomValidity("Please enter your name");
      isValid = false;
    } else {
      nameInput.setCustomValidity("");
    }

    // Validate email
    if (!formData.email.trim()) {
      emailInput.setCustomValidity("Please enter your email address");
      isValid = false;
    } else if (!emailInput.validity.valid) {
      emailInput.setCustomValidity("Please enter a valid email address");
      isValid = false;
    } else {
      emailInput.setCustomValidity("");
    }

    // Show validation messages
    if (!isValid) {
      if (!formData.name.trim()) {
        nameInput.reportValidity();
      }
      if (!formData.email.trim() || !emailInput.validity.valid) {
        emailInput.reportValidity();
      }
      return;
    }

    setIsSubmitting(true);
    
    try {
      console.log('Submitting form data:', formData);

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      let responseData;
      const responseText = await response.text();
      console.log('Raw response:', responseText);
      
      try {
        responseData = responseText ? JSON.parse(responseText) : {};
      } catch (parseError) {
        console.error('Error parsing response:', parseError);
        throw new Error('Invalid server response');
      }

      console.log('Parsed server response:', responseData);

      if (!response.ok) {
        throw new Error(
          responseData.error || 
          responseData.details || 
          responseData.message || 
          `Server error: ${response.status}`
        );
      }

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });
      
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
    <form 
      onSubmit={handleSubmit} 
      className="space-y-4 w-full max-w-md"
      noValidate
    >
      <Input 
        placeholder="Name*" 
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        aria-label="Name"
      />
      <Input 
        type="tel" 
        placeholder="Phone Number" 
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        aria-label="Phone Number"
      />
      <Input 
        type="email" 
        placeholder="Email*" 
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        aria-label="Email"
      />
      <Input 
        placeholder="Website URL" 
        name="website"
        value={formData.website}
        onChange={handleChange}
        aria-label="Website URL"
      />
      <Textarea 
        placeholder="Comment" 
        name="comment"
        value={formData.comment}
        onChange={handleChange}
        className="min-h-[100px]"
        aria-label="Comment"
      />
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Submit"}
      </Button>
    </form>
  );
};