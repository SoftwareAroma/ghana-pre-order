import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Badge} from "@material-ui/core";
import {useStateValue} from "../../../Provider/StateProvider";
import {SearchBar} from '../../components';
import {Logo} from "../../../assets/assetExports";

const NavBar = (props) => {

    const { handleOpenDrawer } = props;

    const [{user}] = useStateValue();

    return (
        <>
            <div className="flex flex-row justify-between items-center">
                <div className="hidden md:flex">
                    <Link href="/">
                        <a>
                            <Image src={Logo} height={50} width={50} alt="ghana pre order"/>
                        </a>
                    </Link>
                </div>
                <div className="hidden md:flex mr-2 ml-2">
                    <SearchBar/>
                </div>
                <div className="flex">
                    <div className="flex items-center">
                        {/* cart and cart items */}
                        <div>
                            {
                                user ? <div>
                                    <div className="mr-4 cursor-pointer">
                                        <Badge showZero badgeContent={0} color="secondary">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-50"
                                                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                                            </svg>
                                        </Badge>
                                    </div>
                                </div> : null
                            }
                        </div>

                        {/* user log in or profile icon based on user status */}
                        <div>
                            {
                                user ?
                                    <div>
                                        <div className="bg-gray-500 cursor-pointer rounded-full">
                                            <Badge badgeContent={0} color="primary">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                     className="h-10 w-10 text-gray-50" viewBox="0 0 20 20"
                                                     fill="currentColor">
                                                    <path fillRule="evenodd"
                                                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                                          clipRule="evenodd"/>
                                                </svg>
                                            </Badge>
                                        </div>
                                    </div> :
                                    <div className="hidden md:flex items-center">
                                        <Link href="/auth">
                                            <a className="text-gray-800 text-center dark:text-gray-50 cursor-pointer border border-gray-700 dark:border-gray-200 px-4 py-2 hover:bg-black dark:hover:bg-gray-50 hover:text-gray-50 dark:hover:text-gray-900">
                                                Sign In
                                            </a>
                                        </Link>
                                        <Link href="/auth/signup">
                                            <a className="text-gray-800 text-center ml-2 dark:text-gray-50 cursor-pointer border border-gray-700 border-opacity-0 px-4 py-2 hover:bg-black dark:hover:bg-gray-50 hover:text-gray-50 dark:hover:text-gray-900">
                                                Sign Up
                                            </a>
                                        </Link>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile nav */}
            <div className="flex justify-between items-center md:hidden">
                <div className="flex items-center">
                    <Link href="/">
                        <a>
                            <Image src={Logo} height={50} width={50} alt="ghana pre order"/>
                        </a>
                    </Link>
                </div>
                <div className="md:hidden block cursor-pointer" onMouseDown={handleOpenDrawer}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-900" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>

        </>
    );
}

export default NavBar;