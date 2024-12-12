import React, { useState } from "react";
import './GiftCard.css'

export default function GiftCard({ gift }) {
  const [isShown, setIsShown] = useState(false);

  const handleTurnOver = () => {
    setIsShown((prev) => !prev);
  };

  return (
    <div className="card" onClick={handleTurnOver}>
      {isShown ? (
        <>
          <p>
            <strong>{gift.title}</strong>
          </p>
          <p>
            <strong>#{gift.id}</strong>
          </p>
          <img src={gift.url} alt={gift.title} />
          <div className="description">{gift.body}</div>
        </>
      ) : (
        <p>
          <strong>#{gift.id}</strong>
        </p>
      )}
    </div>
  );
}
