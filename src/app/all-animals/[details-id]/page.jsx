
const DetailsPage =async ({params}) => {
    const {id} = await params;
    console.log(params)
    return (
        <div>
            <h2>Animals Details</h2>
        </div>
    );
};

export default DetailsPage;