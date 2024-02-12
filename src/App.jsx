import './App.css'
import { Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import About from "./components/About";
import Dashboard from './components/Dashboard';
import ItemDetails from "./components/ItemDetails";
import NotFound from "./components/NotFound";
import products from "./assets/products.json";
import { useState } from "react";



function App() {

 //I moved productlist initialization from Dashboard to here (moved to parent). 
 //Otherwise, we can not pass the "productstodisplay" to itemdetails router page (because they are siblings)
 //(In short, to be able to display editted item on the actual list, I did this change :)

  const beautyProducts = products.filter(
    (product) =>
      product.category === "fragrances" || product.category === "skincare" ||
      product.category === "womens-watches" || product.category === "sunglasses"
  );

  const [productsToDisplay, setProductsToDisplay] = useState(beautyProducts);

  
  const updateProduct = (editedItem) => {
    console.log("updateProduct method....");
    let index = productsToDisplay.findIndex(product => product.id === editedItem.id );

    let newList = productsToDisplay;

    newList[index] = editedItem; 
    setProductsToDisplay(newList);
  }


  const deleteProduct = (productId) => {
    const newList = productsToDisplay.filter((productObj) => {
      return productObj.id !== productId;
    });
    setProductsToDisplay(newList);
  };

    //Logic to add a new product to current the product list
    const addProduct = (newProduct) => {
      setProductsToDisplay([...productsToDisplay, newProduct]);
    }

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard productsToDisplay={productsToDisplay} 
                                            deleteProduct={deleteProduct}
                                            addProduct={addProduct}  />} />
        <Route path="/about" element={<About />} />
         <Route path="/itemdetails/:itemId"
          element={<ItemDetails updateProduct={updateProduct} products={productsToDisplay} />}  />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
