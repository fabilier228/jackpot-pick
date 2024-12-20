'use client'
import React, {useEffect, useState} from "react";
import GiftList from "../components/GiftList/GiftList";
import { gifts } from "../data/data";

const betterGifts = gifts.map(gift => {
    return { 
        id: 2, 
        title: "100€ Vavada", 
        body: "Wygraj 1000€ w kasynie Vavada", 
        url: "https://www.worldcasinodirectory.com/images/content/vavada-casino_1682415912232.jpg", 
        value: "mega win" 
      }
})



export default function DyruPage() {
    const [currentGifts, setCurrentGifts] = useState(betterGifts);


    return (
        <div className="main-content">
          <button className="losowanie">
            Losuj
          </button>
          <GiftList giftList={currentGifts} />
        </div>
    );
}