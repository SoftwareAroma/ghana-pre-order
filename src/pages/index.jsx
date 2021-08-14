import React from "react";
import Link from 'next/link';
import {ProductCard} from "../components/components";

const Home = () => {

    const filterCollections = () => {

    }

    return (
        <>
            {/* main body content goes here */}
            <main className="w-full h-full">
                {/* hero section */}
                <div>
                    <div className="bg-pink-600 h-96">
                        <div className="bg-blue-200 h-10"></div>
                    </div>
                </div>

                {/* filter the products */}
                <div className="">
                    {/* filter items list */}
                    <div className="py-2 pr-2 pl-2 flex justify-between items-center bg-gray-300">
                        <div>
                            <ul className="grid grid-cols-3 gap-2 md:flex md:flex-row md:items-center">
                                <li onMouseDown={filterCollections} className="px-4 font-bold hover:text-indigo-700 text-indigo-800 uppercase">
                                    <Link href="">
                                        <a>All</a>
                                    </Link>
                                </li>
                                <li onMouseDown={filterCollections} className="px-4 font-bold hover:text-indigo-700 uppercase">
                                    <Link href="">
                                        <a>Trousers</a>
                                    </Link>
                                </li>
                                <li onMouseDown={filterCollections} className="px-4 font-bold hover:text-indigo-700 uppercase">
                                    <Link href="">
                                        <a>Shirts</a>
                                    </Link>
                                </li>
                                <li onMouseDown={filterCollections} className="px-4 font-bold hover:text-indigo-700 uppercase">
                                    <Link href="">
                                        <a>Abaaya</a>
                                    </Link>
                                </li>
                                <li onMouseDown={filterCollections} className="px-4 font-bold hover:text-indigo-700 uppercase">
                                    <Link href="">
                                        <a>Electronics</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Products section */}
                    <div className="grid px-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>


                {/* Statistics */}
                <div className="bg-blue-700 h-96 mt-4">
                    <div className="flex justify-between items-center">
                        <h1>Statistics goes here</h1>
                    </div>
                </div>

                {/* reviews */}
                <div className="bg-white h-96 mt-4">
                    <div className="flex justify-between items-center">
                        <h1>Reviews goes here</h1>
                    </div>
                </div>

                {/* about */}
                <div className="bg-pink-600 h-96 mt-4">
                    <div className="flex justify-between items-center">
                        <h1>Something small about us</h1>
                    </div>
                </div>

            </main>
        </>
    );
}

export default Home;
