import React, { useState, useContext } from "react";
import { FirebaseContext } from "../../store/FirebaseContext";
import Logo from "../../olx-logo.png";
import "./Signup.css";
import { useHistory } from "react-router-dom";

export default function Signup() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");

  const { firebase } = useContext(FirebaseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firebase);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({ displayName: username }).then(() => {
          console.log(result.user.uid,username,phone,'-----------------------------');
          firebase
            .firestore()
            .collection("users")
            .add({
              id:result.user.uid,
              username: username,
              phone: phone,
            })
            .then(() => {
              history.push("/login");
            });
        });
      });
  };

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt="logo-img"></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => {
              setphone(e.target.value);
            }}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a> Login</a>
      </div>
    </div>
  );
}
