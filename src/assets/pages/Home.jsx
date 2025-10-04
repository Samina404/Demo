import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import VideoCards from "../../components/VideoCards";
import RestaurantCard from "../../components/ResturantCards"; // 👈 only import this
import Footer from "../../components/Footer";
import Reviews from "../../components/Reviews";

export default function Home() {
  return (
    <div className="bg-gray-800 min-h-screen">
      <Navbar />
      <Hero />
      <VideoCards />
    

      {/* Restaurants Section */}
      
        <RestaurantCard /> {/* renders all restaurants directly */}
         <Reviews/>
          <Footer/>
    
    </div>
  );
}
