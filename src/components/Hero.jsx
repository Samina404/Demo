export default function Hero() {
  return (
    <section className="text-center py-16 px-6">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
        Savor the Taste of <span className="text-orange-500">Perfection.</span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-6">
        Fresh ingredients, mouth-watering recipes, and a passion for good food delivered to your door or ready for pick-up.
      </p>
      <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full">
        Order Now →
      </button>
    </section>
  );
}
