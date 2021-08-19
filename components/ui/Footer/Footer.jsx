import React from 'react';
import Link from 'next/link';
import {useStateValue} from "../../../Provider/StateProvider";
import Image from "next/image";
import {Logo} from "../../../assets/assetExports";

const Footer = (props) => {

    const  {handleTheme} = props;
    const [{theme}] = useStateValue();

    return (
        <>
            <footer className="bg-black dark:bg-gray-900">
                {/* details section */}
                <div className="container px-6 py-12 mx-auto">
                    <div className="lg:flex">
                        <div className="w-full -mx-6 lg:w-2/5">
                            <div className="px-6">
                                <div>
                                    <Link href="/">
                                        <a>
                                            <Image src={Logo} height={100} width={100} alt="ghana pre order"/>
                                        </a>
                                    </Link>
                                </div>
                                <div className="flex mt-4 -mx-2">
                                    <Link href="/">
                                        <a className="text-gray-500 cursor-pointer">
                                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 hover:text-blue-700"
                                                 viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                                            </svg>
                                        </a>
                                    </Link>
                                    <Link href="/">
                                        <a className="ml-3 text-gray-500 cursor-pointer">
                                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 hover:text-blue-700"
                                                 viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                                            </svg>
                                        </a>
                                    </Link>
                                    <Link href="/">
                                        <a className="ml-3 text-gray-500 cursor-pointer">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                 className="w-5 h-5 hover:text-blue-700" viewBox="0 0 24 24">
                                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"/>
                                            </svg>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 lg:mt-0 lg:flex-1">
                            <div className="grid grid-cols-3 gap-4 md:grid-cols-3">
                                <div>
                                    <h3 className="text-gray-300 hover:text-gray-400 cursor-default font-bold uppercase dark:text-gray-200 dark:hover:text-gray-300">About</h3>
                                    <a href="#" className="block mt-2 text-sm text-gray-400 hover:text-gray-200 dark:text-gray-400 hover:underline">Company</a>
                                    <a href="#" className="block mt-2 text-sm text-gray-400 hover:text-gray-200 dark:text-gray-400 hover:underline">community</a>
                                    <a href="#" className="block mt-2 text-sm text-gray-400 hover:text-gray-200 dark:text-gray-400 hover:underline">Services</a>
                                </div>

                                <div>
                                    <h3 className="text-gray-300 hover:text-gray-400 cursor-default font-bold uppercase dark:text-gray-200 dark:hover:text-gray-300">Services</h3>
                                    <a href="#" className="block mt-2 text-sm text-gray-400 hover:text-gray-200  dark:text-gray-400 hover:underline">Mega cloud</a>
                                    <a href="#" className="block mt-2 text-sm text-gray-400 hover:text-gray-200  dark:text-gray-400 hover:underline">Aperion UI</a>
                                    <a href="#" className="block mt-2 text-sm text-gray-400 hover:text-gray-200  dark:text-gray-400 hover:underline">Material UI</a>
                                </div>

                                <div>
                                    <h3 className="text-gray-300 hover:text-gray-400 cursor-default font-bold uppercase dark:text-gray-200 dark:hover:text-gray-300">Contact</h3>
                                    <span className="block mt-2 text-sm cursor-pointer text-gray-400 hover:text-gray-200  dark:text-gray-400 hover:underline">+1 526 654 8965</span>
                                    <span className="block mt-2 text-sm cursor-pointer text-gray-400 hover:text-gray-200  dark:text-gray-400 hover:underline">example@email.com</span>

                                    <div className="dark:bg-gray-900 mt-4 bg-black relative w-12 cursor-pointer">
                                        <div className="dark:bg-gray-900 p-4 border border-solid border-gray-400 dark:border-gray-100" onClick={handleTheme}>
                                            {theme && (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 m-auto ml-3 text-gray-700 dark:text-gray-50 hover:text-gray-600 dark:hover:text-gray-400  icon icon-tabler icon-tabler-brightness-up" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <circle cx={12} cy={12} r={3} />
                                                    <line x1={12} y1={5} x2={12} y2={3} />
                                                    <line x1={17} y1={7} x2="19.4" y2="5.6" />
                                                    <line x1={19} y1={12} x2={21} y2={12} />
                                                    <line x1={17} y1={17} x2="19.4" y2="19.4" />
                                                    <line x1={12} y1={19} x2={12} y2={21} />
                                                    <line x1={7} y1={17} x2="5.6" y2="19.4" />
                                                    <line x1={6} y1={12} x2={4} y2={12} />
                                                    <line x1={7} y1={7} x2="5.6" y2="5.6" />
                                                </svg>
                                            )}
                                            {!theme && (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 m-auto ml-3 text-gray-400 dark:text-gray-50 hover:text-gray-600 dark:hover:text-gray-400 icon icon-tabler icon-tabler-moon" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -9.313 -12.454z" />
                                                </svg>
                                            )}
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    <hr className="h-px my-6 bg-gray-700 border-none dark:bg-gray-700" />

                    <div className="flex justify-between items-center">
                        <div>
                            <Link href="/">
                                <a>
                                    <Image src={Logo} height={50} width={50} alt="ghana pre order"/>
                                </a>
                            </Link>
                        </div>

                        <div className="mb-4 md:mb-0">
                            <p className="cursor-default mt-6 text-xs lg:text-sm leading-none text-gray-500 dark:text-gray-50">
                                &copy; Ghana Pre Order {new Date().getFullYear()} . All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;