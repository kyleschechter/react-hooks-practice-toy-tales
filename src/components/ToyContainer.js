import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toyList, handleDonate }) {
  const displayedToys = toyList.map(toy => {
    const onDonate = () => {
      handleDonate(toy.id)
    }
    return (
      <ToyCard 
      key={toy.id}
      id={toy.id}
      name={toy.name}
      image={toy.image}
      likes={toy.likes}
      onDonate={onDonate}
      />
    )
  })
  return (
    <div id="toy-collection">{displayedToys}</div>
  );
}

export default ToyContainer;
