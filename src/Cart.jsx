/* src/components/Cart.jsx */
import React, { createContext, useContext, useState, useEffect } from 'react';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import Notification from './Notification';

export const cartContext = createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState({ message: '', type: '' });

  useEffect(() => {
    console.log('Updated cart:', cart);
  }, [cart]);

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    console.log('Notification set:', { message, type }); // Add this log
    setTimeout(() => setNotification({ message: '', type: '' }), 3000); // Auto-clear after 3s
  };

  const onAddToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    showNotification(`${product.name} has been added to the cart`, 'success');
  };

  const removeItem = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
    showNotification(`${product.name} has been removed from the cart`, 'info');
  };

  const onIncreaseQuantity = (product) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    showNotification(`Increased quantity of ${product.name}`, 'info');
  };

  const onDecreaseQuantity = (product) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter(item => item.quantity > 0)
    );
    if (product.quantity > 1) {
      showNotification(`Decreased quantity of ${product.name}`, 'info');
    } else {
      showNotification(`${product.name} has been removed from the cart`, 'warning');
    }
  };

  return (
    <cartContext.Provider
      value={{
        cart,
        onAddToCart,
        removeItem,
        onIncreaseQuantity,
        onDecreaseQuantity,
      }}
    >
      {children}
      {notification.message && <Notification message={notification.message} type={notification.type} />}
    </cartContext.Provider>
  );
}

const CartItem = ({ item, onIncreaseQuantity, onDecreaseQuantity, removeItem }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
    }).format(price);
  };

  return (
    <div className="mb-5 md:flex md:gap-5 md:items-center border-light-brown border-b border-l p-2.5 md:p-5 shadow-md">
      <img src={item.image} alt={item.name} className="max-w-80" />
      <div className="md:w-fit flex gap-5 justify-between items-center">
        <div className="flex flex-col gap-4">
          <p>{item.name}</p>
          <p>Quantity: {item.quantity}</p>
          <p>{formatPrice(item.price)}</p>
          <button
            className="relative overflow-hidden rounded-md bg-red-700 px-2 py-1 text-white transition-all duration-300 active:-translate-y-1 active:scale-x-90 active:scale-y-110"
            onClick={() => removeItem(item)}
          >
            Remove
          </button>
        </div>
        <div className="w-24 flex items-center justify-between">
          <button
            className="relative overflow-hidden rounded-md p-2 bg-purple text-white-smoke hover:bg-light-blue hover:text-white duration-300 active:translate-y-1 active:scale-x-110 active:scale-y-90"
            onClick={() => onIncreaseQuantity(item)}
            aria-label="Increase Quantity"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
          {item.quantity}
          <button
            className="relative overflow-hidden rounded-md p-2 bg-purple text-white-smoke hover:bg-light-blue hover:text-white duration-300 active:translate-y-1 active:scale-x-110 active:scale-y-90"
            onClick={() => onDecreaseQuantity(item)}
            aria-label="Decrease Quantity"
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
      </div>
    </div>
  );
};

const CartSummary = ({ subTotal, discount, shippingFee, total }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
    }).format(price);
  };

  return (
    <div className="border-2 border-light-brown p-5 h-max flex flex-col gap-2 shadow-2xl m-3">
      <h3 className="font-bold">Cart Summary</h3>
      <p className="flex gap-5 justify-between">
        Sub-total <span className="w-24">{formatPrice(subTotal)}</span>
      </p>
      <p className="flex gap-5 justify-between">
        Discount <span className="w-24">{formatPrice(discount)}</span>
      </p>
      <p className="flex gap-5 justify-between">
        Shipping Fee <span className="w-24">{formatPrice(shippingFee)}</span>
      </p>
      <p className="flex gap-5 justify-between border-y-2 border-purple">
        Total <span className="w-24">{formatPrice(total)}</span>
      </p>
      <button className="border rounded border-light-brown bg-purple text-white-smoke duration-300 active:translate-y-1 active:scale-x-110 active:scale-y-90">
        Proceed to checkout
      </button>
    </div>
  );
};

const Cart = () => {
  const { cart, removeItem, onIncreaseQuantity, onDecreaseQuantity } = useContext(cartContext);

  const subTotal = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  const discount = 0.1 * subTotal;
  const shippingFee = 1000;
  const total = subTotal - discount + shippingFee;

  return (
    <div className="bg-white-smoke">
      <h2 className="text-3xl">Cart</h2>
      <div className="md:flex">
        <div className="md:border-r border-light-brown pr-5 mr-5 flex flex-col items-center md:items-start md:shadow-md">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncreaseQuantity={onIncreaseQuantity}
              onDecreaseQuantity={onDecreaseQuantity}
              removeItem={removeItem}
            />
          ))}
        </div>
        <CartSummary
          subTotal={subTotal}
          discount={discount}
          shippingFee={shippingFee}
          total={total}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
