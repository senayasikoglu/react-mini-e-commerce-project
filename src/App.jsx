import './App.css'
import { Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import About from "./components/About";
import Dashboard from './components/Dashboard';
import ItemDetails from "./components/ItemDetails";
import NotFound from "./components/NotFound";


function App() {


  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/itemdetails/:itemId" element={<ItemDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
