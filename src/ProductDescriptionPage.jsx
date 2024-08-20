import React, { useState, useContext, useEffect } from 'react';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { cartContext } from "./Cart";
import { ProductsContext } from './ProductPage';
import { useLocation } from 'react-router-dom'; // Import useLocation
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Footer from './Footer';

function ProductDescriptionPage() {
    const { state } = useLocation(); // Use useLocation to get the state
    const { product } = state || {}; // Destructure product from state  
    const { onShowDescription} = useContext(ProductsContext);
    const { onAddToCart } = useContext(cartContext);
    const navigate = useNavigate(); // Initialize useNavigate
    const [clickedProduct, setClickedProduct] = useState(null);
    const [productNavButton, setProductNavButton] = useState('productDescription');
    const [isFavorited, setIsFavorited] = useState(false);
    const [isSelected, setIsSelected] = useState(product.image[0]);

    useEffect(() => {
        if (product) {
            const detailedProduct = onShowDescription(product);
            setClickedProduct(detailedProduct);
        }
    }, [product, onShowDescription]);

    const handleProductClick = (product) =>{
        navigate('/product-page', { state: { product } }); // Pass the product object using state
    }

    return (
        <div>
            <Header />
            {clickedProduct ? (
                <div className=' p-2.5 md:p-5 bg-white-smoke'>
                    <h1 className='font-bold text-3xl mb-5'>{clickedProduct.name}</h1>
                    <div className='md:flex gap-5 mb-5 max-w-96'>   
                        <img src={isSelected} alt={clickedProduct.name} className=' shadow-md ' />
                        <div className='flex flex-col gap-5 mt-5'>
                            <div className='flex gap-5 '>
                                <div className=' md:p-5 flex flex-col gap-5 w-60 border border-light-brown shadow-md'>
                                <h1>{clickedProduct.name}</h1>
                                <p className='flex justify-between'>Price: <span className='w-14'>{clickedProduct.price}</span></p>
                                <p className='flex justify-between'>Color: <span className='w-14'>{clickedProduct.color}</span></p>
                                <p className='flex justify-between'>Rating: <span className='w-14'>{clickedProduct.starReviews} stars</span></p>
                                </div>
                                <div>
                                <button
                                    className="border border-light-brown shadow-md hover:bg-light-blue text-sm font-bold py-1 px-2 rounded flex gap-2 items-center justify-center mt-1"
                                    onClick={() => onAddToCart(product)}
                                >
                                    Add to cart <span className="text-purple-700 group-hover:animate-pulse group-hover:text-xl"><FontAwesomeIcon icon={faCartShopping} /></span>
                                </button>
                                </div>
                            
                            </div>
                            <div className='more-images flex gap-5'>
                                {product.image.map((image) =>{
                                     return <img key={image} src={image} alt={clickedProduct.name} className='max-w-20 shadow-md ' onClick={() => setIsSelected(image)} />
                                })}
                            </div>
                        </div>
                        
                        
                    </div>
                                   
                     <div className='flex justify-center'>
                     <div className=' w-3/4'>
                        <div className='flex gap-5'>
                            <label className='hover:cursor-pointer focus-within:border-b-2 border-blue-400 ease-in-out duration-100 ' >
                                <input 
                                className='absolute opacity-0 w-0'
                                type="radio" 
                                value='productDescription' 
                                name='productNav'
                                checked={productNavButton === 'productDescription'} 
                                onChange={(e) => setProductNavButton(e.target.value)} 
                                />
                                Product description
                            </label>
                            <label className='hover:cursor-pointer focus-within:border-b-2 border-blue-400 ease-in-out duration-100 '>
                                <input 
                                className='absolute opacity-0 w-0'
                                type="radio" 
                                value='productSpecification'
                                name='productNav' 
                                checked={productNavButton === 'productSpecification'} 
                                onChange={(e) => setProductNavButton(e.target.value)} 
                                />
                                Product specification
                            </label>
                           
                        </div>

                        <div className='flex'>
                           
                            {
                                productNavButton === 'productDescription' && (
                                <div className='border-t-2 border-blue-700 p-5'>
                                    <h2 className='font-bold'>Product description</h2>
                                    <p>{clickedProduct.description}</p>
                                    <p>hello</p>
                                </div>)
                            }
                            {
                                productNavButton === 'productSpecification' && (
                                <div className='border-t-2 border-blue-700 p-5'>
                                    <h2 className='font-bold'>Product speicification </h2>
                                    <p>{clickedProduct.description}</p>
                                    <p>hi</p>
                                </div>)
                            }
                        </div> 
                       
                        
                    </div>
                     </div>
                    

                    <div className=' max-w-full bg-blue-100'>
                        <h2 className='text-center m-3'>Related Products</h2>
                         {/* Map over relatedProducts and render them */}
                         {clickedProduct && clickedProduct.relatedProducts && (
                        <div className='flex gap-5 justify-center'>
                            {clickedProduct.relatedProducts.map((relatedProduct) => (
                                
                            <div key={relatedProduct.id} onClick={()=> handleProductClick(relatedProduct)} className='hover:cursor-pointer group'>
                                <img src={relatedProduct.image} alt={relatedProduct.name} className='max-w-40 ' />
                                <p>{relatedProduct.name}</p>
                            </div>
                            ))}
                        </div>
                        )}
                     </div>
                </div>
            ) : (
                <p>No product selected</p>
            )}
            <Footer />
        </div>
    );
}

export default ProductDescriptionPage;
