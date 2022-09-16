import React, { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { toast } from "react-toastify";
const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt />
          Login
        </h1>
        <p>Please log in to continue</p>
        <section className="form">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                required
                onChange={onChange}
                type={email}
                name="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <input
                required
                onChange={onChange}
                type={password}
                name="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
              />
            </div>

            <div className="form-group">
              <button className="btn btn-block">Submit</button>
            </div>
          </form>
        </section>
      </section>
    </>
  );
};

export default Login;
