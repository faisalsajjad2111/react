import React, { useRef, useEffect, useState, useContext } from "react";

// Context

import { AuthenticationContext } from "../../context/AuthenticationContext";

import Button from "./Button";

import FormGroup from "./FormGroup";
import { LoginStyle } from "../styles/LoginStyle";

export default function LoginForm() {
  // References

  const emailRef = useRef();
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  // Context

  const authenticator = useContext(AuthenticationContext);

  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setAuth({ ...auth, [name]: value});
  // Animation for access denied state

//  const [animateAccessDenied, setAnimateAccessDenied] = useState(false);

};
  
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login");
    // context
authenticator.login(auth.email, auth.password);
clearform();
    
  
  };
function clearform()
{setAuth({
  email:"",
  password:"",
});

}

  return (
    <div className="form">
      <h2 className="mb-2">Enter your credentials</h2>
      <form>
      <FormGroup
          label={"Email"}
          type={"email"}
          name={"email"}
          placeholder={"Enter your email"}
          reference={emailRef}
          value={auth.email}
          onChange={handleInputChange}
        />{" "}
        <FormGroup
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={handleInputChange}
          value={auth.password}
        />
        <Button
          type="submit"
          text="Login"
          classes="btn-accept btn-block"
          onClick={handleLogin}
        />
      </form>
    </div>
  );
}
