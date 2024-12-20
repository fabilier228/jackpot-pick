'use client'
import GiftList from "./components/GiftList/GiftList";
import { gifts } from "./data/data";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [currentGifts, setCurrentGifts] = useState(gifts);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const savedGifts = localStorage.getItem("shuffledGifts");
  //     if (savedGifts) {
  //       setCurrentGifts(JSON.parse(savedGifts));
  //     }
  //   }
  // }, []);

  const randomSortGifts = () => {
    const shuffledGifts = [...currentGifts];
    for (let i = shuffledGifts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledGifts[i], shuffledGifts[j]] = [shuffledGifts[j], shuffledGifts[i]];
    }
    setCurrentGifts(shuffledGifts);
    localStorage.setItem("shuffledGifts", JSON.stringify(shuffledGifts));
  };

  return (
    <div className="main-content">
      <button className="losowanie" onClick={randomSortGifts}>
        Losuj
      </button>
      <GiftList giftList={currentGifts} />
    </div>
  );
}
