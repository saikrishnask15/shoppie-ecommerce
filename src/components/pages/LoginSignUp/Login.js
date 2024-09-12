import { useState } from "react";
import { auth } from "../../Firebase/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

const LoginSignUp = () => {
  const [loginData, SetLoginData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    SetLoginData({
      ...loginData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        loginData.email,
        loginData.password
      );
      console.log("login Success");
      toast.success("Login Success");
      SetLoginData({
        username: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
      toast.error("Login Error. Please try again.");
    }
  };
  return (
    <div className="loginSignup">
      <form className="loginSignup-container" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="loginSignup-fields">
          <input
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={loginData.email}
            name="email"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={loginData.password}
            name="password"
          />
        </div>
        <button>Login</button>
        <p className="loginSignup-login">
          Don't have a account? <a href="/SignUp">Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default LoginSignUp;
