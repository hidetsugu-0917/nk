"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RiFacebookFill, RiTwitterXFill, RiInstagramFill, RiLineFill } from "@remixicon/react";

const SocialMedia = () => {
  const socialLinks = [
    { icon: RiFacebookFill, label: "Facebook", href: "#" },
    { icon: RiTwitterXFill, label: "Twitter", href: "#" },
    { icon: RiInstagramFill, label: "Instagram", href: "#" },
    { icon: RiLineFill, label: "Line", href: "#" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="section-title mb-8">ソーシャルメディア</h2>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-12 h-12 rounded-full border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 text-primary" />
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMedia;