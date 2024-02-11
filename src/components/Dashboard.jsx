import { useState } from "react";
import products from "../assets/products.json";
import { Link } from "react-router-dom";
import AddForm from "./AddForm";

function Dashboard() {
  const fragances = products.filter(
    (product) =>
      product.category === "fragrances" || product.category === "skincare" ||
      product.category === "womens-watches" || product.category === "sunglasses"
  );
  const [productsToDisplay, setProductsToDisplay] = useState(fragances);


  //Logic to add a new product to current the product list
  const addProduct = (newProduct) => {
    setProductsToDisplay([...productsToDisplay, newProduct]);
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

      {message}
      <div className="item-container">
        {productsToDisplay.map((perfumeDetails) => {
          return (
            <div key={perfumeDetails.id} className="perfume-item">
              <Link to={`/itemDetails/${perfumeDetails.id}`}>
                <h2 className="item-title">{perfumeDetails.title}</h2>
              </Link>
              <p>{perfumeDetails.brand}</p>

              {perfumeDetails.images && perfumeDetails.images.length > 0 ? (
                <img
                  className="item-img"
                  alt="perfume image"
                  src={perfumeDetails.images[0]}

                />) : (
                <img className="item-img" alt="default image" src="https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg?w=996" />
              )}
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
      <AddForm addProduct={addProduct} />
    </>
  );
}

export default Dashboard;
