import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Shop from "./components/pages/Shop";
import ShopCategory from "./components/pages/ShopCategory/ShopCatgory";
import Product from "./components/pages/Product";
import Cart from "./components/pages/Cart/Cart";
import LoginSignUp from "./components/pages/LoginSignUp/LoginSignUp";
import Footer from "./components/Footer/Footer";
import banner_men from "./components/assests/banner_mens.png";
import banner_women from "./components/assests/banner_women.png";
import banner_kids from "./components/assests/banner_kids.png";
function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <NavBar />
      <div className="app-content">
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/mens"
          element={<ShopCategory banner={banner_men} category="men" />}
        />
        <Route
          path="/womens"
          element={<ShopCategory banner={banner_women} category="women" />}
        />
        <Route
          path="/kids"
          element={<ShopCategory banner={banner_kids} category="kid" />}
        />
        <Route path="/Product" element={<Product />}>
          <Route path="/Product/:productId" element={<Product />} />
        </Route>
        <Route path="/Cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignUp/>} /> 
      </Routes>
      </div>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
