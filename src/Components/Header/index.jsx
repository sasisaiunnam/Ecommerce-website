// import React from 'react'
// import { Link } from 'react-router-dom'

// function Header() {
//   return (
//     <div>
//       <nav className='flex justify-between items-center bg-black text-white'>
//         <div><img className='h-15' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTduRGzoict2KOdbOy6We6z0E5bYZxhzrGjsQ&s' alt='cart'/></div>
        
//         <ul className='flex gap-5'>
//           <li>Dashboard</li>
//           <li><Link to={'/Home'}>products</Link></li>
//           <li>Purchases</li>
//           <li>Customers</li>
//           <li>Analytics</li>
//           <li>Settings</li>
//         </ul>
//         <div><img className='h-10' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTduRGzoict2KOdbOy6We6z0E5bYZxhzrGjsQ&s' alt='cart'/>
//         <p>UserName</p></div>
//       </nav>
//     </div>
//   )
// }

// export default Header

import React, { useState, useContext, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cartContext } from '../../context/cartContext';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cartItems } = useContext(cartContext);

  // ✅ Memoized cart count
  const cartCount = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  const navItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Products', path: '/Home' },
    { name: 'Purchases', path: '/purchases' },
    { name: 'Customers', path: '/customers' },
    { name: 'Cart', path: '/cart' },
    { name: 'Settings', path: '/settings' },
  ];

  const isActive = (path) =>
    location.pathname.toLowerCase() === path.toLowerCase();

  return (
    <header className="bg-gray-900 text-white shadow sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              className="h-10 w-10 rounded"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTduRGzoict2KOdbOy6We6z0E5bYZxhzrGjsQ&s"
              alt="logo"
            />
            <span className="text-xl font-bold">ShopHub</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-4">
            {navItems.map((item) => (
              <li key={item.name} className="relative">
                <Link
                  to={item.path}
                  className={`px-3 py-2 rounded ${
                    isActive(item.path)
                      ? 'bg-blue-600'
                      : 'hover:bg-gray-700'
                  }`}
                >
                  {item.name}

                  {/* ✅ Cart Badge */}
                  {item.name === 'Cart' && cartCount > 0 && (
                    <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-2 py-0.5 rounded-full">
                      {cartCount}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-2 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 bg-gray-800 rounded relative"
              >
                {item.name}

                {/* ✅ Cart Badge Mobile */}
                {item.name === 'Cart' && cartCount > 0 && (
                  <span className="ml-2 bg-red-500 text-xs px-2 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;