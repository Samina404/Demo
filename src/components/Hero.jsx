import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="relative text-center py-20 px-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/src/assets/photos/235e3b151661977.630fc95415d3f.jpg')" }} // place your image in the public folder
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-white">
          Savor the Taste of <span className="text-orange-500">Perfection.</span>
        </h2>
        <p className="text-gray-200 text-lg md:text-xl mb-8">
          Fresh ingredients, mouth-watering recipes, and a passion for good food delivered to your door or ready for pick-up.
        </p>
        <button
          onClick={() => navigate("/menu")}
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300"
        >
          Order Now →
        </button>
      </div>
    </section>
  );
}
