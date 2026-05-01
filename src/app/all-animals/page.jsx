import AnimalCard from "@/component/AnimalCard/AnimalCard";

const AllAnimalsPage =async () => {
    const res = await fetch("https://qurbani-hut-iyr5.vercel.app/data/data.json")
    const datas = await res.json()

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