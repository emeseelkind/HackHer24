import React, { useState } from "react";
import "./TitlePage.css"; // Import the CSS file for styling
import LoginButton from "./LoginButton"; // Import the LoginButton component
import Header from "./Header";
import RegisterBusinessForm from "./RegisterBusinessForm";
import getUserRequest from "../api/getUserRequest";
import { useQuery } from "react-query";
import addUserRequest from "../api/addUserRequest";

function TitlePage({ setShowPosts, username, setAccountType }) {
  // State to track whether sign-up button is clicked
  const [userUpdated, setUserUpdate] = useState(false);

  const [isRegisterFormOpen, setIsRegisterFormOpen] = useState(false); // State to track whether the register form is open
  
  const { isLoading, data: user } = useQuery(
    ["user", username],
    (username) => getUserRequest(username.queryKey[1]),
    {
      onSuccess: (data) => {

        !isLoading && !userUpdated && update()
      },
    }
  );

  const update = () =>{
    addUserRequest(username)
    setUserUpdate(true)
  }



  const handleOpenRegisterForm = () => {
    setIsRegisterFormOpen(true);
  };

  const handleCloseRegisterForm = () => {
    setIsRegisterFormOpen(false);
  };

  return (
    <div className="title-container">
      {!isLoading}
      <Header />
      <div className="title-container">

        <h1 className="title">TutorMe</h1>
        <p className="catchphrase">
        catchphrase.
        </p>
        <div className="description">
          <p>
            tutor me  offers  .
          </p>
          {!userUpdated && (<h3 style={{marginTop:"300px"}}>User: {username}</h3>)}
        </div>

        {/* Conditionally render the LoginButton component */}
        {!username && !isLoading && <LoginButton />}
        <div className="green-bar">
          <button onClick={handleOpenRegisterForm} className="reg-button">
            Register Business Form
          </button>
        </div>
        {/* Conditionally render the Register Business Form */}
        {isRegisterFormOpen && (
          <div className="register-form-popup">
            <div className="catchphrase">
              <span className="close" onClick={handleCloseRegisterForm}>
                &times;
              </span>
              <RegisterBusinessForm id={user[0]._id} handleClose={handleCloseRegisterForm}/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TitlePage;