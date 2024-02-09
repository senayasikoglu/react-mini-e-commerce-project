import { useState } from "react";
import products from "../assets/products.json";

function Form(props) {

  const [productTitle, setProductTitle] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productImage, setProductImage] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const productIds = products.map( product => product.id);
    const maxId = Math.max(...productIds);
    const nextId = maxId + 1;

    const newProduct = {
      id: nextId,
      title: productTitle,
      brand: productBrand,
      image: productImage,
      price: parseFloat(price)
    }

    console.log(newProduct);

    //Create a new product object
  
    props.addProduct(newProduct);

    setProductTitle("");
    setProductBrand("");
    setProductImage("");
    setPrice(0);
  }

  return (


    <form className="product-item-container" onSubmit={handleSubmit}>
      <label>
        Product Title:
        <input name="productTitle" type="text" placeholder="Product Title"
          value={productTitle} onChange={(e) => { setProductTitle(e.target.value) }} />
      </label>

      <label>
        Product Brand:
        <input name="productBrand" type="text" placeholder="Product Brand"
          value={productBrand} onChange={(e) => { setProductBrand(e.target.value) }} />
      </label>

      <label>
        Product Image:
        <input name="productImage" type="text" placeholder="Product Image"
          value={productImage} onChange={(e) => { setProductImage(e.target.value) }} />
      </label>

      <label>
        Price:
        <input name="price" type="number" placeholder="price"
          value={price} onChange={(e) => { setPrice(e.target.value) }} />
      </label>

      <button type="submit">Add Product</button>


    </form>

  );
};


export default Form;