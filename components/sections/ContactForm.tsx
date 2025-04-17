"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(1, "お名前を入力してください"),
  phone: z.string().min(1, "電話番号を入力してください"),
  email: z.string().email("正しいメールアドレスを入力してください"),
  message: z.string().min(1, "お問い合わせ内容を入力してください"),
});

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    try {
      contactFormSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xleqgwrw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          _replyto: formData.email,
          _subject: "【NK Corporation】ウェブサイトからのお問い合わせ"
        }),
      });

      if (!response.ok) {
        throw new Error('送信に失敗しました');
      }

      toast.success("送信完了しました");
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error("エラーが発生しました。もう一度お試しください。");
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2 text-primary">
          お名前 <span className="text-accent">*</span>
        </label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`bg-white border-primary/20 focus:border-accent ${
            errors.name ? 'border-red-500' : ''
          }`}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
        )}
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2 text-primary">
          電話番号 <span className="text-accent">*</span>
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={`bg-white border-primary/20 focus:border-accent ${
            errors.phone ? 'border-red-500' : ''
          }`}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
        )}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2 text-primary">
          メールアドレス <span className="text-accent">*</span>
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={`bg-white border-primary/20 focus:border-accent ${
            errors.email ? 'border-red-500' : ''
          }`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-primary">
          お問い合わせ内容 <span className="text-accent">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={5}
          className={`bg-white border-primary/20 focus:border-accent ${
            errors.message ? 'border-red-500' : ''
          }`}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
        )}
      </div>
      <Button 
        type="submit" 
        className="w-full bg-primary hover:bg-primary/90 text-white transition-colors duration-300"
        disabled={isSubmitting}
      >
        {isSubmitting ? "送信中..." : "送信する"}
      </Button>
    </form>
  );
};