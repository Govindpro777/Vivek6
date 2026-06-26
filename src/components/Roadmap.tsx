// import { motion } from "framer-motion";
// import { CheckCircle2, Circle } from "lucide-react";

// const phases = [
//   {
//     title: "PHASE 1: THE LAUNCH",
//     items: [
//       { text: "PUMP.FUN FAIR LAUNCH", completed: true },
//       { text: "COMMUNITY BUILDING ON X & TELEGRAM", completed: true },
//       { text: "WEBSITE & SOCIALS SETUP", completed: true },
//       { text: "INITIAL MEME CAMPAIGN", completed: true },
//     ],
//   },
//   {
//     title: "PHASE 2: THE GROWTH",
//     items: [
//       { text: "REACH RAYDIUM", completed: false },
//       { text: "COINGECKO & COINMARKETCAP LISTINGS", completed: false },
//       { text: "INFLUENCER MARKETING PUSH", completed: false },
//       { text: "FIRST SHELTER DONATION", completed: false },
//     ],
//   },
//   {
//     title: "PHASE 3: THE TAKEOVER",
//     items: [
//       { text: "CEX LISTING APPLICATIONS", completed: false },
//       { text: "PUMPKIN MERCH STORE", completed: false },
//       { text: "MAJOR CHARITY PARTNERSHIPS", completed: false },
//       { text: "WORLD DOMINATION", completed: false },
//     ],
//   },
// ];

// const Roadmap = () => {
//   return (
//     <section id="roadmap" className="relative py-20 overflow-hidden">
//       {/* Background */}

//       <div className="container mx-auto px-4 relative z-10">
//         <motion.h2
//           className="font-display text-5xl md:text-6xl text-secondary text-shadow-blue text-center mb-16"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           ROADMAP
//         </motion.h2>

//         <div className="grid md:grid-cols-3 gap-6">
//           {phases.map((phase, phaseIndex) => (
//             <motion.div
//               key={phase.title}
//               className="glass-card rounded-2xl p-6 space-y-6"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 * phaseIndex }}
//               whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
//             >
//               <motion.h3
//                 className="font-display text-2xl text-secondary  text-center"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.3 + 0.2 * phaseIndex }}
//               >
//                 {phase.title}
//               </motion.h3>

//               <div className="space-y-4">
//                 {phase.items.map((item, itemIndex) => (
//                   <motion.div
//                     key={item.text}
//                     className="flex items-center gap-3"
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.4 + 0.1 * itemIndex + 0.2 * phaseIndex }}
//                   >
//                     {item.completed ? (
//                       <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
//                     ) : (
//                       <Circle className="w-5 h-5 text-orange-accent flex-shrink-0" />
//                     )}
//                     <span className="font-display text-sm text-muted-foreground">
//                       {item.text}
//                     </span>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Roadmap;


import { motion } from "framer-motion";
import { CheckCircle2, Circle } from "lucide-react";

const phases = [
  {
    title: "PHASE 1 — STABLE OPENS",
    items: [
      { text: "Launch on Solana", completed: true },
      { text: "Fair launch on pump.fun", completed: true },
      { text: "Build the core community (The Stable)", completed: true },
      { text: "Daily memes and content across X", completed: true },
      { text: "Reach 2,500 holders", completed: false },
      { text: "Launch official website and socials", completed: true },
    ],
  },
  {
    title: "PHASE 2 — BUILD HORSEPOWER",
    items: [
      { text: "Apply for CoinGecko & CoinMarketCap listings", completed: false },
      { text: "Expand marketing across X and Telegram", completed: false },
      { text: "Community competitions and meme contests", completed: false },
      { text: "Partner with KOLs and crypto creators", completed: false },
      { text: "Reach 10,000 holders", completed: false },
      { text: "Begin trending campaigns", completed: false },
    ],
  },
  {
    title: "PHASE 3 — THE STAMPEDE",
    items: [
      { text: "Major marketing push", completed: false },
      { text: "Cross-community collaborations", completed: false },
      { text: "Strategic exchange applications", completed: false },
      { text: "Merchandise store launch", completed: false },
      { text: "Community governance begins", completed: false },
      { text: "Reach 50,000 holders", completed: false },
    ],
  },
  {
    title: "PHASE 4 — FULL GALLOP",
    items: [
      { text: "Global marketing campaign", completed: false },
      { text: "Tier 1 exchange listings", completed: false },
      { text: "Expand the Gallop brand", completed: false },
      { text: "Real-world events and sponsorships", completed: false },
      { text: "Grow into one of Solana's leading community projects", completed: false },
      { text: "100,000+ holders", completed: false },
    ],
  },
];

const Roadmap = () => {
  return (
    <section id="roadmap" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="font-display text-5xl md:text-6xl text-secondary text-shadow-blue text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          $GALLOP ROADMAP
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {phases.map((phase, phaseIndex) => (
            <motion.div
              key={phase.title}
              className="glass-card rounded-2xl p-6 space-y-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 * phaseIndex }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <motion.h3
                className="font-display text-2xl text-secondary text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + 0.2 * phaseIndex }}
              >
                {phase.title}
              </motion.h3>

              <div className="space-y-4">
                {phase.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.text}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + 0.1 * itemIndex + 0.2 * phaseIndex }}
                  >
                    {item.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <Circle className="w-5 h-5 text-orange-accent flex-shrink-0" />
                    )}
                    <span className="font-display text-sm text-muted-foreground">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
