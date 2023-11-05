import React from "react";
import { Link } from 'react-router-dom';
import NavBar from "../components/NavBar";

const Home = () => {
    return (
        <div className="h-screen overflow-hidden">
            <NavBar />

            < div className="bg-[url(https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2016/10/rick-morty-critica.jpg?tf=1200x)] bg-cover bg-top bg-no-repeat h-full"
            >
                <div className="bg-gradient-to-r from-black to-transparent p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="text-center ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                            Rick&Morty
                        </h2>

                        <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
                            Welcome to the Ultimate Rick & Morty Encyclopedia!

                            Dive into the fascinating world of Rick & Morty, the beloved animated series that takes you on mind-bending adventures across the multiverse. Our website is your go-to destination for exploring a comprehensive database of characters and locations from every corner of the Rick & Morty universe.
                            
                            
                            Start exploring now and unlock the secrets of the Rick & Morty universe. Happy adventuring!

                        </p>

                        <div className="mt-4 sm:mt-8">
                            <button>
                                <Link to='/characters-list'>Get started</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div >


        </div>











    )
}
export default Home;