import AnimalCard from "@/component/AnimalCard/AnimalCard";
import { getAllAnimalData } from "@/lib/data";

const AllAnimalsPage =async () => {
    const datas = await getAllAnimalData();
    return (
        <div className="container mx-auto">
            <h2 className="text-center text-3xl font-semibold my-15">All Animals</h2>
            <div className="grid grid-cols-4 gap-10">
                {
                    datas.map(data => <AnimalCard key={data.id} data={data}></AnimalCard>)
                }
            </div>
        </div>
    );
};

export default AllAnimalsPage;