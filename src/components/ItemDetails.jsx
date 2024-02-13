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
        <form className="edit-form" onSubmit={handleUpdate}>
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
          <textarea
            type="text"
            name="description"
            value={editedItem ? editedItem.description : ""}
            placeholder={selectedItem.description}
            onChange={handleChange}
          />

          <label>Rating:</label>
          <input
            type="number"
            name="rating"
            value={editedItem ? editedItem.rating : ""}
            placeholder={selectedItem.rating}
            onChange={handleChange}
          />

          <button className="save-btn btn">Save</button>
        </form>
      ) : (
        <div>
          <h1 className="item-title">{editedItem ? editedItem.title : selectedItem.title}</h1>
          <h3 className="brand">{selectedItem.brand}</h3>
          {selectedItem.images.length > 1 ? (
            <img className="img-detail" src={selectedItem.images[1]} />
          ) : (<img className="img-detail" src={selectedItem.images[0]} />)}
          <h3 className="details-text">${selectedItem.price}</h3>
          <h3 className="details-text">{selectedItem.description}</h3>
          <h5 className="details-text">Rating ★ {selectedItem.rating}</h5>

          <button className="edit btn" onClick={handleEdit}>
            Edit Product
          </button>
        </div>
      )}



      <Link to="/"><button className="btn-back">Back to Homepage</button></Link>
    </section>
  );
}
export default ItemDetails;
