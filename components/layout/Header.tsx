"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RiInstagramFill, RiFacebookFill } from "@remixicon/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Account for fixed header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navItems = [
    { name: "ホーム", href: "home" },
    { name: "会社概要", href: "about" },
    { name: "営業品目", href: "services" },
    { name: "お問い合わせ", href: "contact" },
  ];

  const socialLinks = [
    {
      href: "https://www.instagram.com/enukei7515/#",
      icon: RiInstagramFill,
      label: "Instagram",
    },
    {
      href: "https://www.facebook.com/profile.php?id=61575038131042",
      icon: RiFacebookFill,
      label: "Facebook",
    },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm border-b border-primary/10"
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              有限会社エヌ・ケー
            </button>
            <div className="hidden md:flex items-center gap-4">
              <TooltipProvider>
                {socialLinks.map((social) => (
                  <Tooltip key={social.label}>
                    <TooltipTrigger asChild>
                      <motion.a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="flex items-center justify-center w-8 h-8 text-[#F48024] hover:bg-[#F48024]/10 hover:text-[#F48024] rounded-full transition-all duration-300 hover:scale-110"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <social.icon size={22} />
                      </motion.a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{social.label}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-600 hover:text-primary transition-colors cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="border-l border-primary/20">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => {
                        scrollToSection(item.href);
                        const closeButton = document.querySelector('[data-radix-collection-item]');
                        if (closeButton instanceof HTMLElement) {
                          closeButton.click();
                        }
                      }}
                      className="text-lg text-left text-gray-600 hover:text-primary transition-colors"
                    >
                      {item.name}
                    </button>
                  ))}
                  <div className="flex gap-4 mt-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="flex items-center justify-center w-8 h-8 text-[#F48024] hover:bg-[#F48024]/10 hover:text-[#F48024] rounded-full transition-all duration-300"
                      >
                        <social.icon size={22} />
                      </a>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;