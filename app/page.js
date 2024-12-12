import Image from "next/image";
import GiftList from "./components/GiftList/GiftList";
import { gifts } from "./data"; // Use import instead of require

export default function Home() {
  return (
    <GiftList giftList={gifts} />
  );
}
