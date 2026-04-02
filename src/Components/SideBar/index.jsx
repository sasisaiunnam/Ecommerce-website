// import React, { useState } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import { FaBox, FaHome } from 'react-icons/fa';

// function SideBar() {
//   const [isActive, setIsActive] = useState(true)
//   const locate = useLocation();

//   const menuItems = [
//     { name: 'Dashboard', icon: <FaHome />, path: '/dashboard' },
//     { name: 'Products', icon: <FaBox />, path: '/home' },
//     { name: 'Purchases', icon: <FaHome />, path: '/purchases' },
//     { name: 'Customers', icon: <FaHome />, path: '/customers' },
//     { name: 'Analytics', icon: <FaHome />, path: '/analytics' },
//     { name: 'Settings', icon: <FaHome />, path: '/settings' },
//   ];
//   return (
//     <div className={`${isActive ? 'w-64' : 'w-20'}`}>
//       <button onClick={() => setIsActive(!isActive)}>☰</button>
//       {menuItems.map((item) => (
//         <li key={item.id}>
//           <Link to={item.path}>
//             <span className="text-xl">{item.icon}</span>
//               {isActive && <span>{item.name}</span>}
//               </Link>
//         </li>
//       ))}
//     </div>
//   )
// }

// export default SideBar


import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBox, FaHome, FaShoppingCart, FaUsers, FaChartLine, FaCog, FaBars } from 'react-icons/fa'

function SideBar() {
  const [isActive, setIsActive] = useState(false)
  const location = useLocation()
  
  const menuItems = [
    { id: 1, name: 'Dashboard', icon: <FaHome />, path: '/dashboard' },
    { id: 2, name: 'Products', icon: <FaBox />, path: '/home' },
    { id: 3, name: 'Purchases', icon: <FaShoppingCart />, path: '/purchases' },
    { id: 4, name: 'Customers', icon: <FaUsers />, path: '/customers' },
    { id: 5, name: 'Analytics', icon: <FaChartLine />, path: '/analytics' },
    { id: 6, name: 'Settings', icon: <FaCog />, path: '/settings' },
  ]

  return (
    <div className={`${isActive ? 'w-64' : 'w-20'} bg-gray-800 min-h-screen transition-all duration-300 ease-in-out`}>
      <button 
        onClick={() => setIsActive(!isActive)}
        className="w-full p-4 text-white hover:bg-gray-700 transition-colors duration-200 text-left"
        aria-label={isActive ? 'Collapse sidebar' : 'Expand sidebar'}
      >
        <FaBars className="text-xl" />
      </button>

      <nav className="mt-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.path}
                className={`flex items-center gap-4 px-4 py-3 text-white hover:bg-gray-700 transition-colors duration-200 ${
                  location.pathname === item.path ? 'bg-gray-700 border-l-4 border-blue-500' : ''
                }`}
              >
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                {isActive && (
                  <span className="whitespace-nowrap overflow-hidden transition-opacity duration-200">
                    {item.name}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default SideBar