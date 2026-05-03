import Banner from "@/components/Banner/Banner";
import Featured from "@/components/Featured/Featured";
import BestBreedAndTips from "@/components/BestBreedAndTips/BestBreedAndTips"
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Featured></Featured>
      <BestBreedAndTips></BestBreedAndTips>
    </div>
  );
}
