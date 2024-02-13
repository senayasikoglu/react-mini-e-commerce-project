import { useState } from "react";
import { Link } from "react-router-dom";
import AddForm from "./AddForm";
import ItemDetails from "./ItemDetails";
import { FaTrashCan } from "react-icons/fa6";

function Dashboard({ addProduct, deleteProduct, productsToDisplay }) {

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
              </Link>
              <div className="btn-container">
                {/* <Link to={`/itemDetails/${productDetails.id}`} className="view">View</Link> */}


                <button
                  className="trash"
                  onClick={() => {
                    deleteProduct(productDetails.id);
                  }}
                >
                  <FaTrashCan />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <AddForm addProduct={addProduct}>Add a product</AddForm>
    </>
  );
}

export default Dashboard;
