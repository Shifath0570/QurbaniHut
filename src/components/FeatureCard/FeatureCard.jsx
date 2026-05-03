import Image from "next/image";

const FeatureCard = ({ data }) => {
    const { name, description, image, type, breed } = data;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
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
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;