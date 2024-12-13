'use client'
import React, { useState, useEffect } from "react";
import GiftCard from "../GiftCard/GiftCard";
import './GiftList.css'

export default function GiftList({ giftList }) {
  useEffect(() => {
    console.log(giftList);
  }, [giftList]);

  return (
    <div className="gift-list">
      {giftList.map((gift, index) => {
        return <GiftCard key={index} gift={gift} id={index} />;
      })}
    </div>
  );
}
