"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    quote: "エヌ・ケーさんの測量技術は本当に正確で、工期も予定通りに進みました。プロフェッショナルな対応に感謝しています。",
    name: "田中 健一",
    designation: "建設会社 現場監督",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3540&auto=format&fit=crop",
  },
  {
    quote: "長年のお付き合いですが、いつも丁寧な仕事で安心してお任せできます。特に緊急の案件でも柔軟に対応していただき、大変助かっています。",
    name: "佐藤 美咲",
    designation: "不動産開発会社 マネージャー",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3540&auto=format&fit=crop",
  },
  {
    quote: "測量から施工まで一貫して対応していただけるので、とても効率的です。品質の高さと迅速な対応に満足しています。",
    name: "山田 太郎",
    designation: "建築設計事務所 代表",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50/50">
      <div className="container mx-auto">
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
};

export default Testimonials;