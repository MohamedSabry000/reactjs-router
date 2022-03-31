import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUserByID } from "../../api/users";
import { Container } from "react-bootstrap";
import Spinner from "../home/Spinner";
import "./styles.css";
// import UserProfile from './UserProfile';

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchUserByID(id)
      .then(({ data }) => {
        setUser(data);
      })
      .catch((err) => {
        setUser(null);
      });
  }, [id]);

  return (
    <Container className="emp-profile">
      {!user && <Spinner animation="border" variant="primary" />}
      {user ? (
        <form method="post">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src={`https://i.pravatar.cc/150?img=${user.id}`} alt="" />
                <div className="file btn btn-lg btn-primary">
                  Change Photo
                  <input type="file" name="file" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>{user.name}</h5>
                <h6>{user.address?.city}</h6>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="/"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <input
                type="submit"
                className="profile-edit-btn"
                name="btnAddMore"
                value="Edit Profile"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <p>WORK LINK</p>
                <p>No Work</p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>User Id</label>
                    </div>
                    <div className="col-md-6">
                      <p>{user.username}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>{user.name}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>{user.email}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div className="col-md-6">
                      <p>{user.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <div>No user found</div>
      )}
    </Container>
  );

  // return <>
  //     {user && reqState ? <Container> <UserProfile user={user} /> </Container> : <p classNameName='p-3 bg-alert'>Error while fetching data</p>};
  // </>
};

export default Profile;
