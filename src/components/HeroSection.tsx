
import { motion } from "framer-motion";
import eagalImg from "@/assets/eagal.jpg";
import xImg from "@/assets/x.jpg";
import moneyImg from "@/assets/money.jpg";
import telegramImg from "@/assets/telegram.jpg";
import capsuleImg from "@/assets/capsule.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center pt-24 pb-10 sm:pb-16 lg:pt-28">
      <div className="container mx-auto px-4 relative z-10 flex flex-col gap-10">

        {/* Top: text + button */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          <div className="space-y-6 text-center lg:text-left">
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
          </div>
        </div>

        {/* Full-width image row — all 5 images, equal gaps */}
        <motion.div
          className="w-full flex items-center justify-between gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          {[
            { src: eagalImg,    cover: true  },
            { src: xImg,        cover: true  },
            { src: moneyImg,    cover: false },
            { src: telegramImg, cover: false },
            { src: capsuleImg,  cover: false },
          ].map((img, i) => (
            <motion.img
              key={i}
              src={img.src}
              alt=""
              className={`flex-1 h-24 sm:h-32 md:h-40 w-0 min-w-0 rounded-2xl border border-border/40 hover:border-secondary transition-colors ${img.cover ? "object-cover" : "object-contain"}`}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
