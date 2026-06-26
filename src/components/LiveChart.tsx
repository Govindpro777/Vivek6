import { motion } from "framer-motion";

const LiveChart = () => {
  return (
    <section
      id="warzone"
      className="relative py-14 sm:py-16 md:py-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-secondary text-shadow-blue text-center mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Warzone
        </motion.h2>

        <motion.div
          className="text-center text-base sm:text-xl md:text-2xl mb-10 sm:mb-12 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Let the war begin!
        </motion.div>


        <motion.div
          className="glass-card rounded-xl sm:rounded-2xl overflow-hidden max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >


          {/* <div className="aspect-[4/5] xs:aspect-[3/4] sm:aspect-video w-full bg-card">
            <iframe
              src="https://dexscreener.com/solana/5fqZTGmK3LMRqZmGerz8i6V1vGg7vMAtjQPrBRi5P8YH?embed=1&theme=dark&trades=1&info=0"
              className="w-full h-full border-0"
              title="SOL/USDT Chart - DEX Screener"
              allow="clipboard-write"
            />
          </div> */}

          <div className="aspect-[4/5] xs:aspect-[3/4] sm:aspect-video w-full bg-card">
            <iframe
              src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_sol&symbol=SOLUSD&interval=60&hidesidetoolbar=0&hidetoptoolbar=0&symboledit=0&saveimage=0&theme=dark&style=1&timezone=Etc%2FUTC&studies=%5B%5D&locale=en"
              className="w-full h-full border-0"
              title="SOL/USD Live Chart"
              allowTransparency={true}
              style={{ overflow: "hidden" }}
            />
          </div>



        </motion.div>

        <motion.div
          className="text-center mt-10 sm:mt-12 text-sm sm:text-base md:text-lg font-semibold text-secondary uppercase tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          To win by more
        </motion.div>
      </div>
    </section>
  );
};

export default LiveChart;

