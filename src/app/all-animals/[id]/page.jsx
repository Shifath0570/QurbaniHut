import Image from "next/image";

const AnimalDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch("https://qurbani-hut-iyr5.vercel.app/data/data.json")
    const datas = await res.json()
    const data = datas.find(dn => dn.id == id)
    const { name, type, breed, price, weight, age, location, description, image, category } = data;
    console.log(id)
    return (
        <div className="container mx-auto my-10">
            <h2 className="text-2xl font-semibold my-5">{name} Details</h2>
            <div className="card card-side bg-base-100 shadow-sm">
                <figure className="relative w-[40%] h-96 aspect-square">
                    <Image src={image} alt="animals" fill></Image>
                </figure>
                <div className="w-[60%] p-10 space-y-3">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="flex justify-between items-center">
                        <p>Animal : {type}</p>
                        <p>Breed : {breed}</p>
                    </div>
                    <p>Weight : {weight}</p>
                    <p>Age : {age}</p>
                    <p>Price : {price}</p>
                    <p>Category : {category}</p>
                    <p>Location : {location}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default AnimalDetailsPage;