import { useContext } from 'react'
import { cartContext } from '../../context/cartContext'

const Cart = () => {
  const { cartItems,removeItem,updateQuantity } = useContext(cartContext)

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
    <>

      <div className="cart">
        <h1>Cart</h1>

        {cartItems.length === 0 ? (
          <p className="empty">Your cart is empty 🛒</p>
        ) : (
          <>
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                
                <img
                  src={item.images}
                  alt={item.name}
                  onError={(e) =>
                    (e.target.src = 'https://via.placeholder.com/150')
                  }
                />

                <div className="details">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>

                  <div className="qty">
                    <button onClick={() => updateQuantity(item.id, 'DEC')}>
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => updateQuantity(item.id, 'INC')}>
                      +
                    </button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <h2 className="total">Total: ₹{total}</h2>
          </>
        )}
      </div>
    </>
  )
}

export default Cart