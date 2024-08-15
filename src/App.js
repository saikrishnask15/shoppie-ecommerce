import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Shop from "./components/pages/Shop";
import ShopCategory from "./components/pages/ShopCatgory";
import Product from "./components/pages/Product";
import Cart from "./components/pages/Cart";
import LoginSignUp from "./components/pages/LoginSignUp";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory ShopCategory="mens" />} />
        <Route
          path="/womens"
          element={<ShopCategory ShopCategory="womens" />}
        />
        <Route path="/kids" element={<ShopCategory ShopCategory="kids" />} />
        <Route path="/Product" element={<Product />}>
          <Route path=":ProductId" element={<Product />} />
        </Route>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/LoginSignUp" element={<LoginSignUp/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
