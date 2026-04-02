import React, { useState,useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { cartContext } from '../../context/cartContext'



function ProductDetails() {
  const navigation = useNavigate()
    const{id} = useParams()
const {state} = useLocation();

const { addToCart,cartItems } = useContext(cartContext)

const [product,setProduct] = useState(state?.product||null);

if (!product) {
    return <p>No product found ❗</p>;
  }

  const handleAddToCart = (e, product) => {
    e.preventDefault(); // Prevent Link navigation
    e.stopPropagation(); // Stop event bubbling
    addToCart(product);
      console.log("CART:", cartItems)

  }

  return (
    <div>
       <div>
        <p>hello</p>
        <p>{product.name}</p>
        <p>{product.price}</p>
         <button type='button' style={{backgroundColor:'lightblue',cursor:'pointer',borderRadius:'5px'}} onClick={(event) => handleAddToCart(event, product)}>
                add to cart
          </button>
        <button onClick={() => navigation('/Home')}>Back</button>
       </div>
      
    </div>
  )
}

export default ProductDetails
