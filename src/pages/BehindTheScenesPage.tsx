import Navbar from "@/components/Navbar";
import BehindTheScenes from "@/components/BehindTheScenes";
import Footer from "@/components/Footer";
import bgVideo from "@/assets/bgVideo.mp4";

const BehindTheScenesPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <video
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover -z-10"
      />
      <div className="fixed inset-0 bg-background/60 -z-10" />

      <div className="relative z-10">
        <Navbar />
        <div className="pt-20">
          <BehindTheScenes />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default BehindTheScenesPage;
