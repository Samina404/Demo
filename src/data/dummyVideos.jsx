export const dummyVideos = [
  {
    id: 1,
    title: "Spicy Chicken Biryani",
    restaurant: "Royal Biryani House",
    videoUrl: "https://www.pexels.com/download/video/30044489/",
    thumbnail: "https://www.pexels.com/download/video/30044483/",
    category: "Rice",
    Price: 500, // number, not string
    actionLinks: { order: "/order/1", restaurant: "/restaurant/1" }
  },
  {
    id: 2,
    title: "Cheesy Pasta",
    restaurant: "Pizza Planet",
    videoUrl:"https://www.pexels.com/download/video/27769284/",
    thumbnail: "https://source.unsplash.com/600x400/?pizza",
    category: "Pizza",
    Price: 400, // added
    actionLinks: { order: "/order/2", restaurant: "/restaurant/2" }
  },
  {
    id: 3,
    title: "BBQ Meat Pizza",
    restaurant: "Burger Hub",
    videoUrl: "https://www.pexels.com/download/video/7008562",
    thumbnail: "https://www.pexels.com/download/video/7008562/",
    category: "Burgers",
    Price: 600, // added
    actionLinks: { order: "/order/3", restaurant: "/restaurant/3" }
  },
  {
    id: 4,
    title: "Beef Burger with Cheese",
    restaurant: "Tokyo Dine",
    videoUrl: "https://www.pexels.com/download/video/8879540/",
    thumbnail: "https://source.unsplash.com/600x400/?sushi",
    category: "Japanese",
    Price: 550, // added
    actionLinks: { order: "/order/4", restaurant: "/restaurant/4" }
  }
];
