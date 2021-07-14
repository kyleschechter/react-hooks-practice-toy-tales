import React from "react";

function ToyForm({ toyList, setToyList }) {

  const handleToySubmit = (e) => {
    e.preventDefault()
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: e.target.name.value,
        image: e.target.image.value,
        likes: 0
      })
    }
    fetch("http://localhost:3001/toys", configObj)
    .then(r => r.json())
    .then(data => {
      console.log(data)
      setToyList([...toyList, data])
    })
    e.target.name.value = ""
    e.target.image.value = ""
  }

  return (
    <div className="container">
      <form onSubmit={handleToySubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
