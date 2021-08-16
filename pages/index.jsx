import React from "react";
import Link from 'next/link';
import {ProductCard} from "../components/components";
import Video from '../assets/videos/asian-buying-online.mp4';

const Home = () => {

    const filterCollections = () => {

    }

    return (
        <>
            {/* main body content goes here */}
            <main className="w-full h-full">
                {/* hero section */}
                <div className="relative bg-pink-600 h-96 object-contain m-0 p-0">
                    <video autoPlay muted loop className="object-cover h-96 w-full absolute">
                        <source src={Video} type="video/mp4"/>
                    </video>
                    <div className="absolute bottom-0 bg-white bg-opacity-40 p-4 h-24 w-full">
                        <h1 className="text-white">Hello world</h1>
                    </div>
                </div>

                {/* filter the products */}
                <div className="">
                    {/* filter items list */}
                    <div className="py-2 pr-2 pl-2 flex justify-between items-center bg-indigo-800">
                        <div>
                            <ul className="grid grid-cols-3 gap-2 md:flex md:flex-row md:items-center">
                                <li onMouseDown={filterCollections} className="px-4 font-bold md:text-xl lg:text-2xl hover:text-gray-300 text-yellow-400 uppercase">
                                    <Link href="">
                                        <a>All</a>
                                    </Link>
                                </li>
                                <li onMouseDown={filterCollections} className="px-4 font-bold md:text-xl lg:text-2xl hover:text-gray-300 text-white uppercase">
                                    <Link href="">
                                        <a>Trousers</a>
                                    </Link>
                                </li>
                                <li onMouseDown={filterCollections} className="px-4 font-bold md:text-xl lg:text-2xl hover:text-gray-300 text-white uppercase">
                                    <Link href="">
                                        <a>Shirts</a>
                                    </Link>
                                </li>
                                <li onMouseDown={filterCollections} className="px-4 font-bold md:text-xl lg:text-2xl hover:text-gray-300 text-white focus:text-yellow-400 uppercase">
                                    <Link href="">
                                        <a>Abaaya</a>
                                    </Link>
                                </li>
                                <li onMouseDown={filterCollections} className="px-4 font-bold md:text-xl lg:text-2xl hover:text-gray-300 text-white uppercase">
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
