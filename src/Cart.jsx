import React from 'react'
import { createContext, useContext, useState, useEffect } from 'react'
import Header from './Header';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

export const cartContext = createContext()

export function CartContextProvider({children}) {
    const [cart, setCart] = useState([]);

    useEffect( ()=>{
        console.log('updated cart', cart);
    }, [cart]);

    const onAddToCart = (product)=>{
        // add item to cart  
        setCart((prevCart) =>{
            const existingProduct = prevCart.find(item => item.id === product.id);
            if(existingProduct ){
                return prevCart.map(item =>
                    item.id === product.id ? {...item, quantity: item.quantity + 1} : item
                )
            }
            else {
                return [...prevCart , {...product, quantity:1}]
            };
        }
       
    )
    }

    const removeItem = (product) => {
        setCart(prevCart => prevCart.filter(item => item.id!== product.id))
    }

    const onIncreaseQuantity = (product) => {
        setCart(prevCart => prevCart.map(item =>
            item.id === product.id? {...item, quantity: item.quantity + 1} : item
        ))
    }
    
    const onDecreaseQuantity = (product) => {
        if(product.quantity > 1){
            setCart(prevCart => prevCart.map(item =>
                item.id === product.id? {...item, quantity: item.quantity - 1} : item
            ))
        }
    }
    return (
        <cartContext.Provider value={{cart, onAddToCart, removeItem, onIncreaseQuantity, onDecreaseQuantity}}>
            {children}
        </cartContext.Provider>
    )
}

const Cart = () => {
    const { cart, removeItem, onIncreaseQuantity, onDecreaseQuantity } = useContext(cartContext)
    const formatPrice = (price) => {
        return new Intl.NumberFormat("en-NG", {
            style: "currency",
            currency: "NGN",
        }).format(price);
    }
    const subTotal = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
    const discount = 0.1 * subTotal;
    const shippingFee = 1000;
    const total = subTotal - discount + shippingFee;

    return (
        <div className='bg-white-smoke'>
            <Header/>
             <h2 className='text-3xl'>Cart</h2>
             <div className='md:flex'>
             <div className=' md:border-r border-light-brown pr-5 mr-5 flex flex-col items-center md:items-start md:shadow-md'>
                {cart.map((item) => (
                        <div key={item.id} className=' mb-5 md:flex md:gap-5 md:items-cente border-light-brown border-b border-l p-2.5 md:p-5 shadow-md '>
                            <img src={item.image} alt={item.name} className='max-w-80' />
                            <div className='md:w-fit flex gap-5 justify-between items-center '>
                                <div className=' flex flex-col gap-4'>
                                    <p>{item.name}</p>
                                    <p>quantity:    {item.quantity}</p>
                                    <p>{formatPrice(item.price)}</p> 
                                    <button className="relative overflow-hidden rounded-md bg-red-700 px-2 py-1 text-white transition-all duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:-translate-y-1 active:scale-x-90 active:scale-y-110" onClick={()=> removeItem(item)} >Remove</button>  
                                </div>

                                <div className='w-24 flex items-center justify-between'>
                                    <button className="relative overflow-hidden rounded-md p-2  bg-purple text-white-smoke hover:bg-light-blue hover:text-white  duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-110 active:scale-y-90" onClick={()=> onIncreaseQuantity(item)}>
                                    <FontAwesomeIcon icon={faPlus}/>
                                    </button>
                                        {item.quantity}
                                    <button className="relative overflow-hidden rounded-md p-2  bg-purple text-white-smoke hover:bg-light-blue hover:text-white  duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-110 active:scale-y-90" onClick={()=> onDecreaseQuantity(item)}>
                                    <FontAwesomeIcon icon={faMinus}/>
                                    </button>   
                                </div>
                            </div>                        
                        </div>
                ))}
            </div>
            <div className='border-2 border-light-brown p-5 h-max flex flex-col gap-2 shadow-2xl m-3' >
                    <h3 className='font-bold' >Cart Summary</h3>
                    <p className='flex gap-5 justify-between'> Sub-total <span className='w-24'>{formatPrice(subTotal)} </span> </p>
                    <p className='flex gap-5 justify-between'>discount <span className='w-24'>{formatPrice(discount)}</span> </p>
                    <p className='flex gap-5 justify-between'>shipping fee <span className='w-24'>{formatPrice(shippingFee)}</span> </p>
                    <p className='flex gap-5 justify-between border-y-2 border-purple'>Total <span className='w-24'>{formatPrice(total)}</span> </p>
                    <button className='border rounded border-light-brown bg-purple text-white-smoke duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-110 active:scale-y-90'>Proceed to checkout</button>     
            </div>
             </div>
            
                 <Footer/>
        </div>
    )
}

export default Cart
