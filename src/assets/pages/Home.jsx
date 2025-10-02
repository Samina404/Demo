import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import VideoCards from "../../components/VideoCards";
import RestaurantCard from "../../components/ResturantCards"; // 👈 only import this
import Footer from "../../components/Footer";
import Reviews from "../../components/Reviews";

export default function Home() {
  return (
    <div className="bg-amber-50 min-h-screen">
      <Navbar />
      <Hero />
      <VideoCards />
    

      {/* Restaurants Section */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">All Restaurants</h2>
        <RestaurantCard /> {/* renders all restaurants directly */}
         <Reviews/>
          <Footer/>
      </div>
    </div>
  );
}
