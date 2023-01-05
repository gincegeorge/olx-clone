import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../../store/Context";
import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { AuthContext } from "../../store/Context";
function Header() {
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const { user } = useContext(AuthContext);
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>
            {user ? (
              `Welcome ${user.displayName}`
            ) : (
              <span
                onClick={() => {
                  history.push("/login");
                }}
              >
                Login
              </span>
            )}
          </span>

          

          <hr />
        </div>

        {user ? (
            <span
              onClick={() => {
                firebase.auth().signOut();
                history.push("/login");
              }}
            >
              Logout
            </span>
          ) : null}

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span
              onClick={() => {
                history.push("/create");
              }}
            >
              SELL
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
