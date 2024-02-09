import { useState } from "react";
import products from "../assets/products.json";
import { Link } from "react-router-dom";
import createProduct from "./Form";

function Dashboard() {
  const fragances = products.filter(
    (product) =>
      product.category === "fragrances" || product.category === "skincare" || 
      product.category === "womens-watches" || product.category === "sunglasses"
  );
  const [productsToDisplay, setProductsToDisplay] = useState(fragances);

  const addProduct = () => {
    

    setProductsToDisplay();
}



  let message = "";
  if (productsToDisplay.length === 0) {
    message = <h2>Sorry, no more products to display!</h2>;
  }
  const deleteProduct = (productId) => {
    const newList = productsToDisplay.filter((productObj) => {
      return productObj.id !== productId;
    });
    setProductsToDisplay(newList);
  };

  return (
    <>
    <Form addProduct={addProduct} />
      {message}
      <div className="item-container">
        {productsToDisplay.map((perfumeDetails) => {
          return (
            <div key={perfumeDetails.id} className="perfume-item">
              <Link to={`/itemDetails/${perfumeDetails.id}`}>
                <h2 className="item-title">{perfumeDetails.title}</h2>
              </Link>
              <p>{perfumeDetails.brand}</p>
              <img
                className="item-img"
                alt="perfume image"
                src={perfumeDetails.images[0]}
              />
              <p>${perfumeDetails.price}</p>

              <button
                className="delete-btn"
                onClick={() => {
                  deleteProduct(perfumeDetails.id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Dashboard;
