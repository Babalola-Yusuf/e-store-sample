import { useState,createContext } from "react";
import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";

export const ProductsContext = createContext();


const productsArray = [
    {
      id: 1,
      name: 'product 1',
      price: '1000',
      color: 'green',
      image: 'https://i.imgur.com/UsFIvYs.jpeg',
      starReviews: 3,
      description:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iure harum. Impedit, eligendi? Ab dolor dolores pariatur?',
      relatedProducts:[
        {id: 5, name: 'related product 1', price: '2000', color: 'red', image: 'https://i.imgur.com/e8tVZ2v.jpeg', starReviews: 2, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iure harum. Impedit, eligendi? Ab dolor dolores pariatur?'},
        {id: 6, name: 'related product 2', price: '3000', color: 'purple', image: 'https://i.imgur.com/c9o9w5Q.jpeg', starReviews: 3, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iure harum. Impedit, eligendi? Ab dolor dolores pariatur?' },
        {id: 7, name: 'related product 3', price: '4000', color: 'pink', image: 'https://i.imgur.com/ZKGofuB.jpeg', starReviews: 4, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iure harum. Impedit, eligendi? Ab dolor dolores pariatur?'},
        {id: 8, name: 'related product 4', price: '6000', color: 'brown', image: 'https://i.imgur.com/R2PN9Wq.jpeg', starReviews:3, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iure harum. Impedit, eligendi? Ab dolor dolores pariatur?'}
      ]
    },
    {
      id: 2,
      name: 'product 2',
      price: '500',
      color: 'blue',
      image: 'https://i.imgur.com/QkIa5tT.jpeg',
      starReviews: 4,
      description:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iure harum. Impedit, eligendi? Ab dolor dolores pariatur?',
      relatedProducts:[
        {id: 3, name: 'related product 1', price: '2000', color: 'red', image: 'https://i.imgur.com/e8tVZ2v.jpeg', starReviews: 2, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ips'},
        {id: 4, name: 'related product 2', price: '3000', color: 'purple', image: 'https://i.imgur.com/c9o9w5Q.jpeg', starReviews: 3, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iur'},
        {id: 5, name: 'related product 3', price: '4000', color: 'pink', image: 'https://i.imgur.com/ZKGofuB.jpeg', starReviews: 4, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iur'},
      ]
    },
    {
      id: 3,
      name: 'product 3',
      price: '4000',
      color: 'orange',
      image: 'https://i.imgur.com/ZKGofuB.jpeg',
      starReviews: 5,
      description:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iure harum. Impedit, eligendi? Ab dolor dolores pariatur?',
      relatedProducts:[
        {id: 1, name: 'related product 1', price: '2000', color: 'red', image: 'https://i.imgur.com/e8tVZ2v.jpeg', starReviews: 2, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ips'},
        {id: 2, name: 'related product 2', price: '3000', color: 'purple', image: 'https://i.imgur.com/c9o9w5Q.jpeg', starReviews: 3, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iur'},
        {id: 3, name: 'related product 3', price: '4000', color: 'pink', image: 'https://i.imgur.com/ZKGofuB.jpeg', starReviews: 4, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iur'}
      ]
    },
    {
      id: 4,
      name: 'product 4',
      price: '7000',
      color: 'yellow',
      image: 'https://i.imgur.com/R2PN9Wq.jpeg',
      starReviews: 2,
      description:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iure harum. Impedit, eligendi? Ab dolor dolores pariatur?',
      relatedProducts:[
        {id: 1, name: 'related product 1', price: '2000', color: 'red', image: 'https://i.imgur.com/e8tVZ2v.jpeg', starReviews: 2, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ips'},
        {id: 2, name: 'related product 2', price: '3000', color: 'purple', image: 'https://i.imgur.com/c9o9w5Q.jpeg', starReviews: 3, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iur'},
        {id: 3, name: 'related product 3', price: '4000', color: 'pink', image: 'https://i.imgur.com/ZKGofuB.jpeg', starReviews: 4, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iur'},
        {id: 4, name: 'related product 4', price: '6000', color: 'brown', image: 'https://i.imgur.com/R2PN9Wq.jpeg', starReviews:3, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iure harum.'}
      ]
    },
    {
      id: 5,
      name: 'product 5',
      price: '600',
      color: 'brown',
      image: 'https://i.imgur.com/mp3rUty.jpeg',
      starReviews: 4,
      description:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iure harum. Impedit, eligendi? Ab dolor dolores pariatur?',
      relatedProducts:[
        {id: 1, name: 'related product 1', price: '2000', color: 'red', image: 'https://i.imgur.com/e8tVZ2v.jpeg', starReviews: 2, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ips'},
        {id: 2, name: 'related product 2', price: '3000', color: 'purple', image: 'https://i.imgur.com/c9o9w5Q.jpeg', starReviews: 3, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iur'},
        {id: 3, name: 'related product 3', price: '4000', color: 'pink', image: 'https://i.imgur.com/ZKGofuB.jpeg', starReviews: 4, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iur'},
      ]
    },
    {
      id: 6,
      name: 'product 6',
      price: '2000',
      color: 'lemon',
      image: 'https://i.imgur.com/9LFjwpI.jpeg',
      starReviews: 1,
      description:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iure harum. Impedit, eligendi? Ab dolor dolores pariatur?',
      relatedProducts:[
        {id: 1, name: 'related product 1', price: '2000', color: 'red', image: 'https://i.imgur.com/e8tVZ2v.jpeg', starReviews: 2, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ips'},
        {id: 2, name: 'related product 2', price: '3000', color: 'purple', image: 'https://i.imgur.com/c9o9w5Q.jpeg', starReviews: 3, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iur'},
        {id: 3, name: 'related product 3', price: '4000', color: 'pink', image: 'https://i.imgur.com/ZKGofuB.jpeg', starReviews: 4, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iur'},
      ]
    },
    {
      id: 7,
      name: 'product 7',
      price: '1000',
      color: 'deep blue',
      image: 'https://i.imgur.com/R3iobJA.jpeg',
      starReviews: 4,
      description:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iure harum. Impedit, eligendi? Ab dolor dolores pariatur?',
      relatedProducts:[
        {id: 1, name: 'related product 1', price: '2000', color: 'red', image: 'https://i.imgur.com/e8tVZ2v.jpeg', starReviews: 2, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ips'},
        {id: 2, name: 'related product 2', price: '3000', color: 'purple', image: 'https://i.imgur.com/c9o9w5Q.jpeg', starReviews: 3, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iur'},
        {id: 3, name: 'related product 3', price: '4000', color: 'pink', image: 'https://i.imgur.com/ZKGofuB.jpeg', starReviews: 4, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iur'},
      ]
    },
    {
      id: 8,
      name: 'product 8',
      price: '5000',
      color: 'maroon',
      image: 'https://i.imgur.com/wXuQ7bm.jpeg',
      starReviews: 5,
      description:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iure harum. Impedit, eligendi? Ab dolor dolores pariatur?',
      relatedProducts:[
        {id: 1, name: 'related product 1', price: '2000', color: 'red', image: 'https://i.imgur.com/e8tVZ2v.jpeg', starReviews: 2, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ips'},
        {id: 2, name: 'related product 2', price: '3000', color: 'purple', image: 'https://i.imgur.com/c9o9w5Q.jpeg', starReviews: 3, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iur'},
        {id: 3, name: 'related product 3', price: '4000', color: 'pink', image: 'https://i.imgur.com/ZKGofuB.jpeg', starReviews: 4, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iur'},
      ]
    },
  ];

export const ProductPageProvider = ({ children }) => {
    const [products, setProducts] = useState(productsArray);

    const onShowDescription = (product)=>{
      return(product)
    }  
    return (
        <ProductsContext.Provider value={{products, setProducts, onShowDescription }}>
            {children}
        </ProductsContext.Provider>
    )
}


const ProductPage = () => {
    return (
      <div className="bg-white-smoke">
        <Header/>
        <Card />
        <Footer/>
      </div>
         
    )
}

export default ProductPage;