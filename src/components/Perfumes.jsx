import { useState } from "react";
import products from "../assets/products.json";


    
    
    function PerfumesList() {
        const fragances = products.filter(product => product.category === "fragrances");
        const [productsToDisplay, setProductsToDisplay] = useState(fragances);
      
        let message = "";
        if(productsToDisplay.length > 0){
            message = <h2>Products in stock:</h2>;
        } else {
            message = <h2>Sorry, no more products to display</h2>
        }

        const deleteProduct = (productId) => {
            const newList = productsToDisplay.filter((productObj) => {
                return productObj.id !== productId;
            });
            setProductsToDisplay(newList);
        }
        
        return (
            <div className="perfumeItem">
                {message}

                {productsToDisplay.map((perfumeDetails) => {
                    return(
                    <div key={perfumeDetails.id} className="perfume-item">
                        <h2>{perfumeDetails.title}</h2>
                        <p>{perfumeDetails.brand}</p>
                        <p>${perfumeDetails.price}</p>
                        <button onClick={() => {deleteProduct(perfumeDetails.id)}}>Delete</button>
                    </div>
                    );
                    })}
            </div>
        );
    }
    

export default PerfumesList;