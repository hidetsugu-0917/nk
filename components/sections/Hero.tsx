"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Image from "next/image";

const Hero = () => {
  return (
    <AuroraBackground className="bg-transparent min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 1.5,
          ease: "easeOut"
        }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="relative w-[500px] h-[500px] md:w-[750px] md:h-[750px]">
          <Image
            src="https://www.dropbox.com/scl/fi/1u2ec4qrk4h6sftz68et5/logo_transparent.png?rlkey=msx04hre5r6qw5o9gw9720y8m&raw=1"
            alt="NK Corporation Logo"
            fill
            className="object-contain"
            priority
            quality={100}
            sizes="(max-width: 768px) 500px, 750px"
            style={{
              filter: 'none',
              opacity: 0.9,
              imageRendering: 'auto',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale'
            }}
          />
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-12 right-12 text-right z-10"
      >
        <h1 className="text-2xl md:text-3xl font-bold mb-2 tracking-wide text-black font-montserrat">
          Built on Precision. Delivering Trust.
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          長年の経験と信頼で、確実・安心の調査と施工
        </p>
      </motion.div>
    </AuroraBackground>
  );
};

export default Hero;