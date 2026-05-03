import Banner from "@/component/Banner/Banner";
import Featured from "@/component/Featured/Featured";
import BestBreedAndTips from "@/component/BestBreedAndTips/BestBreedAndTips"
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
