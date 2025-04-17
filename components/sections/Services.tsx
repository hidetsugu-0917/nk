"use client";

import { motion } from "framer-motion";
import { Building, Ruler, HardHat, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Building,
    title: "建築測量",
    description: [
      "建築計画事前測量",
      "準備工事・躯体基準墨出し",
      "仕上墨出し"
    ],
  },
  {
    icon: Ruler,
    title: "土木測量",
    description: [
      "起工測量・各種丁張",
      "基準点測量・現況測量",
      "用地測量"
    ],
  },
  {
    icon: HardHat,
    title: "建築工事",
    description: [
      "建築工事全般",
      "土木工事",
      "建築請負工事"
    ],
  },
  {
    icon: Users,
    title: "管理者派遣",
    description: [
      "現場管理代行",
      "施工図",
      "工事写真展",
      "調査書類"
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">営業品目</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            建築測量から土木測量まで、幅広い分野でお客様のニーズにお応えします。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="h-full border-primary/20 shadow-lg hover:border-accent/50 transition-colors duration-300">
                <CardContent className="p-6 text-center">
                  <service.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-4 text-primary">{service.title}</h3>
                  <ul className="text-gray-600 space-y-2">
                    {service.description.map((item, i) => (
                      <li key={i} className="pb-2 last:pb-0">{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;