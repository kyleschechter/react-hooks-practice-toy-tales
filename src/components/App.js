import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyList, setToyList] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(r => r.json())
    .then(data => {
      setToyList(data)
    })
  }, [])

  const handleDonate = (idOfToy) => {
    fetch(`http://localhost:3001/toys/${idOfToy}`, { method: "DELETE" })
    .then(() => {
      const updatedToys = toyList.filter(toy => toy.id !== idOfToy)
      setToyList(updatedToys)
    })
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm toyList={toyList} setToyList={setToyList} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer handleDonate={handleDonate} toyList={toyList}/>
    </>
  );
}

export default App;
