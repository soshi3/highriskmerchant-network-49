import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  name: z.string()
    .min(2, { message: "名前は2文字以上で入力してください。" })
    .regex(/^[a-zA-Z\s]*$/, { message: "名前には英字とスペースのみ使用できます。" }),
  email: z.string().email({ message: "無効なメールアドレスです。" }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "メッセージは10文字以上で入力してください。" }),
});

export const ContactForm = () => {
  const { toast } = useToast();
  const { industryName } = useParams();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log("フォームの送信値:", values);
      
      const { data: { user } } = await supabase.auth.getUser();
      
      const { data, error } = await supabase.functions.invoke('send-email', {
        body: JSON.stringify({
          ...values,
          industry: industryName,
          userId: user?.id,
        }),
      });

      if (error) {
        console.error("エッジ関数からのエラー:", error);
        throw new Error(error.message || "メッセージの送信に失敗しました");
      }

      console.log("成功レスポンス:", data);

      toast({
        title: "成功！",
        description: "メッセージが送信されました。まもなくご連絡いたします。",
      });

      form.reset();
    } catch (error: any) {
      console.error("メッセージ送信エラー:", error);
      
      const errorMessage = error.message?.includes('NetworkError') 
        ? "サーバーに接続できません。インターネット接続を確認して再試行してください。"
        : "メッセージの送信に失敗しました。後でもう一度お試しください。";
      
      toast({
        variant: "destructive",
        title: "エラー",
        description: errorMessage,
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>お名前</FormLabel>
              <FormControl>
                <Input placeholder="山田 太郎" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>メールアドレス</FormLabel>
              <FormControl>
                <Input placeholder="yamada@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>電話番号（任意）</FormLabel>
              <FormControl>
                <Input placeholder="090-1234-5678" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>メッセージ</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="ビジネスニーズについてお聞かせください..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          メッセージを送信
        </Button>
      </form>
    </Form>
  );
};