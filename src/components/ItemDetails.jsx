import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ItemDetails({ products, updateProduct }) {
  const { itemId } = useParams();


  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState(null);



  let foundItem = products.find((product) => {
    return product.id == itemId;
  });

  const [selectedItem, setSelectedItem] = useState(foundItem);


  const handleEdit = () => {
    setIsEditing(true);
    setEditedItem(selectedItem)
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    setIsEditing(false);
    setSelectedItem(editedItem);
    updateProduct(editedItem);  //calling from parent
    setEditedItem(null);

  };

  //Handle textarea changes
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
          <label>
            Title:</label>
          <input
            type="text"
            name="title"
            value={editedItem ? editedItem.title : ""}
            placeholder={selectedItem.title}
            onChange={handleChange}
          />

          <label>
            Price:</label>
          <input
            type="number"
            name="price"
            value={editedItem ? editedItem.price : ""}
            placeholder={selectedItem.price}
            onChange={handleChange}
          />

          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={editedItem ? editedItem.description : ""}
            placeholder={selectedItem.description}
            onChange={handleChange}
          />

          <label>Rating:</label>
          <textarea
            type="number"
            name="rating"
            value={editedItem ? editedItem.rating : ""}
            placeholder={selectedItem.rating}
            onChange={handleChange}
          />

          <button className="edit btn">Save</button>
          <Link to={`/itemDetails/${itemId}`}>Cancel</Link>
        </form>
      ) : (
        <>
          <h1>{editedItem ? editedItem.title : selectedItem.title}</h1>

          <img src={selectedItem.thumbnail} />
          <h3>Price: {selectedItem.price}</h3>
          <h3>Discount: {selectedItem.discountPercentage}</h3>
          <h3>Description: {selectedItem.description}</h3>
          <h3>Rating: {selectedItem.rating}</h3>

          <button className="edit btn" onClick={handleEdit}>
            Edit Product
          </button>
        </>
      )}
      <br />


      <Link to="/">Back to Homepage</Link>
    </section>
  );
}
export default ItemDetails;
