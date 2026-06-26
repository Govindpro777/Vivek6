import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Crown, Volume2, VolumeX, Pause, Play } from "lucide-react";
import AnnouncementVideo from "@/assets/Announcement.mp4";

const Announcement = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted((m) => !m);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) videoRef.current.pause();
    else videoRef.current.play();
    setIsPlaying((p) => !p);
  };

  return (
    <section id="announcement" className="relative py-24 overflow-hidden">

      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="font-display text-sm md:text-base tracking-[0.3em] text-secondary/70 uppercase mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Latest from the herd
          </motion.p>
          <motion.h2
            className="font-display text-5xl md:text-7xl text-secondary text-shadow-blue"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            ANNOUNCEMENT
          </motion.h2>
        </motion.div>

        {/* Animated crown */}
        {/* <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 4, -4, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Crown className="w-12 h-12 text-primary drop-shadow-[0_0_12px_hsl(43_96%_56%/0.8)]" />
          </motion.div>
        </motion.div> */}

        {/* Video card */}
        <motion.div
          className="max-w-lg mx-auto mt-4"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {/* Outer glow ring */}
          <div className="relative p-[2px] rounded-3xl bg-gradient-to-br from-secondary via-primary/60 to-secondary/30">
            <div className="rounded-3xl overflow-hidden bg-card/90 backdrop-blur-md">

              {/* Video */}
              <div className="relative aspect-square w-full">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                >
                  <source src={AnnouncementVideo} type="video/mp4" />
                </video>

                {/* Top badge */}
                <div className="absolute top-3 left-3">
                  <span className="font-display text-xs tracking-widest px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-secondary border border-secondary/30">
                    $GALLOP
                  </span>
                </div>

                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />

                {/* Controls */}
                <div className="absolute bottom-4 left-0 right-0 flex items-center justify-between px-4">
                  <span className="font-display text-xs text-white/60 tracking-wider">
                    {isPlaying ? "PLAYING" : "PAUSED"}
                  </span>
                  <div className="flex gap-2">
                    <motion.button
                      onClick={togglePlay}
                      className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-secondary/60 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </motion.button>
                    <motion.button
                      onClick={toggleMute}
                      className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-secondary/60 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Caption bar */}
              <div className="px-5 py-4 flex items-center justify-between border-t border-border/30">
                <div>
                  <p className="font-display text-base text-foreground">Official Announcement</p>
                  <p className="font-body text-xs text-muted-foreground mt-0.5">From The Stable &mdash; $GALLOP</p>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 block shadow-[0_0_8px_#4ade80]" />
                </motion.div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Announcement;
