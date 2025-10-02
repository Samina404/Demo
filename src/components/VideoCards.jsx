import { useRef, useEffect, useState } from "react";
import { dummyVideos } from "../data/dummyVideos";
import { ChevronLeft, ChevronRight } from "lucide-react"; // icons

const VideoCard = () => {
  const videoRefs = useRef([]);
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // autoplay muted for all videos
  useEffect(() => {
    videoRefs.current.forEach((vid) => {
      if (vid) vid.play().catch(() => {});
    });
  }, []);

  // pause animation when hover
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.animationPlayState = isPaused ? "paused" : "running";
    }
  }, [isPaused]);

  const handleMuteToggle = (index, unmute) => {
    videoRefs.current.forEach((vid, i) => {
      if (!vid) return;
      if (i === index && unmute) {
        vid.muted = false;
        vid.play();
      } else {
        vid.muted = true;
      }
    });
  };

  // Manual controls
  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };
  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <div className="relative w-full bg-gray-900 p-6 overflow-hidden">
      {/* Controls */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 p-2 rounded-full hover:bg-black/80 z-10"
      >
        <ChevronLeft className="text-white w-6 h-6" />
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 p-2 rounded-full hover:bg-black/80 z-10"
      >
        <ChevronRight className="text-white w-6 h-6" />
      </button>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex animate-slide space-x-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {dummyVideos.concat(dummyVideos).map((video, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white rounded-xl shadow-lg overflow-hidden w-[320px] flex-shrink-0"
            onMouseEnter={() => handleMuteToggle(index, true)}
            onMouseLeave={() => handleMuteToggle(index, false)}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={video.videoUrl}
              poster={video.thumbnail}
              className="w-full h-64 object-cover"
              muted
              loop
              autoPlay
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{video.title}</h2>
              <p className="text-sm text-gray-400">{video.restaurant}</p>
              <div className="flex justify-between mt-3">
                <a
                  href={video.actionLinks.order}
                  className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition"
                >
                  Order
                </a>
                <a
                  href={video.actionLinks.restaurant}
                  className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                >
                  Go to Restaurant
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCard;
