// src/data/dummyVideos.js

export const dummyVideos = [
  {
    id: 1,
    title: "Spicy Chicken Biryani",
    restaurant: "Royal Biryani House",
    videoUrl: "src/assets/photos/12888336_1080_1920_30fps.mp4", // sample video
    thumbnail: "https://source.unsplash.com/600x400/?biryani",
    category: "Rice",
    actionLinks: {
      order: "/order/1",
      restaurant: "/restaurant/1"
    }
  },
  {
    id: 2,
    title: "Cheesy Pasta",
    restaurant: "Pizza Planet",
    videoUrl:"src/assets/photos/4253150-uhd_4096_2160_25fps.mp4",
    thumbnail: "https://source.unsplash.com/600x400/?pizza",
    category: "Pizza",
    actionLinks: {
      order: "/order/2",
      restaurant: "/restaurant/2"
    }
  },
  {
    id: 3,
    title: "BBQ Meat Pizza",
    restaurant: "Burger Hub",
    videoUrl: "src/assets/photos/7008562-hd_1080_1920_25fps.mp4",
    thumbnail: "https://source.unsplash.com/600x400/?burger",
    category: "Burgers",
    actionLinks: {
      order: "/order/3",
      restaurant: "/restaurant/3"
    }
  },
  {
    id: 4,
    title: "Beef Burger with Cheese",
    restaurant: "Tokyo Dine",
    videoUrl: "src/assets/photos/8879540-uhd_2160_4096_25fps.mp4",
    thumbnail: "https://source.unsplash.com/600x400/?sushi",
    category: "Japanese",
    actionLinks: {
      order: "/order/4",
      restaurant: "/restaurant/4"
    }
  }
];
