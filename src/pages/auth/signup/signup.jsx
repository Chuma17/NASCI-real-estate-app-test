import React, { useEffect, useState } from "react";
import "./signup.css";
import signup_background from "../../../assets/signup_background.png";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import GoogleProvider from "./google-provider.svg";
import { useUserAuth } from "src/context/authProvider";
import { useLocation } from "react-router-dom";

const Sign = (props) => {
  const navigate = useNavigate();
  const { signUp, user, logIn, updateUser, googleAuth } = useUserAuth();
  const route = useLocation().pathname.split("/").slice(0)[1];

  const [userData, setUserData] = useState({
    name: "",
    password: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (route === "auth" && user) navigate("/dashboard/overview");
  });

  const sign = async (e) => {
    e.preventDefault();
    try {
      if (isRegister) {
        setIsLoading(true);
        const res = await signUp(userData.email, userData.password);
        await updateUser(res.user, userData.name);
      } else if (!isRegister) {
        const res = await logIn(userData.email, userData.password);
        await updateUser(res.user, userData.name);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const isRegister = props.isRegister;

  const handleChanages = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="signup">
      <div className="backgroundImg">
        <img src={signup_background} alt="Background" />
      </div>

      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="right_component">
        <div className="formcomponent">
          <form onSubmit={sign}>
            <h2> {isRegister ? "Create Account " : "Sign In"}</h2>
            <br />

            {isRegister ? (
              <React.Fragment>
                <label>
                  Full Name <br />
                  <input
                    placeholder="Enter your name"
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={handleChanages}
                  />
                  <br />
                </label>
                <br />
              </React.Fragment>
            ) : null}

            <label>
              Email address
              <br />
              <input
                placeholder="Enter your email"
                value={userData.email}
                required
                onChange={handleChanages}
                type="email"
                name="email"
              />
              <br />
            </label>
            <br />
            <label>
              Password <br />
              <input
                placeholder="minimum of 8 characters"
                type="password"
                name="password"
                required
                value={userData.password}
                onChange={handleChanages}
              />
              <br />
            </label>

            <div className="signup_btns">
              <button type="submit">
                {isLoading ? "Loading... " : isRegister ? "Sign Up" : "Sign In"}
              </button>
              <br />
              or
              <br />
              <br />
              <div className="google-provider-btn">
                <button
                  type="button"
                  onClick={googleAuth}
                  className="google_signup"
                >
                  Sign Up with Google
                </button>
                <ReactSVG
                  beforeInjection={(svg) => {
                    svg.classList.add("signup-google-provider");
                  }}
                  src={GoogleProvider}
                />
              </div>
              <p>
                By clicking on create account you hereby agree to our{" "}
                <strong>Terms and Conditions</strong> and
                <strong>Privacy Policy</strong>.
              </p>
            </div>
          </form>
        </div>
        <div className="signin_link">
          Already have an account
          <Link className="link_el" to="/auth/signin">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sign;
