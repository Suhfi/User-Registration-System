import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    LoadUsers();
  }, []);

  const { id } = useParams();

  const LoadUsers = async () => {
    const res = await fetch("http://localhost:8080/users");
    const data = await res.json();
    setUsers(data);
  };

  const deleteUser = async (id) => {
    await fetch(`http://localhost:8080/users/${id}`, {
      method: "DELETE",
      // body: JSON.stringify(users),
      // headers: {
      //   "content-type": "application/json",
      // },
    });
    LoadUsers();
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary text-warning m-2 ">
        <div className="container-fluid d-flex justify-content-between ">
          <div>
            <h1>User Registry</h1>
          </div>
          <div>
            <Link className="btn btn-outline-warning" to="/adduser">
              Add User
            </Link>
          </div>
        </div>
      </nav>
      {users.map((user) => (
        <div className="m-2 d-inline-flex p-2">
          <div className="card shadow" style={{ width: "18rem" }}>
            <div key={user.id} className="card-body">
              <h5 className="card-title">Name : {user.name}</h5>
              <p className="card-subtitle mb-2">Email : {user.email}</p>
              <div>Ph No : {user.phoneNo}</div>
              <div>Address : {user.address}</div>
              <div className="d-flex p-2 m-2 justify-content-evenly">
                <Link
                  className="btn btn-outline-success"
                  to={`/edituser/${user.id}`}
                >
                  Edit
                </Link>
                <Link
                  to={`/viewuser/${user.id}`}
                  className="btn btn-outline-primary"
                >
                  View
                </Link>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
