import { useState } from "react";
import { auth, db } from "../../Firebase/FirebaseConfig";
import { createUserWithEmailAndPassword} from "firebase/auth";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";
 
const LoginSignUp = () => {
  const [SignUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({
      ...SignUpData,
      [name]: value,
    });
  };
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation check
    if (!SignUpData.username || !SignUpData.email || !SignUpData.password) {
      toast.error("Please fill out all fields"); // Show error toast
      return;
    }

    if (!validateEmail(SignUpData.email)) {
      toast.error("Invalid email address"); // Show error toast
      return;
    }
   
    try {
      await createUserWithEmailAndPassword(
        auth,
        SignUpData.email,
        SignUpData.password
      );
      const user = auth.currentUser;
      console.log(user);
      console.log("Account Created");
      toast.success("Account created successfully!"); // Show success toast
      if(user){
        await setDoc(doc(db, "users", user.uid), {
          userName:SignUpData.username,
          email:user.email,
          password:SignUpData.password
        });
      }
      window.location.href='/';
      setSignUpData({
        username: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
      toast.error("Error creating account. Please try again."); // Show error toast
    }
  };
  return (
    <div className="loginSignup">
      <form className="loginSignup-container" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className="loginSignup-fields">
          <input
            type="text"
            placeholder="Your Name"
            onChange={handleChange}
            name="username"
            value={SignUpData.username}
          />
          <input
            type="email"
            placeholder="Email Address"
            onChange={handleChange}
            name="email"
            value={SignUpData.email}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={handleChange}
            name="password"
            value={SignUpData.password}
          />

        </div>
        <div className="loginSignup-agree">
          <input type="checkbox" name="" id="" />
          <p>I agree to the terms & privacy policy</p>
        </div>
        <button>Continue</button>
        <p className="loginSignup-login">
          Already have a account? <a href="/Login">Login here</a>
        </p>
      </form>
    </div>
  );
};

export default LoginSignUp;
