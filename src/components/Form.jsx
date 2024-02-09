import { useState } from "react";

function createProduct() {

    const [productTitle, setProductTitle] = useState("");
    const [productBrand, setProductBrand] = useState("");
    const [productImage, setProductImage] = useState("");
    const [price, setPrice] = useState(0);
    
  const handleSubmit = (e) => {
    props.addProduct({})
    e.preventDefault();

    

    const newProduct = { productTitle, productBrand, productImage, price }
      

    return (
    
        
        <form onSubmit={handleSubmit}>
             <label>
            Product Title:
            <input name="productTitle" type="text" placeholder="Product Title" 
              value={productTitle} onChange={(e) => {setFullName(e.target.value) }}/> 
          </label>

          <label>
            Product Brand:
            <input name="productBrand" type="text" placeholder="Product Brand" 
              value={productBrand} onChange={(e) => {setFullName(e.target.value) }}/> 
          </label>

          <label>
            Product Image:
            <input name="productImage" type="text" placeholder="Product Image" 
              value={productImage} onChange={(e) => {setFullName(e.target.value) }}/> 
          </label>

          <label>
            Price:
            <input name="price" type="number" placeholder="price" 
              value={price} onChange={(e) => {setFullName(e.target.value) }}/> 
          </label>

          <button type="submit">Add Product</button>


        </form>
     
    );
  };
}

export default createProduct;