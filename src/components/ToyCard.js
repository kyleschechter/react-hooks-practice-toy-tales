import React, { useState } from "react";

function ToyCard({ id, name, image, likes, onDonate }) {
  const [currentLikes, setCurrentLikes] = useState(likes)
  
  const handleToyLikes = () => {
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        likes: parseInt(currentLikes + 1)
      })
    }
    fetch(`http://localhost:3001/toys/${id}`, configObj)
    .then(r => r.json())
    .then((data) => {
      console.log(data)
      setCurrentLikes(data.likes)
    })
  }
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image ? image : null}
        alt={name}
        className="toy-avatar"
      />
      <p>{currentLikes} Likes </p>
      <button onClick={handleToyLikes} className="like-btn">Like {"<3"}</button>
      <button onClick={onDonate} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
