import React, { useState, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { cartContext } from "./Cart";
import { ProductsContext } from './ProductPage';
import { useLocation, useNavigate } from 'react-router-dom'; 
import Footer from './Footer';

function ProductDescriptionPage() {
    const { state } = useLocation();
    const { product } = state || {};
    const { onShowDescription } = useContext(ProductsContext);
    const { onAddToCart } = useContext(cartContext);
    const navigate = useNavigate();
    const [clickedProduct, setClickedProduct] = useState(null);
    const [productNavButton, setProductNavButton] = useState('productDescription');
    const [isSelected, setIsSelected] = useState(product?.image?.[0]);

    useEffect(() => {
        if (product) {
            const detailedProduct = onShowDescription(product); 
            setClickedProduct(detailedProduct);
            setIsSelected(detailedProduct?.image?.[0]);
        }
    }, [product, onShowDescription]);

    const handleProductClick = (relatedProduct) => {
        navigate('/product-page', { state: { product: relatedProduct } });
    }

    if (!clickedProduct) {
        return (
            <div>
                <p>No product selected</p>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <div className='p-2.5 md:p-5 bg-white-smoke'>
                <h1 className='font-bold text-3xl mb-5'>{clickedProduct.name}</h1>
                <div className='md:flex gap-5 mb-5 max-w-96'>   
                    {isSelected && (
                        <img src={isSelected} alt={clickedProduct.name} className='shadow-xl' />
                    )}
                    <div className='flex flex-col gap-5 mt-5'>
                        <div className='flex gap-5'> 
                            <div className='p-5 flex flex-col gap-5 w-60 border border-light-brown shadow-md'>
                                <h1>{clickedProduct.name}</h1>
                                <p className='flex justify-between'>Price: <span className='w-14'>{clickedProduct.price}</span></p>
                                <p className='flex justify-between'>Color: <span className='w-14'>{clickedProduct.color}</span></p>
                                <p className='flex justify-between'>Rating: <span className='w-14'>{clickedProduct.starReviews} stars</span></p>
                            </div>
                            <div>
                                <button
                                    className="border border-light-brown shadow-md hover:bg-light-blue text-sm font-bold py-1 px-2 rounded flex gap-2 items-center justify-center mt-1 w-36 duration-300 active:translate-y-1 active:scale-x-110 active:scale-y-90"
                                    onClick={() => onAddToCart(clickedProduct)}
                                >
                                    Add to cart <span className="text-purple-700 group-hover:animate-pulse group-hover:text-xl"><FontAwesomeIcon icon={faCartShopping} /></span>
                                </button>
                            </div>
                        </div>
                        <div className='more-images flex gap-5'>
                            {clickedProduct.image?.map((image) => (
                                <img
                                    key={image}
                                    src={image}
                                    alt={clickedProduct.name}
                                    className={`max-w-20 shadow-md hover:cursor-pointer hover:border-2 hover:border-light-blue ease-linear duration-100 ${isSelected === image ? 'border-2 border-purple' : ''}`}
                                    onClick={() => setIsSelected(image)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='md:w-3/4'>
                        <div className='flex gap-5'>
                            <label className='hover:cursor-pointer focus-within:border-b-2 border-blue-400 ease-in-out duration-100'>
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
                            <label className='hover:cursor-pointer focus-within:border-b-2 border-blue-400 ease-in-out duration-100'>
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
                            {productNavButton === 'productDescription' && (
                                <div className='border-t-2 border-purple p-5'>
                                    <h2 className='font-bold'>Product description</h2>
                                    <p>{clickedProduct.description}</p>
                                </div>
                            )}
                            {productNavButton === 'productSpecification' && (
                                <div className='border-t-2 border-purple p-5'>
                                    <h2 className='font-bold'>Product specification</h2>
                                    <div className='md:flex gap-5'>
                                        <div className='mb-5'>
                                            <p>name: {clickedProduct.specification?.name}</p>
                                            <p>fit: {clickedProduct.specification?.fit}</p>
                                            <p>Brand: {clickedProduct.specification?.brand}</p>
                                            <p>Material: {clickedProduct.specification?.material}</p>
                                        </div>
                                        <div className='text-sm'>
                                            <h3>Additional features:</h3>
                                            <div className='flex gap-5 items-center mb-2'>
                                                <p className='w-24 sm:w-40 bg-dark-brown text-white-smoke pl-1'>size:</p>
                                                <ul className='flex gap-1 md:gap-2 bg-white px-1 w-full'>
                                                    {clickedProduct.specification?.sizesAvailable?.map((size, index) => (
                                                        <li key={index}>{size}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            
                                            <div className='flex gap-5 items-center mb-2'>
                                                <p className='w-24 sm:w-40 bg-light-brown text-white-smoke pl-1'>Color options:</p>
                                                <ul className='flex gap-1 md:gap-2 bg-white px-1 w-full'>
                                                    {clickedProduct.specification?.colorOptions?.map((colorOption, index) => (
                                                        <li key={index}>{colorOption}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className='flex gap-5 items-center mb-2'>
                                                <p className='w-24 sm:w-40 bg-dark-brown text-white-smoke pl-1'>Features:</p>
                                                <ul className='flex gap-1 md:gap-2 bg-white px-1 w-full'>
                                                    {clickedProduct.specification?.features?.map((feature, index) => (
                                                        <li key={index}>{feature}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                            )}
                        </div> 
                    </div>
                </div>
                <div className='max-w-full'>
                    <h2 className='text-center m-3'>Related Products</h2>
                    {clickedProduct.relatedProducts && (
                        <div className='flex gap-5 justify-center'>
                            {clickedProduct.relatedProducts.map((relatedProduct) => (
                                <div key={relatedProduct.id} onClick={() => handleProductClick(relatedProduct)} className='hover:cursor-pointer group'>
                                    <img src={relatedProduct.image} alt={relatedProduct.name} className='max-w-40' />
                                    <p>{relatedProduct.name}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProductDescriptionPage;
