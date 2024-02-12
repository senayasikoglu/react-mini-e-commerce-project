import products from "../assets/products.json";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ItemDetails() {
  const { itemId } = useParams();


  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState(null);
  const [updatedProducts, setUpdatedProducts] = useState([]);


  const itemDetails = products.find((product) => {
    return product.id == itemId;
  });

  const handleEdit = () => {
    setIsEditing(true);
    setEditedItem({ ...itemDetails })
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    setIsEditing(false);
    setEditedItem(null);
  };

  //Handle Input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setEditedItem((prevItem) => ({
      ...prevItem, [name]: value
    }))
  }


  return (
    <section className="item-details">
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            name="title"
            value={editedItem ? editedItem.title : ""}
            placeholder={itemDetails.title}
            onChange={handleChange}
          />
          <input
            type="number"
            name="price"
            value={editedItem ? editedItem.price : ""}
            placeholder={itemDetails.price}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            value={editedItem ? editedItem.description : ""}
            placeholder={itemDetails.description}
            onChange={handleChange}
          />
          <input
            type="number"
            name="rating"
            value={editedItem ? editedItem.rating : ""}
            placeholder={itemDetails.rating}
            onChange={handleChange}
          />
          <button className="edit-btn">Save</button>
          <Link to={`/itemDetails/${itemId}`}>Cancel</Link>
        </form>
      ) : (
        <>
          <h1>{editedItem ? editedItem.title : itemDetails.title}</h1>

          <img src={itemDetails.thumbnail} />
          <h3>Price: {itemDetails.price}</h3>
          <h3>Discount: {itemDetails.discountPercentage}</h3>
          <h3>Description: {itemDetails.description}</h3>
          <h3>Rating: {itemDetails.rating}</h3>

          <button className="edit-btn" onClick={handleEdit}>
            Edit
          </button>
        </>
      )}
      <br />


      <Link to="/">Back to Homepage</Link>
    </section>
  );
}
export default ItemDetails;
