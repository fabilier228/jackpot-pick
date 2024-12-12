'use client'
import React, { useState, useEffect } from "react";
import GiftCard from "../GiftCard/GiftCard";
import './GiftList.css'

export default function GiftList({ giftList }) {
  useEffect(() => {
    console.log(giftList);
  }, [giftList]); // You should pass giftList as a dependency to avoid unnecessary re-renders

  return (
    <div className="gift-list">
      {giftList.map((gift) => {
        return <GiftCard key={gift.id} gift={gift} />;
      })}
    </div>
  );
}
