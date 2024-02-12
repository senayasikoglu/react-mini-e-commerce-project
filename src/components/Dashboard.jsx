import { useState } from "react";
import products from "../assets/products.json";
import { Link } from "react-router-dom";
import AddForm from "./AddForm";
import ItemDetails from "./ItemDetails";

function Dashboard() {
  const beautyProducts = products.filter(
    (product) =>
      product.category === "fragrances" || product.category === "skincare" ||
      product.category === "womens-watches" || product.category === "sunglasses"
  );

  const [productsToDisplay, setProductsToDisplay] = useState(beautyProducts);

  0


  //Logic to add a new product to current the product list
  const addProduct = (newProduct) => {
    setProductsToDisplay([...productsToDisplay, newProduct]);
  }

  //Delete a product
  let message = "";
  if (productsToDisplay.length === 0) {
    message = <h2>Sorry, there are no products to display</h2>;
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
        {productsToDisplay.map((productDetails) => {
          return (
            <div key={productDetails.id} className="perfume-item">
              <Link to={`/itemDetails/${productDetails.id}`}>
                <h2 className="item-title">{productDetails.title}</h2>
              </Link>
              <p>{productDetails.brand}</p>

              {productDetails.images && productDetails.images.length > 0 ? (
                <img
                  className="item-img"
                  alt="perfume image"
                  src={productDetails.images[0]}

                />) : (
                <img className="item-img" alt="default image" src="https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg?w=996" />
              )}
              <p>${productDetails.price}</p>
              <Link to={`/itemDetails/${productDetails.id}`}>Show details</Link>

              <br />

              <button
                className="delete-btn"
                onClick={() => {
                  deleteProduct(productDetails.id);
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
