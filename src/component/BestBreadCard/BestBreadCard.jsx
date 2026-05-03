
const BestBreadCard = ({ data }) => {
    const { name, description, image } = data;
    return (
        <div>
            <div className="card">
                <img className="w-[100%] h-96" src={image} alt="animal" />
                <div className="h-38 space-y-5">
                    <h2 className="text-2xl font-semibold">{name}</h2>
                    <p className="text-sm font-medium">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default BestBreadCard;