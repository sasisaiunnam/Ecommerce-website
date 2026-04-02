import React, { useState } from 'react'


function AddProduct() {
    const productDetails ={
        id: 51,
    name:'',
    category: "Sports & Fitness",
    price: 49.99,
    currency: "USD",
    stock: 90,
    rating: 4.5,
    reviews: 467,
    description: "Cast iron kettlebell with wide handle for comfortable grip.",
    specifications: {
      brand: "IronStrength",
      weights: ["10 lbs", "15 lbs", "20 lbs", "25 lbs", "30 lbs"],
      material: "Cast iron",
      coating: "Powder coated",
      features: "Wide handle, Flat base"
    },
    images: ["https://example.com/images/kettlebell-1.jpg"],
    inStock: true,
    discount: 0
        
    }
    const [newProduct,setNewProduct] = useState(productDetails);

    const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };
      console.log("name",newProduct)
      console.log("sasd")

  return (
    <div className='bg-blue-300'>
        <p>wellooow</p>
        <input className='text-black' type='text'name='name' value={newProduct.name} onChange={handleChange}/>
      {newProduct.name}
      {newProduct.category}
    </div>
  )
}

export default AddProduct
