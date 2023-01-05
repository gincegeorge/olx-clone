// import React, { useState, useEffect, useContext } from "react";

// import Heart from "../../assets/Heart";
// import { FirebaseContext } from "../../store/Context";
// import { PostContext } from "../../store/PostContext";
// import "./Post.css";
// import { useHistory } from "react-router-dom";

// function Posts() {
//   const { setPostDetails } = useContext(PostContext);
//   const { firebase } = useContext(FirebaseContext);
//   const [products, setProduts] = useState([]);
//   const history = useHistory();

//   useEffect(() => {
//     firebase
//       .firestore()
//       .collection("products")
//       .get()
//       .then((snapshot) => {
//         const postsData = snapshot.docs.map((product) => {
//           return {
//             ...product.data(),
//             id: product.id,
//           };
//         });
//         setProduts(postsData);
//         console.log(postsData);
//       });
//   }, []);

//   return (
//     <div className="postParentDiv">
//       <div className="moreView">
//         <div className="heading">
//           <span>Quick Menu</span>
//           <span>View more</span>
//         </div>
//         <div className="cards">
//           <div className="card">
//             <div className="favorite">
//               <Heart></Heart>
//             </div>
//             <div className="image">
//               <img src="../../../Images/R15V3.jpg" alt="" />
//             </div>
//             <div className="content">
//               <p className="rate">&#x20B9; 250000</p>
//               <span className="kilometer">Two Wheeler</span>
//               <p className="name"> YAMAHA R15V3</p>
//             </div>
//             <div className="date">
//               <span>Tue May 04 2021</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="recommendations">
//         <div className="heading">
//           <span>Fresh recommendations</span>
//         </div>
//         <div className="cards">
//           {products.map((products) => {
//             return (
//               <div
//                 className="card"
//                 onClick={() => {
//                   setPostDetails(products);
//                   history.push("/view");
//                 }}
//               >
//                 <div className="favorite">
//                   <Heart></Heart>
//                 </div>
//                 <div className="image">
//                   <img src={products.imageURL} alt="" />
//                 </div>
//                 <div className="content">
//                   <p className="rate">&#x20B9; {products.price}</p>
//                   <span className="kilometer">{products.name}</span>
//                   <p className="name">{products.category}</p>
//                 </div>
//                 <div className="date">
//                   <span>{products.createdAt}</span>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Posts;

import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Heart from "../../assets/Heart";
import { FirebaseContext } from "../../store/Context";
import { PostContext } from "../../store/PostContext";
import "./Post.css";

function Posts() {
  const { firebase } = useContext(FirebaseContext);
  const [products, setProducts] = useState([]);
  const { setPostDetails } = useContext(PostContext);
  const history = useHistory();

  useEffect(() => {
    firebase
      .firestore()
      .collection("products")
      .get()
      .then((snapshot) => {
        const allPost = snapshot.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setProducts(allPost);
      });
  }, []);

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {products.map((product) => {
            return (
              <div
                onClick={() => {
                  setPostDetails(product);
                 // console.log(product);
                  history.push("/view");
                }}
                className="card"
              >
                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="image">
                  <img src={product.imageURL} alt="" />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9; {product.price}</p>
                  <span className="kilometer">{product.category}</span>
                  <p className="name"> {product.name}</p>
                </div>
                <div className="date">
                  <span>{product.createdAt}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
