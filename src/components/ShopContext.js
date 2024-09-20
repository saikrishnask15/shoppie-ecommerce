import { createContext, useEffect, useState } from "react";
import all_product from "./assests/allProducts";
import { db, auth } from "./Firebase/FirebaseConfig";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  // User Authentication
  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      await fetchCart(userCredential.user.uid); // Fetch cart after login
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth); // Sign out from Firebase
      console.log("Logout successful");
      window.location.href = "/login";
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Cart Management
  const fetchCart = async (userId) => {
    const cartDoc = await getDoc(doc(db, "carts", userId));
    if (cartDoc.exists()) {
      setCart(cartDoc.data().items);
    }
  };

  const addToCart = async (product) => {
    if (!cart) return;
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);
    let newCart;
    if (existingItemIndex > -1) {
      // Item exists, increase quantity
      newCart = [...cart];
      newCart[existingItemIndex].quantity += 1;
    } else {
      // Item doesn't exist, add it with quantity 1
      newCart = [...cart, { ...product, quantity: 1 }];
    }
    setCart(newCart);
    if (user) {
      await setDoc(doc(db, "carts", user.uid), { items: newCart });
    }
  };

  const RemoveItem = async (productId) => {
    const newCart = cart.filter((item) => item.id !== productId);
    setCart(newCart);

    if (user) {
      await setDoc(doc(db, "carts", user.uid), { items: newCart });
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      console.log("Auth state changed:", currentUser);
      if (currentUser) {
        setUser(currentUser);
        fetchCart(currentUser.uid);
      } else {
        console.log("User logged out");
        setUser(null);
        setCart([]); // Optionally clear the cart on logout
      }
    });
    console.log("Unsubscribing from auth state listener");
    return () => unsubscribe();
  }, []);

  const totalPrice = () => {
    return cart.reduce((acc, item) => acc + item.new_price * item.quantity, 0);
  };

  const totalCartItems = cart ? cart.length : 0;

  const value = {
    all_product,
    cart,
    addToCart,
    RemoveItem,
    totalPrice,
    totalCartItems,
    logout,
    login,
    user,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
