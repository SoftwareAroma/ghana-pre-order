import React from 'react';
import Image from "next/image";
import {ClassicImage} from "../../../assets/assetExports";

const ProductCard = (props) => {
    return (
        <>
            <div className="hover:shadow-md cursor-pointer">
                <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-700 hover:border-opacity-0">
                    {/* product image */}
                    <div>
                        <Image
                            className="h-40 w-full object-cover object-center cursor-pointer mb-6 hover:scale-150 transform transition transition-all duration-300"
                            src={ClassicImage}
                            height={800}
                            alt="content"
                        />
                    </div>

                    {/* product titles and amount */}
                    <div className="flex flex-row justify-between py-2">
                        <div className="">
                            <h1 className="text-gray-800 px-2 text-indigo-800 dark:text-gray-100 font-bold tracking-wider">Product Title</h1>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="mr-2">
                                <h2 className="text-gray-700 dark:text-gray-50 font-bold">$200.0</h2>
                            </div>
                            <div className="mr-2 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-800 dark:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* details of the product */}
                    <div className="px-4">
                        <h3 className="tracking-widest text-indigo-500 dark:text-blue-400 text-xs font-medium title-font">SUBTITLE</h3>
                        <h2 className="text-lg text-gray-900 dark:text-gray-50 font-medium title-font mb-4">Colosseum Roma</h2>
                        <p className="leading-relaxed dark:text-gray-50 text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                    </div>

                    {/* add to cart or order now */}
                    <div className="flex flex-row justify-between items-center p-2">
                        <div className="flex justify-between items-center text-gray-800 dark:text-gray-50 hover:bg-blue-500 hover:text-white border border-blue-400 dark:border-gray-300 py-2 px-2 cursor-pointer hover:border-opacity-0">
                            <p className="px-2">Add to Cart</p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <div className="flex justify-between items-center text-gray-800 dark:text-gray-50 hover:bg-blue-500 hover:text-white border border-blue-400 dark:border-gray-300 py-2 px-2 cursor-pointer hover:border-opacity-0">
                            <p className="px-2">Order Now</p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductCard;
