import { getBreadTips } from "@/lib/page";
import BestBreadCard from "../BestBreadCard/BestBreadCard";


const BestBreedAndTips =async () => {
    const datas =await getBreadTips();
    console.log(datas)
    
    return (
        <div className="container mx-auto">
            <h2 className="text-center text-3xl font-semibold my-15"> Best Breed And Tips</h2>
            <div className="grid grid-cols-2 gap-4">
                {
                    datas.map(data=> <BestBreadCard key={data.id} data={data}></BestBreadCard>)
                }
            </div>
        </div>
    );
};

export default BestBreedAndTips;