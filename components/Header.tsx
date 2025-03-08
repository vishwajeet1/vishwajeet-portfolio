import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.header
      className="fixed top-0 w-full bg-[#F8FAFC]/95 backdrop-blur-md shadow-sm z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="text-2xl font-bold text-[#334155] relative group">
              <span className="relative z-10">Vishwajeet</span>
              <motion.div
                className="absolute bottom-0 left-0 w-full h-1 bg-[#94A3B8] rounded-full origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
              />
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden text-[#475569] focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.3 + (index * 0.1),
                  ease: "easeOut"
                }}
              >
                <Link
                  href={item.href}
                  className="text-[#475569] hover:text-[#334155] font-medium transition-colors relative group"
                >
                  {item.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#94A3B8] rounded-full origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="pt-4 pb-2 space-y-4">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.4,
                  delay: 0.1 + (index * 0.1),
                  ease: "easeOut"
                }}
              >
                <Link
                  href={item.href}
                  className="block text-[#475569] hover:text-[#334155] font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header; 