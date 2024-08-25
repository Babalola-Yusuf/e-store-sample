import { useState,createContext } from "react";
import Card from "./Card";
import Footer from "./Footer";

export const ProductsContext = createContext();


const productsArray = [
    {
      id: 1,
      name: 'product 1',
      price: '1000',
      color: 'green',
      image:  [
        "https://i.imgur.com/R3iobJA.jpeg",
        "https://i.imgur.com/Wv2KTsf.jpeg",
        "https://i.imgur.com/76HAxcA.jpeg"
    ], 
      starReviews: 3,
      description:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iure harum. Impedit, eligendi? Ab dolor dolores pariatur?',
      relatedProducts:[
        {id: 5, name: 'related product 1', price: '2000', color: 'red', image: [
       "https://i.imgur.com/cBuLvBi.jpeg",
        "https://i.imgur.com/N1GkCIR.jpeg",
        "https://i.imgur.com/kKc9A5p.jpeg"
      ], starReviews: 2, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iure harum. Impedit, eligendi? Ab dolor dolores pariatur?'},
        {id: 6, name: 'related product 2', price: '3000', color: 'purple', image: [
          "https://i.imgur.com/KeqG6r4.jpeg",
          "https://i.imgur.com/xGQOw3p.jpeg",
          "https://i.imgur.com/oO5OUjb.jpeg"
      ], starReviews: 3, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iure harum. Impedit, eligendi? Ab dolor dolores pariatur?' },
        {id: 7, name: 'related product 3', price: '4000', color: 'pink', image: [
          "https://i.imgur.com/KeqG6r4.jpeg",
          "https://i.imgur.com/xGQOw3p.jpeg",
          "https://i.imgur.com/oO5OUjb.jpeg"
      ], starReviews: 4, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iure harum. Impedit, eligendi? Ab dolor dolores pariatur?'}
      ]
    },
    {
      id: 2,
      name: 'product 2',
      price: '500',
      color: 'blue',
      image: [
        "https://i.imgur.com/cBuLvBi.jpeg",
        "https://i.imgur.com/N1GkCIR.jpeg",
        "https://i.imgur.com/kKc9A5p.jpeg"
    ],
      starReviews: 4,
      description:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iure harum. Impedit, eligendi? Ab dolor dolores pariatur?',
      relatedProducts:[
        {id: 3, name: 'related product 1', price: '2000', color: 'red', image: [
          "https://i.imgur.com/R3iobJA.jpeg",
          "https://i.imgur.com/Wv2KTsf.jpeg",
          "https://i.imgur.com/76HAxcA.jpeg"
      ], starReviews: 2, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ips'},
        {id: 4, name: 'related product 2', price: '3000', color: 'purple', image: [
          "https://i.imgur.com/cBuLvBi.jpeg",
          "https://i.imgur.com/N1GkCIR.jpeg",
          "https://i.imgur.com/kKc9A5p.jpeg"
      ], starReviews: 3, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iur'},
        {id: 5, name: 'related product 3', price: '4000', color: 'pink', image: [
          "https://i.imgur.com/KeqG6r4.jpeg",
          "https://i.imgur.com/xGQOw3p.jpeg",
          "https://i.imgur.com/oO5OUjb.jpeg"
      ], starReviews: 4, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iur'},
      ]
    },
    {
      id: 3,
      name: 'product 3',
      price: '4000',
      color: 'orange',
      image: [
        "https://i.imgur.com/KeqG6r4.jpeg",
        "https://i.imgur.com/xGQOw3p.jpeg",
        "https://i.imgur.com/oO5OUjb.jpeg"
    ],
      starReviews: 5,
      description:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iure harum. Impedit, eligendi? Ab dolor dolores pariatur?',
      relatedProducts:[
        {id: 1, name: 'related product 1', price: '2000', color: 'red', image: [
          "https://i.imgur.com/KeqG6r4.jpeg",
          "https://i.imgur.com/xGQOw3p.jpeg",
          "https://i.imgur.com/oO5OUjb.jpeg"
      ], starReviews: 2, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ips'},
        {id: 2, name: 'related product 2', price: '3000', color: 'purple', image: [
          "https://i.imgur.com/R3iobJA.jpeg",
          "https://i.imgur.com/Wv2KTsf.jpeg",
          "https://i.imgur.com/76HAxcA.jpeg"
      ], starReviews: 3, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iur'},
        {id: 3, name: 'related product 3', price: '4000', color: 'pink', image: [
          "https://i.imgur.com/cBuLvBi.jpeg",
          "https://i.imgur.com/N1GkCIR.jpeg",
          "https://i.imgur.com/kKc9A5p.jpeg"
      ], starReviews: 4, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iur'}
      ]
    },
    {
      id: 4,
      name: 'product 4',
      price: '7000',
      color: 'yellow',
      image: [
        "https://i.imgur.com/Y54Bt8J.jpeg",
        "https://i.imgur.com/SZPDSgy.jpeg",
        "https://i.imgur.com/sJv4Xx0.jpeg"
    ],
      starReviews: 2,
      description:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iure harum. Impedit, eligendi? Ab dolor dolores pariatur?',
      relatedProducts:[
        {id: 1, name: 'related product 1', price: '2000', color: 'red', image: [
          "https://i.imgur.com/Y54Bt8J.jpeg",
          "https://i.imgur.com/SZPDSgy.jpeg",
          "https://i.imgur.com/sJv4Xx0.jpeg"
      ], starReviews: 2, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ips'},
        {id: 2, name: 'related product 2', price: '3000', color: 'purple', image: [
          "https://i.imgur.com/9DqEOV5.jpeg",
          "https://i.imgur.com/ae0AEYn.jpeg",
          "https://i.imgur.com/mZ4rUjj.jpeg"
      ], starReviews: 3, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iur'},
        {id: 3, name: 'related product 3', price: '4000', color: 'pink', image: [
            "https://i.imgur.com/9DqEOV5.jpeg",
            "https://i.imgur.com/ae0AEYn.jpeg",
            "https://i.imgur.com/mZ4rUjj.jpeg"
      
      ], starReviews: 4, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iur'},
      ]
    },
    {
      id: 5,
      name: 'product 5',
      price: '600',
      color: 'brown',
      image: [
        "https://i.imgur.com/9DqEOV5.jpeg",
        "https://i.imgur.com/ae0AEYn.jpeg",
        "https://i.imgur.com/mZ4rUjj.jpeg"
    ],
      starReviews: 4,
      description:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iure harum. Impedit, eligendi? Ab dolor dolores pariatur?',
      relatedProducts:[
        {id: 1, name: 'related product 1', price: '2000', color: 'red', image: ['https://i.imgur.com/e8tVZ2v.jpeg'], starReviews: 2, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ips'},
        {id: 2, name: 'related product 2', price: '3000', color: 'purple', image: ['https://i.imgur.com/c9o9w5Q.jpeg'], starReviews: 3, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iur'},
        {id: 3, name: 'related product 3', price: '4000', color: 'pink', image: ['https://i.imgur.com/ZKGofuB.jpeg'], starReviews: 4, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iur'},
      ]
    },
    {
      id: 6,
      name: 'product 6',
      price: '2000',
      color: 'lemon',
      image: [
        "https://i.imgur.com/ZANVnHE.jpeg",
        "https://i.imgur.com/Ro5z6Tn.jpeg",
        "https://i.imgur.com/woA93Li.jpeg"
    ],
      starReviews: 1,
      description:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iure harum. Impedit, eligendi? Ab dolor dolores pariatur?',
      relatedProducts:[
        {id: 1, name: 'related product 1', price: '2000', color: 'red', image: ['https://i.imgur.com/e8tVZ2v.jpeg'], starReviews: 2, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ips'},
        {id: 2, name: 'related product 2', price: '3000', color: 'purple', image: ['https://i.imgur.com/c9o9w5Q.jpeg'], starReviews: 3, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iur'},
        {id: 3, name: 'related product 3', price: '4000', color: 'pink', image: ['https://i.imgur.com/ZKGofuB.jpeg'], starReviews: 4, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iur'},
      ]
    },
    {
      id: 7,
      name: 'product 7',
      price: '1000',
      color: 'deep blue',
      image: [
        "https://i.imgur.com/yVeIeDa.jpeg",
        "https://i.imgur.com/jByJ4ih.jpeg",
        "https://i.imgur.com/KXj6Tpb.jpeg"
    ],
      starReviews: 4,
      description:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iure harum. Impedit, eligendi? Ab dolor dolores pariatur?',
      relatedProducts:[
        {id: 1, name: 'related product 1', price: '2000', color: 'red', image: ['https://i.imgur.com/e8tVZ2v.jpeg'], starReviews: 2, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ips'},
        {id: 2, name: 'related product 2', price: '3000', color: 'purple', image: ['https://i.imgur.com/c9o9w5Q.jpeg'], starReviews: 3, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iur'},
        {id: 3, name: 'related product 3', price: '4000', color: 'pink', image: ['https://i.imgur.com/ZKGofuB.jpeg'], starReviews: 4, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iur'},
      ]
    },
    {
      id: 8,
      name: 'product 8',
      price: '5000',
      color: 'maroon',
      image: [
        "https://i.imgur.com/keVCVIa.jpeg",
        "https://i.imgur.com/afHY7v2.jpeg",
        "https://i.imgur.com/yAOihUe.jpeg"
    ],
      starReviews: 5,
      description:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iure harum. Impedit, eligendi? Ab dolor dolores pariatur?',
      relatedProducts:[
        {id: 1, name: 'related product 1', price: '2000', color: 'red', image: ['https://i.imgur.com/e8tVZ2v.jpeg'], starReviews: 2, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ips'},
        {id: 2, name: 'related product 2', price: '3000', color: 'purple', image: ['https://i.imgur.com/c9o9w5Q.jpeg'], starReviews: 3, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iur'},
        {id: 3, name: 'related product 3', price: '4000', color: 'pink', image: ['https://i.imgur.com/ZKGofuB.jpeg'], starReviews: 4, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque dolores neque, veritatis dignissimos non, recusandae saepe blanditiis impedit eum ipsa eius iur'},
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
        <Card />
        <Footer/>
      </div>
         
    )
}

export default ProductPage;