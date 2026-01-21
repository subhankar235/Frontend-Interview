import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-white transform rotate-45"></div>
          </div>
          <span className="text-xl font-bold text-slate-900">CA Monk Blog</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#feed" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
            My Feed
          </a>
          <a href="#explore" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
            Explore
          </a>
          <a href="#bookmarks" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
            Bookmarks
          </a>
          <a href="#more" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
            More
          </a>
        </div>

        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Search className="w-5 h-5 text-slate-700" />
        </button>
      </div>
    </motion.nav>
  );
}
