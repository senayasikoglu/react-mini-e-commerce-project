import products from "../assets/products.json";
import { redirect, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function EditItemDetails() {
    const { itemId } = useParams();

    const itemDetails = products.find((product) => {
        return product.id == itemId;
    });

    return (
        <section className="item-details">
            <h1>{itemDetails.title}</h1>

            <img src={itemDetails.thumbnail} />
            <h3>Price: {itemDetails.price}</h3>
            <h3>Discount: {itemDetails.discountPercentage}</h3>
            <h3>Description: {itemDetails.description}</h3>
            <h3>Rating: {itemDetails.rating}</h3>

            <br />
            <Link to="/">Back to Homepage</Link>
        </section>
    );
}
export default EditItemDetails;
