import { motion } from "framer-motion";
import { Send, Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import eagalImg from "@/assets/eagal.png";
import xImg from "@/assets/x.png";
import moneyImg from "@/assets/money.png";
import telegramImg from "@/assets/telegram.png";
import capsuleImg from "@/assets/capsule.png";

const socialLinks = [
  { icon: FaXTwitter,  img: null,        href: "https://x.com/galloponsol?s=11", label: "X" },
  { icon: Send,        img: null,        href: "https://t.me/GallopMainChat",    label: "Telegram" },
  { icon: null,        img: capsuleImg,  href: "#", label: "Capsule" },
  { icon: Instagram,   img: null,        href: "#", label: "Instagram" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center pt-24 pb-10 sm:pb-16 lg:pt-28 ">
      <div className="container mx-auto px-4 relative z-10 flex flex-col gap-10">

        {/* Text + button + social */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          <div className="space-y-6 text-center lg:text-left mt-12">
            <motion.h1
              className="font-display text-3xl md:text-6xl text-secondary text-shadow-blue leading-tight"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              $GALLOP
            </motion.h1>

            <motion.p
              className="font-display text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              The horse that never stops. Launched fair on Solana. Built by the community, run by the herd. $GALLOP &mdash; because the best memes don&apos;t walk, they gallop.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.a
                href="#"
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-secondary text-secondary-foreground font-display text-base sm:text-lg rounded-lg glow-blue hover:bg-secondary/90 transition-all inline-block"
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(43 96% 56% / 0.8)" }}
                whileTap={{ scale: 0.95 }}
              >
                BUY $GALLOP
              </motion.a>
            </motion.div>

            {/* Social icons */}
            <motion.div
              className="flex gap-3 sm:gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-muted/50 flex items-center justify-center text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  {social.img
                    ? <img src={social.img} alt={social.label} className="w-5 h-5 object-contain" />
                    : social.icon && <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  }
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Full-width image row — all 5 images, equal gaps */}
        {/* <motion.div
          className="w-full flex items-center justify-between gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          {[eagalImg, xImg, moneyImg, telegramImg, capsuleImg].map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt=""
              className="flex-1 h-14 sm:h-16 md:h-20 w-0 min-w-0 rounded-xl object-contain"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
            />
          ))}
        </motion.div> */}

        {/* <motion.div
          className="flex justify-center w-full m-8 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <span
            className="font-display text-3xl sm:text-4xl md:text-5xl tracking-[0.25em]"
            style={{
              background: "linear-gradient(90deg, #ffffff, #c0c0c0, #ffffff)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "none",
              filter: "drop-shadow(0 0 12px rgba(255,255,255,0.4))",
              animation: "shimmer 3s linear infinite",
            }}
          >
            COMING SOON
          </span>
        </motion.div> */}

      </div>
    </section>
  );
};

export default HeroSection;
