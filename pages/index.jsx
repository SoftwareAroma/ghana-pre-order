import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import {ProductCard} from "../components/components";
import Video from '../assets/videos/asian-buying-online.mp4';
import Video1 from '../assets/videos/video-selling.mp4';
import {Avatar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: "100px",
        height: "100px",
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
}));

const Home = () => {

    const styles = useStyles();

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
                    <div className="absolute bottom-0 bg-white bg-opacity-50 p-4 w-full px-5 py-4 mx-auto">
                        <div className="flex flex-wrap -m-4 text-center">
                            <div className="p-4 sm:w-1/4 w-1/2">
                                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900 font-black">2.7K</h2>
                                <p className="leading-relaxed md:text-lg text-brand-deep uppercase font-bold">Users</p>
                            </div>
                            <div className="p-4 sm:w-1/4 w-1/2">
                                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900 font-black">1.8K</h2>
                                <p className="leading-relaxed md:text-lg text-brand-deep uppercase font-bold">Satisfied Customers</p>
                            </div>
                            <div className="p-4 sm:w-1/4 w-1/2">
                                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900 font-black">2.5K</h2>
                                <p className="leading-relaxed md:text-lg text-brand-deep uppercase font-bold">Deliveries</p>
                            </div>
                            <div className="p-4 sm:w-1/4 w-1/2">
                                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900 font-black">4.0K</h2>
                                <p className="leading-relaxed md:text-lg text-brand-deep uppercase font-bold">Products</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* filter the products */}
                <div className="">
                    {/* filter items list */}
                    <div className="py-2 pr-2 pl-2 flex justify-between items-center bg-brand-deep">
                        <div>
                            <ul className="grid grid-cols-4 gap-2 md:flex md:flex-row md:items-center">
                                <li onMouseDown={filterCollections} className="px-4 font-bold text-lg md:text-xl lg:text-2xl hover:text-gray-300 text-yellow-400 uppercase">
                                    <Link href="">
                                        <a>All</a>
                                    </Link>
                                </li>
                                <li onMouseDown={filterCollections} className="px-4 font-bold text-lg md:text-xl lg:text-2xl hover:text-gray-300 text-white uppercase">
                                    <Link href="">
                                        <a>Trousers</a>
                                    </Link>
                                </li>
                                <li onMouseDown={filterCollections} className="px-4 font-bold text-lg md:text-xl lg:text-2xl hover:text-gray-300 text-white uppercase">
                                    <Link href="">
                                        <a>Shirts</a>
                                    </Link>
                                </li>
                                <li onMouseDown={filterCollections} className="px-4 font-bold text-lg md:text-xl lg:text-2xl hover:text-gray-300 text-white focus:text-yellow-400 uppercase">
                                    <Link href="">
                                        <a>Abaaya</a>
                                    </Link>
                                </li>
                                <li onMouseDown={filterCollections} className="px-4 font-bold text-lg md:text-xl lg:text-2xl hover:text-gray-300 text-white uppercase">
                                    <Link href="">
                                        <a>Electronics</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Products section */}
                    <div className="grid px-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 pt-4 pb-4">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>


                {/* Services */}
                <div className="bg-gradient-to-br from-indigo-600 to-pink-500">
                    <div className="flex justify-center items-center">
                        <section className="text-gray-600 body-font">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="text-center mb-20">
                                    <h1 className="sm:text-3xl text-2xl font-black title-font text-gray-50 mb-4 uppercase">Ghana Pre order</h1>
                                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-100">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
                                    <div className="flex mt-6 justify-center">
                                        <div className="w-16 h-1 rounded-full bg-yellow-400 inline-flex"> </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center bg-white md:border-r-2 border-red-500">
                                        <div className="w-20 h-20 shadow-md inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"> </path>
                                            </svg>
                                        </div>
                                        <div className="flex-grow">
                                            <h2 className="text-brand-deep uppercase text-lg title-font font-black mb-3">Shooting Stats</h2>
                                            <p className="leading-relaxed text-base text-gray-700">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                                            <Link href='/'>
                                                <a className="mt-3 text-indigo-600 inline-flex items-center cursor-pointer">Learn More
                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                        <path d="M5 12h14M12 5l7 7-7 7"> </path>
                                                    </svg>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center bg-white md:border-r-2 border-yellow-500">
                                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                                <circle cx="6" cy="6" r="3"> </circle>
                                                <circle cx="6" cy="18" r="3"> </circle>
                                                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"> </path>
                                            </svg>
                                        </div>
                                        <div className="flex-grow">
                                            <h2 className="text-brand-deep uppercase font-black text-lg title-font font-medium mb-3">The Catalyzer</h2>
                                            <p className="leading-relaxed text-base text-gray-700">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                                            <Link href='/'>
                                                <a className="mt-3 text-indigo-600 inline-flex items-center cursor-pointer">Learn More
                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                        <path d="M5 12h14M12 5l7 7-7 7"> </path>
                                                    </svg>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center bg-white">
                                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"> </path>
                                                <circle cx="12" cy="7" r="4"> </circle>
                                            </svg>
                                        </div>
                                        <div className="flex-grow">
                                            <h2 className="text-brand-deep uppercase font-black text-lg title-font mb-3">Neptune</h2>
                                            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                                            <Link href='/'>
                                                <a className="mt-3 text-indigo-600 inline-flex items-center cursor-pointer">Learn More
                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                        <path d="M5 12h14M12 5l7 7-7 7"> </path>
                                                    </svg>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                <div className="relative h-video object-contain m-0 p-0">
                    <video autoPlay muted loop className="object-cover h-video w-full absolute">
                        <source src={Video1} type="video/mp4"/>
                    </video>
                    <div className="absolute bottom-0 bg-white bg-opacity-75 w-full px-5 mx-auto">
                        <section className="text-gray-600 body-font">
                            <div className="container px-5 py-1 md:py-12 mx-auto">
                                <div className="grid grid-cols-2 md:flex md:flex-wrap -m-4 text-center">
                                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                        <div className="border-2 border-gray-400 px-4 py-6 rounded-lg">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                                <path d="M8 17l4 4 4-4m-4-5v9"> </path>
                                                <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"> </path>
                                            </svg>
                                            <h2 className="title-font font-medium text-3xl text-gray-900 font-black">2.5K</h2>
                                            <p className="leading-relaxed md:text-lg text-brand-deep uppercase font-bold">Deliveries</p>
                                        </div>
                                    </div>
                                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                        <div className="border-2 border-gray-400 px-4 py-6 rounded-lg">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"> </path>
                                                <circle cx="9" cy="7" r="4"> </circle>
                                                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"> </path>
                                            </svg>
                                            <h2 className="title-font font-medium text-3xl text-gray-900 font-black">2.7K</h2>
                                            <p className="leading-relaxed md:text-lg text-brand-deep uppercase font-bold">Users</p>
                                        </div>
                                    </div>

                                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                        <div className="border-2 border-gray-400 px-4 py-6 rounded-lg">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                            <h2 className="title-font font-medium text-3xl text-gray-900 font-black">1.8K</h2>
                                            <p className="leading-relaxed md:text-lg text-brand-deep uppercase font-bold">customers</p>
                                        </div>
                                    </div>

                                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                        <div className="border-2 border-gray-400 px-4 py-6 rounded-lg">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                                <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                                                <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
                                            </svg>
                                            <h2 className="title-font font-medium text-3xl text-gray-900 font-black">4.0k</h2>
                                            <p className="leading-relaxed md:text-lg text-brand-deep uppercase font-bold">Products</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                {/* reviews */}
                <div className="bg-gray-white pt-4 pb-4">
                    <div className="text-center mb-2 py-8">
                        <h1 className="sm:text-3xl text-2xl font-black title-font text-pink-600 dark:text-pink-600 mb-4 uppercase">What our customers say</h1>
                        <p className="text-base text-gray-700 dark:text-blue-100 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-100">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg-pink-600 inline-flex"> </div>
                        </div>
                    </div>
                    <section className="text-gray-600">
                        <div className="container px-5 py-12 mx-auto">
                            <div className="flex flex-wrap -m-4">
                                <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 border border-gray-300 dark:border-gray-400 cursor-default">
                                    <div className="h-full text-center flex flex-col items-center justify-center">
                                        <div className="mb-4">
                                            <Avatar className={styles.avatar} />
                                        </div>
                                        <p className="leading-relaxed dark:text-gray-300">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                        <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"> </span>
                                        <h2 className="text-pink-600 dark:text-pink-600 font-bold title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                                        <p className="text-indigo-700 dark:text-gray-100">Senior Product Designer</p>
                                    </div>
                                </div>
                                <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 border border-gray-300 dark:border-gray-400 cursor-default">
                                    <div className="h-full text-center flex flex-col items-center justify-center">
                                        <div className="mb-4">
                                            <Avatar className={styles.avatar} />
                                        </div>
                                        <p className="leading-relaxed dark:text-gray-300">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                        <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"> </span>
                                        <h2 className="text-pink-600 dark:text-pink-600 font-bold title-font tracking-wider text-sm dark:text-gray-100">ALPER KAMU</h2>
                                        <p className="text-indigo-700 dark:text-gray-100">UI Developer</p>
                                    </div>
                                </div>
                                <div className="lg:w-1/3 lg:mb-0 p-4 border border-gray-300 dark:border-gray-400 cursor-default">
                                    <div className="h-full text-center flex flex-col items-center justify-center">
                                        <div className="mb-4">
                                            <Avatar className={styles.avatar} />
                                        </div>
                                        <p className="leading-relaxed dark:text-gray-300">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                        <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"> </span>
                                        <h2 className="text-pink-600 dark:text-pink-600 font-bold title-font tracking-wider text-sm">HENRY LETHAM</h2>
                                        <p className="text-indigo-700 font-bold dark:text-gray-100">CTO</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>


            </main>
        </>
    );
}

export default Home;
