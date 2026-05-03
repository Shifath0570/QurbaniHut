import Image from "next/image";
import Link from "next/link";

const AnimalCard = ({ data }) => {
    const { id, name, type, breed, price, description, image } = data;
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure className="relative w-full h-64 aspect-square">
                    <Image src={image} alt="animals" fill></Image>
                </figure>
                <div className="p-5 space-y-2">
                    <div className="flex justify-between items-center">
                        <p className="bg-green-300 py-1 px-2 rounded-full text-sm">{type}</p>
                        <p className="bg-green-300 py-1 px-2 rounded-full text-sm">{breed}</p>
                    </div>
                    <h2 className="card-title">{name}</h2>
                    <p className="text-sm">{description}</p>
                    <p>{price}</p>
                    <div className="flex justify-center items-center">
                        <Link href={`/all-animals/${id}`}>
                            <button className="btn">Animal Details</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AnimalCard;