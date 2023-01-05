import React, { useEffect, useContext, useState } from "react";
import { FirebaseContext } from "../../store/Context";
import { postContext } from "../../store/PostContext";

import "./View.css";
function View() {
  const [userDetails, setUserDetails] = useState();
  const { postDetails } = useContext(postContext);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    userId = postDetails
    firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
      res.forEach(doc => {
        setUserDetails(doc.data())
      });
    })
    return () => {
      cleanup;
    };
  }, [input]);
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src="../../../Images/R15V3.jpg" alt="" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; 250000 </p>
          <span>YAMAHA R15V3</span>
          <p>Two Wheeler</p>
          <span>Tue May 04 2021</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>No name</p>
          <p>1234567890</p>
        </div>
      </div>
    </div>
  );
}
export default View;
