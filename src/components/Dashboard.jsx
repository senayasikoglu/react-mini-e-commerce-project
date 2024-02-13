import { useState } from "react";
import { Link } from "react-router-dom";
import AddForm from "./AddForm";
import ItemDetails from "./ItemDetails";

function Dashboard({ addProduct, deleteProduct, productsToDisplay }) {


  const updateProduct = (updatedProduct) => {
    //productsToDisplay.find(product => product.id === updateProduct.id ) = updatedProduct;
  }

  //Delete a product
  let message = "";
  if (productsToDisplay.length === 0) {
    message = <h2>Sorry, there are no products to display</h2>;
  }

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
              <Link to={`/itemDetails/${productDetails.id}`}><button className="btn details">Show details</button></Link>


              <button
                className="delete btn"
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
      <AddForm addProduct={addProduct}>Add a product</AddForm>
    </>
  );
}

export default Dashboard;
