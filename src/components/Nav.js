import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

function Nav() {
    const { setUser } = useContext(GlobalContext);
  async function getUserDetails() {
    fetch("http://localhost:8001/login")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Invalid credentials");
        }
      })
      .then((data) => {
        // Handle successful login
        console.log(data);
        setUser(data);
        // Show success toast notification
      });
  }
  // async function loginRoute() {
  //     try {
  //       await getUserDetails();
  //       window.location.href = 'http://localhost:3000';
  //     } catch (error) {
  //       console.error('Error:', error);
  //       // Handle the error if necessary
  //     }
  //   }
  function registerRoute() {
    window.location.href = "http://localhost:8001/register";
  }
  return (
    <div>
      <ol className="flex items-center p-4 font-bold">
        <li className="inline">Schedulr</li>
        <li className="inline ml-auto mr-4">
          <button onClick={registerRoute}>Register</button>
        </li>
        <li className="drop-shadow hover:drop-shadow-xl">
          <button
            onClick={getUserDetails}
            className="flex items-center w-24 h-10 mr-2 bg-white rounded-full justify-evenly"
          >
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <span>Log In</span>
          </button>
        </li>
      </ol>
    </div>
  );
}

export default Nav;
