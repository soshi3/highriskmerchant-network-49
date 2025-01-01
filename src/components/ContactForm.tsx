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
      // Save form data to localStorage
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      submissions.push({
        ...formData,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

      console.log('Form data saved:', formData);

      toast({
        title: "お問い合わせを受け付けました",
        description: "内容を確認次第、ご連絡させていただきます。",
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
      console.error("Error saving form data:", error);
      toast({
        title: "エラー",
        description: "送信に失敗しました。後ほど再度お試しください。",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <Input 
        placeholder="お名前*" 
        name="name"
        value={formData.name}
        onChange={handleChange}
        required 
      />
      <Input 
        type="tel" 
        placeholder="電話番号" 
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <Input 
        type="email" 
        placeholder="メールアドレス*" 
        name="email"
        value={formData.email}
        onChange={handleChange}
        required 
      />
      <Input 
        placeholder="ウェブサイトURL" 
        name="website"
        value={formData.website}
        onChange={handleChange}
      />
      <Textarea 
        placeholder="お問い合わせ内容" 
        name="comment"
        value={formData.comment}
        onChange={handleChange}
        className="min-h-[100px]" 
      />
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "送信中..." : "送信"}
      </Button>
    </form>
  );
};