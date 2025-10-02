import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-amber-100 text-gray-800 py-10 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Navigate */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Navigate</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-orange-600">Home</a></li>
            <li><a href="/about" className="hover:text-orange-600">About</a></li>
            <li><a href="/menu" className="hover:text-orange-600">Menu</a></li>
            <li><a href="/contact" className="hover:text-orange-600">Contact</a></li>
          </ul>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Menu</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/breakfast" className="hover:text-orange-600">Breakfast</a></li>
            <li><a href="/lunch" className="hover:text-orange-600">Lunch</a></li>
            <li><a href="/dinner" className="hover:text-orange-600">Dinner</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-orange-600"><Facebook /></a>
            <a href="#" className="hover:text-orange-600"><Twitter /></a>
            <a href="#" className="hover:text-orange-600"><Instagram /></a>
            <a href="#" className="hover:text-orange-600"><Linkedin /></a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>📞 602-774-4735</li>
            <li>🏢 1022 South 51st Street Suite 105 <br /> Phoenix, AZ 85044</li>
            <li>✉️ hi@undine.co</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center text-sm text-gray-600 mt-8 border-t border-gray-300 pt-4">
        © {new Date().getFullYear()} Undine. All rights reserved.
      </div>
    </footer>
  );
}
