import React from 'react';
import '../../src/Content.css';


const PopularProducts =({products, addItem})=>{
    console.log("Data", products)

    const add = (value) =>{
      const [title, image] = value.split('|');
        window.alert("Added to the cart");
        addItem({title,image})
      }  

    return(
        <div>
        <h2 class="top">Our Top Products</h2>
        <div className="container">
            
        <div className="grid"> 
           
            {products?.map((product) =>
            <div item key={product.id}>
                <div class="content">
                <img class= "content_img" alt="Product Image" src={product.image} height="450px" width="350px"></img>
                <h3>{product.title}</h3>
                <h5>Category: {product.category}</h5>
                <h5>Price: {product.price}</h5>
                <h6>Description: {product.description}</h6>
                <button type="button" value={`${product.title}|${product.image}`}  class="btn btn-primary" onClick={e =>add(e.target.value)}>Add to Cart</button>
                </div>
            </div>
            )}
            </div>
          </div>
          </div>
        )
}

export default PopularProducts;