// import React,{useState,useEffect} from 'react'
// import { Link, useNavigate } from 'react-router-dom';
// import { useContext } from 'react';

// import { cartContext } from '../../context/cartContext';




// const categories =[
//     {
//       "id": "1",
//       "name": "Electronics",
//       "description": "Electronic devices and accessories",
//       "productCount": "10",
//       "image": "https://example.com/images/category-electronics.jpg"
//     },
//     {
//       "id": "2",
//       "name": "Clothing",
//       "description": "Apparel and fashion items",
//       "productCount": "10",
//       "image": "https://example.com/images/category-clothing.jpg"
//     },
//     {
//       "id": "3",
//       "name": "Footwear",
//       "description": "Shoes, boots, and sandals",
//       "productCount": "10",
//       "image": "https://example.com/images/category-footwear.jpg"
//     },
//     {
//       "id": "4",
//       "name": "Home & Kitchen",
//       "description": "Home essentials and kitchen appliances",
//       "productCount": "10",
//       "image": "https://example.com/images/category-home.jpg"
//     },
//     {
//       "id": "5",
//       "name": "Sports & Fitness",
//       "description": "Exercise equipment and athletic gear",
//       "productCount": "10",
//       "image": "https://example.com/images/category-sports.jpg"
//     }
//   ];

// function Home() {
//   const [category,setCategory] =useState("")
//   const [data,setData] = useState([])
//   const [searchItem,setSearchItem] = useState("")
//   const navigator = useNavigate()

//   const {addToCart} =useContext(cartContext)

//   const handleClick =(e) =>{
//     setCategory(e)
//     console.log("data",e.name)
//   }
// const handleSearch= (e)=>{
//   setSearchItem(e.target.value)
// }
// const handleClearSearch =() =>{
//       setCategory('')
//       setSearchItem('')
//   }
// const Filterfun =async() =>{
//   const fetchData = await fetch('/db.json');
//   const res = await fetchData.json();
//   const products= res.products
//   let filteredData = products

//    if (category !== "") {
//         filteredData = filteredData.filter((e) =>
//           e.category.toLowerCase() === category.toLowerCase()
//         );
//       }

//       if (searchItem.trim() !== "") {
//         filteredData = filteredData.filter((e) =>
//           e.name.toLowerCase().includes(searchItem.toLowerCase()) ||
//           e.description?.toLowerCase().includes(searchItem.toLowerCase()) ||
//           e.category.toLowerCase().includes(searchItem.toLowerCase())
//         );
//       }
//    console.log('resd',filteredData)

//    setData(filteredData)
  
// }

//  useEffect(()=>{
// //   try{
// //     const filterfun= async() =>{
// //       const fetchData = await fetch('/db.json/products');
// //   const res = await fetchData.json();
// //   const filteredData =res.filter((e) => (
// //     e.category === category
// //   ))
// //   setData(filteredData)}
// //   filterfun()
// // }
// //   catch(err){
// //     console.log(err)
// //   }
// Filterfun()
//  },[category,searchItem]);

// //  if(category === null){
// //   const unfiltered =res
// //  }
// //  else(unfiltered = filteredData)
  

//   return (
//     <div>
//       <h1>Products</h1>
//       <nav>
//         <ul>
//           <li onClick={() => handleClick("")}>All products</li>
//           {categories.map((e) => (
//             <li key={e.id} onClick={() =>handleClick(e.name)}> {e.name}</li>
//           ))}
//         </ul>
//         <div>
//           <input 
//             value={searchItem} 
//             onChange={(e) => handleSearch(e)} 
//             placeholder="Search products..." 
//           />
//           {searchItem && (
//             <button onClick={handleClearSearch}>Clear Search</button>
//           )}
//         </div>
//         <Link to='/add' >Add new product</Link>
//       </nav>

//       <div>
//       {data.map(((e) =>(
//         // console.log('ea',e.name);
//         <Link key={e.id} to={`/product/${e.id}`} state={{product:e}}>
//         <div  >
//           <img src={e.images[0]} alt='img'/>
//           <p>{e.name}</p>
//           <p>Rs.{e.price}</p>
//           <button onClick={(event)=>{addToCart({event,e})}}>add to cart</button>

//         </div>
//         </Link>
//       )))}
//       </div>
      
//     </div>
//   )
// }

// export default Home




// import React, { useState, useEffect } from 'react'
// import { Link, useNavigate } from 'react-router-dom';
// import { useContext } from 'react';
// import { cartContext } from '../../context/cartContext';

// const categories = [
//   {
//     "id": "1",
//     "name": "Electronics",
//     "description": "Electronic devices and accessories",
//     "productCount": "10",
//     "image": "https://example.com/images/category-electronics.jpg"
//   },
//   {
//     "id": "2",
//     "name": "Clothing",
//     "description": "Apparel and fashion items",
//     "productCount": "10",
//     "image": "https://example.com/images/category-clothing.jpg"
//   },
//   {
//     "id": "3",
//     "name": "Footwear",
//     "description": "Shoes, boots, and sandals",
//     "productCount": "10",
//     "image": "https://example.com/images/category-footwear.jpg"
//   },
//   {
//     "id": "4",
//     "name": "Home & Kitchen",
//     "description": "Home essentials and kitchen appliances",
//     "productCount": "10",
//     "image": "https://example.com/images/category-home.jpg"
//   },
//   {
//     "id": "5",
//     "name": "Sports & Fitness",
//     "description": "Exercise equipment and athletic gear",
//     "productCount": "10",
//     "image": "https://example.com/images/category-sports.jpg"
//   }
// ];

// function Home() {
//   const [category, setCategory] = useState("")
//   const [data, setData] = useState([])
//   const [searchItem, setSearchItem] = useState("")
//   const navigator = useNavigate()
//   const { addToCart,cartItems } = useContext(cartContext)

  
//   const handleClick = (e) => {
//     setCategory(e)
//     console.log("data", e)
//   }
  
//   const handleSearch = (e) => {
//     setSearchItem(e.target.value)
//   }
  
//   const handleClearSearch = () => {
//     setCategory('')
//     setSearchItem('')
//   }
  
//   const Filterfun = async () => {
//     const fetchData = await fetch('/db.json');
//     const res = await fetchData.json();
//     const products = res.products
//     let filteredData = products
    
//     if (category !== "") {
//       filteredData = filteredData.filter((e) =>
//         e.category.toLowerCase() === category.toLowerCase()
//       );
//     }
    
//     if (searchItem.trim() !== "") {
//       filteredData = filteredData.filter((e) =>
//         (e.name || e.title)?.toLowerCase().includes(searchItem.toLowerCase()) ||
//         e.description?.toLowerCase().includes(searchItem.toLowerCase()) ||
//         e.category.toLowerCase().includes(searchItem.toLowerCase())
//       );
//     }
    
//     console.log('resd', filteredData)
//     setData(filteredData)
//   }
  
//   useEffect(() => {
//     Filterfun()
//   }, [category, searchItem]);

//   // Fixed: Stop event propagation on button click
//   const handleAddToCart = (e, product) => {
//     e.preventDefault(); // Prevent Link navigation
//     e.stopPropagation(); // Stop event bubbling
//     addToCart(product);
//       console.log("CART:", cartItems)

//   }

//   return (
//     <div>
//       <h1>Products</h1>
//       <nav>
//         <ul>
//           <li onClick={() => handleClick("")}>All products</li>
//           {categories.map((e) => (
//             <li key={e.id} onClick={() => handleClick(e.name)}> {e.name}</li>
//           ))}
//         </ul>
//         <div>
//           <input 
//             value={searchItem} 
//             onChange={(e) => handleSearch(e)} 
//             placeholder="Search products..." 
//           />
//           {searchItem && (
//             <button onClick={handleClearSearch}>Clear Search</button>
//           )}
//         </div>
//         <Link to='/add'>Add new product</Link>
//       </nav>

//       <div>
//         {data.map((e) => (
//           <div key={e.id}>
//           <Link  to={`/product/${e.id}`} state={{ product: e }}>
//             <div>
//               <img src={e.images[0]} alt='img' />
//               <p>{e.name}</p>
//               <p>Rs.{e.price}</p>
              
//             </div>
//           </Link>
//           <button type='button' style={{backgroundColor:'lightblue',cursor:'pointer',borderRadius:'5px'}} onClick={(event) => handleAddToCart(event, e)}>
//                 add to cart
//           </button>
//           </div>


//         ))}
//       </div>
//     </div>
//   )
// }

// export default Home



import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { cartContext } from '../../context/cartContext';

const categories = [
  {
    "id": "1",
    "name": "Electronics",
    "description": "Electronic devices and accessories",
    "productCount": "10",
    "image": "https://example.com/images/category-electronics.jpg"
  },
  {
    "id": "2",
    "name": "Clothing",
    "description": "Apparel and fashion items",
    "productCount": "10",
    "image": "https://example.com/images/category-clothing.jpg"
  },
  {
    "id": "3",
    "name": "Footwear",
    "description": "Shoes, boots, and sandals",
    "productCount": "10",
    "image": "https://example.com/images/category-footwear.jpg"
  },
  {
    "id": "4",
    "name": "Home & Kitchen",
    "description": "Home essentials and kitchen appliances",
    "productCount": "10",
    "image": "https://example.com/images/category-home.jpg"
  },
  {
    "id": "5",
    "name": "Sports & Fitness",
    "description": "Exercise equipment and athletic gear",
    "productCount": "10",
    "image": "https://example.com/images/category-sports.jpg"
  }
];

function Home() {
  const [category, setCategory] = useState("");
  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const navigator = useNavigate();
  const { addToCart, cartItems } = useContext(cartContext);

  const handleClick = (categoryName) => {
    setCategory(categoryName);
    console.log("Selected category:", categoryName);
  };

  const handleSearch = (e) => {
    setSearchItem(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchItem('');
  };

  const handleClearAll = () => {
    setCategory('');
    setSearchItem('');
  };

  const Filterfun = async () => {
    try {
      const fetchData = await fetch('/db.json');
      const res = await fetchData.json();
      const products = res.products;
      let filteredData = products;

      if (category !== "") {
        filteredData = filteredData.filter((e) =>
          e.category.toLowerCase() === category.toLowerCase()
        );
      }

      if (searchItem.trim() !== "") {
        filteredData = filteredData.filter((e) =>
          (e.name || e.title)?.toLowerCase().includes(searchItem.toLowerCase()) ||
          e.description?.toLowerCase().includes(searchItem.toLowerCase()) ||
          e.category.toLowerCase().includes(searchItem.toLowerCase())
        );
      }

      console.log('Filtered data:', filteredData);
      setData(filteredData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    Filterfun();
  }, [category, searchItem]);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    console.log("CART:", cartItems);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Title and Add Product Button */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Products
            </h1>
            <Link
              to='/add'
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add New Product
            </Link>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search products by name, description, or category..."
              value={searchItem}
              onChange={handleSearch}
              className="w-full pl-12 pr-12 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
            />
            {searchItem && (
              <button
                onClick={handleClearSearch}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Active Filters */}
          {(category || searchItem) && (
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <span className="text-sm text-gray-600 font-semibold">Active filters:</span>
              
              {category && (
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  Category: {category}
                  <button
                    onClick={() => setCategory("")}
                    className="hover:text-blue-600 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </span>
              )}
              
              {searchItem && (
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                  Search: "{searchItem}"
                  <button
                    onClick={handleClearSearch}
                    className="hover:text-purple-600 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </span>
              )}

              <button
                onClick={handleClearAll}
                className="px-4 py-2 bg-red-500 text-white text-sm font-semibold rounded-full hover:bg-red-600 transition-all duration-200 hover:scale-105"
              >
                Clear All
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Categories Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-[200px] sm:top-[180px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto scrollbar-hide">
            <ul className="flex gap-3 py-4 min-w-max">
              <li>
                <button
                  onClick={() => handleClick("")}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                    category === ""
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
                  }`}
                >
                  All Products
                </button>
              </li>
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleClick(cat.name)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                      category === cat.name
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
                    }`}
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600 text-lg">
            {data.length === 0 ? (
              <span className="font-bold text-gray-900">No products found</span>
            ) : (
              <>
                Showing <span className="font-bold text-gray-900">{data.length}</span>{' '}
                {data.length === 1 ? 'product' : 'products'}
                {searchItem && <span> for "{searchItem}"</span>}
                {category && <span> in {category}</span>}
              </>
            )}
          </p>
        </div>

        {/* Products Grid or Empty State */}
        {data.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mb-6 shadow-lg">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <p className="text-2xl text-gray-700 font-bold mb-3">No products found</p>
            <p className="text-gray-500 text-lg">
              {searchItem ? (
                <>
                  Try searching with different keywords or{' '}
                  <button
                    onClick={handleClearSearch}
                    className="text-purple-600 hover:text-purple-800 font-semibold underline"
                  >
                    clear your search
                  </button>
                </>
              ) : (
                "Try selecting a different category"
              )}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.map((product) => (
              <div key={product.id} className="group">
                {/* Product Card */}
                <Link
                  to={`/product/${product.id}`}
                  state={{ product }}
                  className="block bg-white rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                >
                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      onError={(e) => e.target.src = 'https://via.placeholder.com/400'}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">{product.category}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                        ₹{product.price}
                      </p>
                      {product.rating && (
                        <div className="flex items-center gap-1">
                          <svg className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                          <span className="text-sm font-semibold text-gray-600">
                            {product.rating}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>

                {/* Add to Cart Button */}
                <button
                  type="button"
                  onClick={(e) => handleAddToCart(e, product)}
                  className="w-full mt-3 px-6 py-3.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Custom Scrollbar Hide */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default Home;





// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const categories = [
//   {
//     "id": "1",
//     "name": "Electronics",
//     "description": "Electronic devices and accessories",
//     "productCount": "10",
//     "image": "https://example.com/images/category-electronics.jpg"
//   },
//   {
//     "id": "2",
//     "name": "Clothing",
//     "description": "Apparel and fashion items",
//     "productCount": "10",
//     "image": "https://example.com/images/category-clothing.jpg"
//   },
//   {
//     "id": "3",
//     "name": "Footwear",
//     "description": "Shoes, boots, and sandals",
//     "productCount": "10",
//     "image": "https://example.com/images/category-footwear.jpg"
//   },
//   {
//     "id": "4",
//     "name": "Home & Kitchen",
//     "description": "Home essentials and kitchen appliances",
//     "productCount": "10",
//     "image": "https://example.com/images/category-home.jpg"
//   },
//   {
//     "id": "5",
//     "name": "Sports & Fitness",
//     "description": "Exercise equipment and athletic gear",
//     "productCount": "10",
//     "image": "https://example.com/images/category-sports.jpg"
//   }
// ];

// function Home() {
//   const [category, setCategory] = useState("");
//   const [data, setData] = useState([]);
//   const navigator = useNavigate();

//   const handleClick = (e) => {
//     setCategory(e.name);
//     console.log("data", e.name);
//   };

//   const handleAllProducts = () => {
//     setCategory("");
//   };

//   const Filterfun = async () => {
//     try {
//       const fetchData = await fetch('/db.json');
//       const res = await fetchData.json();
//       const products = res.products;
      
//       if (category === "") {
//         setData(products);
//       } else {
//         const filteredData = products.filter((e) => (
//           e.category.toLowerCase() === category.toLowerCase()
//         ));
//         setData(filteredData);
//       }
//     } catch (err) {
//       console.error("Error fetching data:", err);
//     }
//   };

//   useEffect(() => {
//     Filterfun();
//   }, [category]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//       {/* Header */}
//       <header className="bg-white shadow-sm sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//             <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               Products
//             </h1>
//             <Link 
//               to='/add'
//               className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
//             >
//               <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//               </svg>
//               Add New Product
//             </Link>
//           </div>
//         </div>
//       </header>

//       {/* Categories Navigation */}
//       <nav className="bg-white border-b border-gray-200 sticky top-[88px] sm:top-[96px] z-40 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="overflow-x-auto scrollbar-hide">
//             <ul className="flex gap-2 py-4 min-w-max">
//               <li>
//                 <button
//                   onClick={handleAllProducts}
//                   className={`px-6 py-2.5 rounded-full font-medium transition-all duration-200 whitespace-nowrap ${
//                     category === ""
//                       ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
//                       : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                   }`}
//                 >
//                   All Products
//                 </button>
//               </li>
//               {categories.map((e) => (
//                 <li key={e.id}>
//                   <button
//                     onClick={() => handleClick(e)}
//                     className={`px-6 py-2.5 rounded-full font-medium transition-all duration-200 whitespace-nowrap ${
//                       category === e.name
//                         ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
//                         : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                     }`}
//                   >
//                     {e.name}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Products Grid */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {data.length === 0 ? (
//           <div className="text-center py-16">
//             <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full mb-4">
//               <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
//               </svg>
//             </div>
//             <p className="text-xl text-gray-600 font-medium">No products found</p>
//             <p className="text-gray-500 mt-2">Try selecting a different category</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
//             {data.map((e) => (
//               <Link
//                 key={e.id}
//                 to={`/product/${e.id}`}
//                 state={{ product: e }}
//                 className="group bg-white rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
//               >
//                 <div className="aspect-square overflow-hidden bg-gray-100">
//                   <img
//                     src={e.images[0]}
//                     alt={e.name}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                 </div>
//                 <div className="p-5">
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
//                     {e.name}
//                   </h3>
//                   <div className="flex items-center justify-between">
//                     <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                       ₹{e.price}
//                     </p>
//                     <div className="flex items-center gap-1 text-yellow-500">
//                       <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
//                         <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
//                       </svg>
//                       <span className="text-sm font-medium text-gray-600">
//                         {e.rating || "4.5"}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         )}
//       </main>

//       {/* Custom scrollbar styles for horizontal scroll */}
//       <style jsx>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Home;



// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const categories = [
//   {
//     "id": "1",
//     "name": "Electronics",
//     "description": "Electronic devices and accessories",
//     "productCount": "10",
//     "image": "https://example.com/images/category-electronics.jpg"
//   },
//   {
//     "id": "2",
//     "name": "Clothing",
//     "description": "Apparel and fashion items",
//     "productCount": "10",
//     "image": "https://example.com/images/category-clothing.jpg"
//   },
//   {
//     "id": "3",
//     "name": "Footwear",
//     "description": "Shoes, boots, and sandals",
//     "productCount": "10",
//     "image": "https://example.com/images/category-footwear.jpg"
//   },
//   {
//     "id": "4",
//     "name": "Home & Kitchen",
//     "description": "Home essentials and kitchen appliances",
//     "productCount": "10",
//     "image": "https://example.com/images/category-home.jpg"
//   },
//   {
//     "id": "5",
//     "name": "Sports & Fitness",
//     "description": "Exercise equipment and athletic gear",
//     "productCount": "10",
//     "image": "https://example.com/images/category-sports.jpg"
//   }
// ];

// function Home() {
//   const [category, setCategory] = useState("");
//   const [data, setData] = useState([]);
//   const [searchItem, setSearchItem] = useState("");
//   const navigator = useNavigate();

//   const handleClick = (e) => {
//     setCategory(e);
//     setSearchItem(""); // Clear search when changing category
//   };

//   const handleSearch = (e) => {
//     setSearchItem(e.target.value);
//   };

//   const handleClearSearch = () => {
//     setSearchItem('');
//   };

//   const handleClearAll = () => {
//     setCategory('');
//     setSearchItem('');
//   };

//   const Filterfun = async () => {
//     try {
//       const fetchData = await fetch('/db.json');
//       const res = await fetchData.json();
//       const products = res.products;
//       let filteredData = products;

//       if (category !== "") {
//         filteredData = filteredData.filter((e) =>
//           e.category.toLowerCase() === category.toLowerCase()
//         );
//       }

//       if (searchItem.trim() !== "") {
//         filteredData = filteredData.filter((e) =>
//           e.name.toLowerCase().includes(searchItem.toLowerCase()) ||
//           e.description?.toLowerCase().includes(searchItem.toLowerCase()) ||
//           e.category.toLowerCase().includes(searchItem.toLowerCase())
//         );
//       }

//       setData(filteredData);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   useEffect(() => {
//     Filterfun();
//   }, [category, searchItem]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//       {/* Header */}
//       <header className="bg-white shadow-sm sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="flex flex-col gap-4">
//             {/* Title and Add Button Row */}
//             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//               <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 Products
//               </h1>
//               <Link
//                 to='/add'
//                 className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
//               >
//                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//                 </svg>
//                 Add New Product
//               </Link>
//             </div>

//             {/* Search Bar */}
//             <div className="relative w-full">
//               <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                 <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                 </svg>
//               </div>
//               <input
//                 type="text"
//                 placeholder="Search products by name, description, or category..."
//                 value={searchItem}
//                 onChange={handleSearch}
//                 className="w-full pl-12 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
//               />
//               {searchItem && (
//                 <button
//                   onClick={handleClearSearch}
//                   className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
//                 >
//                   <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>
//               )}
//             </div>

//             {/* Active Filters Display */}
//             {(category || searchItem) && (
//               <div className="flex flex-wrap items-center gap-2">
//                 <span className="text-sm text-gray-600 font-medium">Active filters:</span>
                
//                 {category && (
//                   <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
//                     Category: {category}
//                     <button
//                       onClick={() => setCategory("")}
//                       className="ml-2 hover:text-blue-600 transition-colors"
//                     >
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                       </svg>
//                     </button>
//                   </span>
//                 )}
                
//                 {searchItem && (
//                   <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
//                     Search: "{searchItem}"
//                     <button
//                       onClick={handleClearSearch}
//                       className="ml-2 hover:text-purple-600 transition-colors"
//                     >
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                       </svg>
//                     </button>
//                   </span>
//                 )}

//                 <button
//                   onClick={handleClearAll}
//                   className="px-3 py-1.5 bg-red-500 text-white text-sm font-medium rounded-full hover:bg-red-600 transition-colors"
//                 >
//                   Clear All
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </header>

//       {/* Categories Navigation */}
//       <nav className="bg-white border-b border-gray-200 sticky top-[200px] sm:top-[180px] z-40 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="overflow-x-auto scrollbar-hide">
//             <ul className="flex gap-2 py-4 min-w-max">
//               <li>
//                 <button
//                   onClick={() => handleClick("")}
//                   className={`px-6 py-2.5 rounded-full font-medium transition-all duration-200 whitespace-nowrap ${
//                     category === ""
//                       ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
//                       : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                   }`}
//                 >
//                   All Products
//                 </button>
//               </li>
//               {categories.map((e) => (
//                 <li key={e.id}>
//                   <button
//                     onClick={() => handleClick(e.name)}
//                     className={`px-6 py-2.5 rounded-full font-medium transition-all duration-200 whitespace-nowrap ${
//                       category === e.name
//                         ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
//                         : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                     }`}
//                   >
//                     {e.name}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Products Grid */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Results Count */}
//         <div className="mb-6">
//           <p className="text-gray-600">
//             {data.length === 0 ? (
//               <span className="font-medium text-gray-900">No products found</span>
//             ) : (
//               <>
//                 Showing <span className="font-semibold text-gray-900">{data.length}</span>{' '}
//                 {data.length === 1 ? 'product' : 'products'}
//                 {searchItem && <span> for "{searchItem}"</span>}
//                 {category && <span> in {category}</span>}
//               </>
//             )}
//           </p>
//         </div>

//         {data.length === 0 ? (
//           <div className="text-center py-16">
//             <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mb-4">
//               <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </div>
//             <p className="text-xl text-gray-600 font-medium mb-2">No products found</p>
//             <p className="text-gray-500">
//               {searchItem ? (
//                 <>
//                   Try searching with different keywords or{' '}
//                   <button
//                     onClick={handleClearSearch}
//                     className="text-blue-600 hover:underline font-medium"
//                   >
//                     clear your search
//                   </button>
//                 </>
//               ) : (
//                 "Try selecting a different category"
//               )}
//             </p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
//             {data.map((e) => (
//               <Link
//                 key={e.id}
//                 to={`/product/${e.id}`}
//                 state={{ product: e }}
//                 className="group bg-white rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
//               >
//                 <div className="aspect-square overflow-hidden bg-gray-100">
//                   <img
//                     src={e.images[0]}
//                     alt={e.name}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                 </div>
//                 <div className="p-5">
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
//                     {e.name}
//                   </h3>
//                   <p className="text-sm text-gray-500 mb-3">{e.category}</p>
//                   <div className="flex items-center justify-between">
//                     <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                       ₹{e.price}
//                     </p>
//                     <div className="flex items-center gap-1 text-yellow-500">
//                       <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
//                         <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
//                       </svg>
//                       <span className="text-sm font-medium text-gray-600">
//                         {e.rating || "4.5"}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         )}
//       </main>

//       {/* Custom scrollbar styles */}
//       <style jsx>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Home;