import { motion } from "framer-motion";
import { Users, Trophy, CalendarDays, Zap } from "lucide-react";
import behindImg from "@/assets/behind_the_scene.jpg";
import capsuleImg from "@/assets/capsule.png";
import eagalImg from "@/assets/eagal.png";
import moneyImg from "@/assets/money.png";
import community1Img from "@/assets/community1.jpg";
import community2Img from "@/assets/community2.jpg";

const weeklyEvents = [
  {
    icon: Trophy,
    title: "Meme Contest",
    desc: "Submit your best $GALLOP meme every week. Top picks win community prizes.",
  },
  {
    icon: CalendarDays,
    title: "Community Call",
    desc: "Live voice sessions with the team every week. Updates, alpha, and open Q&A.",
  },
  {
    icon: Zap,
    title: "Trading Competitions",
    desc: "Weekly volume challenges with leaderboards and rewards for top traders.",
  },
  {
    icon: Users,
    title: "Holder Airdrops",
    desc: "Active community members get surprise drops. Hold $GALLOP, stay engaged.",
  },
];

const sceneImages = [
  { src: capsuleImg, label: "The Launch" },
  { src: eagalImg, label: "The Herd" },
  { src: moneyImg, label: "The Gains" },
];

const BehindTheScenes = () => {
  return (
    <section id="behind-the-scenes" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="font-display text-5xl md:text-6xl text-secondary text-shadow-blue mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            BEHIND THE SCENES
          </motion.h2>
          <motion.p
            className="font-display text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            The $GALLOP community never sleeps. Events, contests, and momentum every single week.
          </motion.p>
        </motion.div>

        {/* Hero image + join CTA */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
          <motion.div
            className="relative rounded-2xl overflow-hidden glass-card group"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={behindImg}
              alt="Behind the Scenes"
              className="w-full h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="font-display text-2xl text-secondary text-shadow-blue">
                THE STABLE
              </span>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
              Join the Community.<br />
              <span className="text-secondary">Be Part of the Launch.</span>
            </h3>
            <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
              The $GALLOP community is built by riders, not passengers. We run events, share alpha, and push the herd forward &mdash; every week, without fail. Whether you joined day one or just saddled up, there is always something happening in The Stable.
            </p>
            <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
              From meme contests to live community calls, we keep the energy high and the holders rewarded. The best time to join was at launch. The second best time is now.
            </p>
            <motion.a
              href="#"
              className="inline-block px-8 py-3 bg-secondary text-secondary-foreground font-display text-lg rounded-lg glow-blue hover:bg-secondary/90 transition-all"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(200 80% 70% / 0.6)" }}
              whileTap={{ scale: 0.95 }}
            >
              JOIN THE COMMUNITY
            </motion.a>
          </motion.div>
        </div>

        {/* Weekly events grid */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-display text-3xl md:text-4xl text-secondary text-shadow-blue mb-2">
            WEEKLY IN PROGRESS
          </h3>
          <p className="font-body text-muted-foreground">
            Every week, something new is happening inside the $GALLOP community.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {weeklyEvents.map((event, index) => (
            <motion.div
              key={event.title}
              className="relative bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 group overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.03, borderColor: "hsl(var(--secondary))" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                  <event.icon className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="font-display text-lg text-foreground mb-2">{event.title}</h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Community screenshots */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-display text-3xl md:text-4xl text-secondary text-shadow-blue mb-2">
            COMMUNITY IN ACTION
          </h3>
          <p className="font-body text-muted-foreground">
            Real conversations, real holders — the herd is always active.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {[
            { src: community1Img, label: "Community 1" },
            { src: community2Img, label: "Community 2" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="relative rounded-2xl overflow-hidden glass-card group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 * index }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                <span className="font-display text-xl text-secondary text-shadow-blue">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BehindTheScenes;
