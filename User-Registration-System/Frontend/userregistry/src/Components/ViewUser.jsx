import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewUser = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    address: "",
    phoneNo: "",
  });

  useEffect(() => {
    LoadUsers();
  }, []);

  const { id } = useParams();

  const LoadUsers = async () => {
    const res = await fetch(`http://localhost:8080/users/${id}`);
    const data = await res.json();
    setUser(data);
  };
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card shadow p-3" style={{ width: "20rem" }}>
        <h3 className="text-center text-secondary">User Details</h3>
        <div className="card-body">
          <h5 className="card-title">ID : {user.id}</h5>
          <h5 className="card-title">Name : {user.name}</h5>
          <p className="card-subtitle mb-2">Email : {user.email}</p>
          <div>Ph No : {user.phoneNo}</div>
          <div>Address : {user.address}</div>
          <div className="d-flex p-2 m-2 justify-content-evenly">
            <Link className="btn btn-outline-primary" to="/">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
