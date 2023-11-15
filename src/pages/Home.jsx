import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
        return (
        <div className="h-screen overflow-hidden">
            < div className="bg-[url(/img-background4.jpg)] bg-cover bg-top bg-no-repeat h-full"   >
                <div className="bg-gradient-to-t md:bg-gradient-to-r from-black to-transparent p-8 md:p-12 lg:px-16 lg:py-24 h-screen flex flex-col justify-end text-center md:text-left md:justify-center">
                    <div className="container md:max-w-sm">
                        <p className="text-mylight md:mt-6 md:block md:text-lg">
                            Welcome to the</p>
                        <h2 className="text-2xl font-bold text-mylight sm:text-3xl md:text-5xl">
                            Ultimate Rick & Morty Encyclopedia
                        </h2>
                        <p className="hidden max-w-lg text-mylight md:mt-6 md:block md:text-lg md:leading-relaxed">
                            <br /><br />
                            Dive into the fascinating world of Rick & Morty, the beloved animated series that takes you on mind-bending adventures across the multiverse. Our website is your go-to destination for exploring a comprehensive database of characters and locations from every corner of the Rick & Morty universe.
                            <br /><br />
                            Start exploring now and unlock the secrets of the Rick & Morty universe. Happy adventuring!
                        </p>
                        <div className="mt-4 sm:mt-8 flex">
                            <button>
                                <Link to='/characters-list'>Get started!</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div >


        </div>











    )
}
export default Home;