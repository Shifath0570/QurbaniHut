
const AnimalDetailsPage =async ({params}) => {
    const {id} =await params;
    const res = await fetch("https://qurbani-hut-iyr5.vercel.app/data/data.json")
    const datas = await res.json()
    const data = datas.find(dn => dn.id == id)
    const { name, type, breed, price, weight, age, location, description, image, category } = data;
    console.log(id)
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default AnimalDetailsPage;