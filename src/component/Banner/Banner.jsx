import "../../../src/app/globals.css"

const Banner = () => {
    return (
        <div>
            <section className="banner">
                <div className="overlay flex justify-center items-center">
                    <div className="text-center space-y-10">
                        <h1 className="text-white text-6xl font-bold">Growing the Future <br /> with <span className="text-green-600">Sustainable</span> Farming.</h1>
                        <p className="text-gray-200 text-2xl font-medium">Eco-friendly solutions to feed the world while protecting the environment with <br /> sustainable farming practices.</p>
                        <button className="btn bg-green-600 rounded-full text-white text-lg border-none px-10 py-6">Browse Animals</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;