import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isError) {
      toast.error(message);
    } else {
      // Redirect when succesfully
      if (isSuccess || user) {
        navigate("/");
      }
    }
    dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);
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
    } else {
      const userData = {
        name,
        email,
        password,
      };
      dispatch(register(userData));
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
