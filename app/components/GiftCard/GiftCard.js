import React, { useState } from "react";
import './GiftCard.css'
import Image from "next/image";

export default function GiftCard({ gift, id }) {
  const [isShown, setIsShown] = useState(false);


  const handleTurnOver = () => {
    setIsShown((prev) => !prev);
    if (gift.value === "mega win" && !isShown){
      alert("big win!!!!!")
    }

    if (gift.value === "lose" && !isShown) {
      alert("unlucky")
    }
      
  };

  return (
    <div className="card" onClick={handleTurnOver}>
      {isShown ? (
        <div className="right-side">
          <p>
            <strong>{gift.title}</strong>
          </p>
          <p>
            <strong>#{id + 1}</strong>
          </p>
          <img src={gift.url}/>
          <div className="description">{gift.body}</div>
        </div>
      ) : (
        <div className="left-side">
          <strong>#{id + 1}</strong>
        </div>
      )}
    </div>
  );
}
