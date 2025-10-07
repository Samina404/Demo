import { useRef, useEffect, useState, useContext } from "react";
import { dummyVideos } from "../data/dummyVideos";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const VideoCard = () => {
  const videoRefs = useRef([]);
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const { addToCart } = useContext(CartContext);
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  // Auto-play muted videos
  useEffect(() => {
    videoRefs.current.forEach((vid) => {
      if (vid) vid.play().catch(() => {});
    });
  }, []);

  // Pause animation on hover
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.animationPlayState = isPaused ? "paused" : "running";
    }
  }, [isPaused]);

  // Mute toggle
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

  // Scroll controls
  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };
  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  // ✅ Handle Add to Cart (fixed)
  const handleAddToCart = (video) => {
   
    // Normalize keys to match CartContext expectations
    const normalizedItem = {
      id: video.id,
      title: video.title || video.name || "Untitled Dish",
      Price: Number(video.Price ?? video.price ?? 0),
      image: video.thumbnail || video.image || "",
      qty: 1,
    };

    addToCart(normalizedItem);
    
  };

  return (
    <div className="relative w-full bg-gray-900 p-6 overflow-hidden">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-white mb-2">
          Explore Our Delicious Dishes
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Watch short clips of our mouth-watering dishes and order directly from your favorite restaurant.
        </p>
      </div>

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

      {/* Video Slider */}
      <div
        ref={sliderRef}
        className="flex animate-slide space-x-6 overflow-x-auto scrollbar-hide"
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
              <p className="text-sm text-gray-200 mt-1">
                Price: ৳{Number(video.Price ?? video.price ?? 0)}
              </p>

              <div className="flex justify-between mt-3">
                <button
                  onClick={() => handleAddToCart(video)}
                  className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => navigate("/menu")}
                  className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCard;
