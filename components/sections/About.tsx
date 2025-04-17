"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/sections/ContactForm";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">会社概要</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            平成9年(1997年)の設立以来、建築測量のプロフェッショナルとして、<br />
            お客様のニーズに応えてまいりました。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-primary/20 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">代表取締役メッセージ</h3>
                <p className="text-gray-600 leading-relaxed">
                  <span className="text-[#F48024]">有限会社エヌ・ケー</span>は、創業以来、建設現場の墨出し業務を中心に、地域のものづくりの最前線を支えてまいりました。<br />
                  現在では、墨出しにとどまらず、<span className="text-[#F48024]">土木測量</span>・インフラ整備に関わる<span className="text-[#F48024]">測量業務</span>全般にも取り組み、事業領域を広げています。<br /><br />
                  私たちの仕事は、どんな建物や道路、インフラ整備でも「はじまりをつくる」こと。<br />
                  図面だけでは見えない現場に、正確なラインと基準を描き、次に携わるすべての業者様が安心して施工できる環境を整えることが、私たちの使命です。<br /><br />
                  また、インフラ整備に携わる<span className="text-[#F48024]">測量業務</span>を通じて、地域の暮らしや未来の景色を支えていることを、私たちは誇りに思っています。<br /><br />
                  これからも、「正確さ」「丁寧さ」「納期遵守」を大切に、社員一同、技術を磨き、信頼に応える仕事を続けてまいります。<br /><br />
                  <span className="text-[#F48024]">測量</span>に関するご相談は、ぜひ<span className="text-[#F48024]">有限会社エヌ・ケー</span>へ。<br />
                  私たちは、現場の"はじまり"を、誠実に、確実に、支えます。
                </p>
                <p className="text-right mt-4 font-semibold text-primary">
                  代表取締役 中田 智尚
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Card className="border-primary/20 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">会社情報</h3>
                <dl className="space-y-4">
                  <div className="flex gap-4 border-b border-primary/10 pb-2">
                    <dt className="font-semibold min-w-[100px] text-primary">会社名</dt>
                    <dd>有限会社エヌ・ケー</dd>
                  </div>
                  <div className="flex gap-4 border-b border-primary/10 pb-2">
                    <dt className="font-semibold min-w-[100px] text-primary">所在地</dt>
                    <dd>〒683-0103 鳥取県米子市富益町75-15</dd>
                  </div>
                  <div className="flex gap-4 border-b border-primary/10 pb-2">
                    <dt className="font-semibold min-w-[100px] text-primary">資本金</dt>
                    <dd>5,000,000円</dd>
                  </div>
                  <div className="flex gap-4 border-b border-primary/10 pb-2">
                    <dt className="font-semibold min-w-[100px] text-primary">代表者</dt>
                    <dd>中田 智尚</dd>
                  </div>
                  <div className="flex gap-4 border-b border-primary/10 pb-2">
                    <dt className="font-semibold min-w-[100px] text-primary">設立</dt>
                    <dd>1997年</dd>
                  </div>
                </dl>
                <div className="flex justify-end mt-4">
                  <img
                    src="https://www.dropbox.com/scl/fi/xyrczef3pwgxrxx84ham6/1212.jpeg?rlkey=6byrfitjwuuuqggn1qwy403dn&raw=1"
                    alt="NK Corporation Company Image"
                    className="w-full max-w-md rounded-lg shadow-md object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div id="contact" className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-primary/20 shadow-lg h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">アクセス</h3>
                <div className="mb-6">
                  <p className="text-gray-600 mb-2">〒683-0103 鳥取県米子市富益町75-15</p>
                  <p className="text-2xl font-bold text-primary mb-4">TEL: 0859-48-2023</p>
                  <a 
                    href="https://www.google.com/maps/place/%E6%9C%89%E9%99%90%E4%BC%9A%E7%A4%BE%E3%82%A8%E3%83%8C%E3%83%BB%E3%82%B1%E3%83%BC/@35.477294,133.286767,18z" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button className="bg-primary hover:bg-primary/90">
                      <MapPin className="w-4 h-4 mr-2" />
                      Googleマップで見る
                    </Button>
                  </a>
                </div>
                <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://www.dropbox.com/scl/fi/6hbaicpb43ee9egmyt49q/IMG_4819.PNG?rlkey=euof8bp7ilw1q4ljr6g2aa9qn&raw=1"
                    alt="NK Corporation Location Map"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-primary/20 shadow-lg h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">お問い合わせ</h3>
                <ContactForm />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;