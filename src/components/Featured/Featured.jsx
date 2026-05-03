import FeatureCard from "../FeatureCard/FeatureCard";


const Featured =async () => {
    const res = await fetch("https://qurbani-hut-iyr5.vercel.app/data/featureData.json")
    const datas = await res.json()

    return (
        <div className="container mx-auto ">
            <h2 className="text-center text-3xl font-semibold my-15">Featured Animals</h2>
            <div className="grid grid-cols-4 gap-10">
                {
                    datas.map(data=> <FeatureCard key={data.id} data={data}></FeatureCard>)
                }
            </div>
        </div>
    );
};

export default Featured;