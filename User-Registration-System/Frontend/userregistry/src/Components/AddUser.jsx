import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    phoneNo: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:8080/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json",
      },
    });

    setUser({
      name: "",
      email: "",
      address: "",
      phoneNo: "",
    });
    navigate("/");
  };

  return (
    <div>
      <div className="navbar navbar-expand-lg navbar-light bg-secondary text-warning m-2 d-flex justify-content-center">
        <h1 className="text-center">Register User</h1>
      </div>
      <form className="shadow p-4 m-4" onSubmit={handleSubmit}>
        <div className="mb-3 mx-5">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={user.name}
            onChange={handleChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3 mx-5">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 mx-5">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={user.address}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 mx-5">
          <label htmlFor="phone" className="form-label">
            Phone No
          </label>
          <input
            type="text"
            className="form-control"
            name="phoneNo"
            value={user.phoneNo}
            onChange={handleChange}
          />
        </div>
        <div className="text-center m-2">
          <button type="submit" className="btn btn-primary m-2">
            Submit
          </button>
          <Link type="submit" className="btn btn-danger m-2" to="/">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
