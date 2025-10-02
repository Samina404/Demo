export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Larry Alexander",
      username: "@omeemadox",
      text: "Every slice is like a little piece of heaven. I've ordered it for every special occasion, and it’s always a hit!",
      rating: 5,
      color: "bg-pink-100",
    },
    {
      id: 2,
      name: "Larry Alexander",
      username: "@omeemadox",
      text: "Every slice is like a little piece of heaven. I've ordered it for every special occasion, and it’s always a hit!",
      rating: 5,
      color: "bg-purple-100",
    },
    {
      id: 3,
      name: "Larry Alexander",
      username: "@omeemadox",
      text: "Every slice is like a little piece of heaven. I've ordered it for every special occasion, and it’s always a hit!",
      rating: 5,
      color: "bg-orange-100",
    },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">They Love’s Us</h2>
      <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
        From classic favorites to modern culinary creations, our menu is designed to tantalize your taste buds.
        Every dish is made with the freshest ingredients and an artist’s dash of love.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className={`p-6 rounded-xl shadow-md ${review.color}`}
          >
            <div className="flex justify-center mb-3">
              {"⭐".repeat(review.rating)}
            </div>
            <h3 className="font-semibold text-lg mb-2">Best Salad Man!</h3>
            <p className="text-sm text-gray-700 mb-4">{review.text}</p>
            <p className="font-medium">{review.name}</p>
            <p className="text-gray-500 text-sm">{review.username}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
