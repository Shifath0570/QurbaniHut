"use client";

import { useEffect, useState } from "react";
import AnimalCard from "@/component/AnimalCard/AnimalCard";

const AllAnimalsPage = () => {


    const [animals, setAnimals] = useState([]);
    const [sortOrder, setSortOrder] = useState("");

    useEffect(() => {
        fetch("https://qurbani-hut-iyr5.vercel.app/data/data.json")
            .then(res => res.json())
            .then(data => setAnimals(data));
    }, []);


    const sortedAnimals = [...animals].sort((a, b) => {
        if (sortOrder === "low") return a.price - b.price;
        if (sortOrder === "high") return b.price - a.price;
        return 0;
    });

    return (
        <div className="container mx-auto">
            <h2 className="text-center text-3xl font-semibold my-15">All Animals</h2>

            <div className="dropdown dropdown-start mb-10">
                <div tabIndex={0} role="button" className="btn m-1">Sort by Price ⬇️</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><button onClick={() => setSortOrder("low")}>Price: Low to High</button></li>
                    <li><button onClick={() => setSortOrder("high")}>Price: High to Low</button></li>
                </ul>
            </div>

            <div className="grid grid-cols-4 gap-10">
                {
                    sortedAnimals.map(data => <AnimalCard key={data.id} data={data}></AnimalCard>)
                }
            </div>
        </div>
    );
};

export default AllAnimalsPage;