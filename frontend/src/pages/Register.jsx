import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Passwords do not match");
    }
  };
  return (
    <>
      <section className="heading">
        <h1>
          <FaUser />
          Register
        </h1>
        <p>Please create an account</p>
        <section className="form">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                required
                onChange={onChange}
                type={name}
                name="name"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>
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
              <input
                required
                onChange={onChange}
                type={password2}
                name="password2"
                id="password2"
                className="form-control"
                placeholder="Confirm your password"
              />
            </div>{" "}
            <div className="form-group">
              <button className="btn btn-block">Submit</button>
            </div>
          </form>
        </section>
      </section>
    </>
  );
};

export default Register;
