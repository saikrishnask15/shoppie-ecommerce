import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { ShopContext } from "../../ShopContext";

const Login = () => {
  const { login } = useContext(ShopContext);
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
      // await signInWithEmailAndPassword(
      //   auth,
      //   loginData.email,
      //   loginData.password
      // );
      await login(loginData.email, loginData.password);
      console.log("login Success");
      toast.success("Login Success");
      window.location.href = "/";
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

export default Login;
