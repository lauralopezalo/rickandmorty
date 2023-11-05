
import { Link } from "react-router-dom";
import { HamburgerIcon } from "../../public/icons";
import { useState } from "react";

const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    const handleClearFilters = () => {
        localStorage.clear();
    };

    return (
        <>
            <div className="hidden bg-myblack sm:flex justify-center mx-auto w-screen-xl p-3 pt-5">
                <div className="border-b border-lime">
                    <nav className="-mb-px flex gap-6">
                        <p onClick={handleClearFilters} className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-md font-medium text-mywhite hover:border-gray-300 hover:text-lime">
                            <Link to="/">Home</Link>
                        </p>
                        <p onClick={handleClearFilters} className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-md font-medium text-mywhite hover:border-gray-300 hover:text-lime">
                            <Link to="/characters-list">Characters</Link>
                        </p>
                        <p onClick={handleClearFilters} className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-md font-medium text-mywhite hover:border-gray-300 hover:text-lime">
                            <Link to="/locations-list">Locations</Link>
                        </p>
                        <p onClick={handleClearFilters} className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-md font-medium text-mywhite hover:border-gray-300 hover:text-lime">
                            <Link to="/episodes-list">Episodes</Link>
                        </p>
                    </nav>
                </div>
            </div>



            <div className="bg-myblack sm:hidden">
                <div className="flex justify-between items-center mx-auto w-screen-xl p-3 pt-5">
                    <div className="flex-shrink-0">
                        <h1 className="text-mywhite text-2xl font-bold">Rick&Morty Encyclopedia</h1>
                    </div>
                    <div className="block sm:hidden">
                        <div onClick={toggleMenu}>
                            <HamburgerIcon />
                        </div>
                    </div>
                    <div className={`p-12 text-right h-screen w-screen bg-myblack z-50 ${isMenuOpen ? 'fixed top-0 left-0' : 'hidden'} `}>
                        <p onClick={() => { handleClearFilters(); toggleMenu(); }} className="border-b-2 border-transparent pb-4 text-md font-medium text-mywhite hover:border-gray-300 hover:text-lime">
                            <Link to="/">Home</Link>
                        </p>
                        <p onClick={() => { handleClearFilters(); toggleMenu(); }} className="border-b-2 border-transparent pb-4 text-md font-medium text-mywhite hover:border-gray-300 hover:text-lime">
                            <Link to="/characters-list">Characters</Link>
                        </p>
                        <p onClick={() => { handleClearFilters(); toggleMenu(); }} className="border-b-2 border-transparent pb-4 text-md font-medium text-mywhite hover:border-gray-300 hover:text-lime">
                            <Link to="/locations-list">Locations</Link>
                        </p>
                        <p onClick={() => { handleClearFilters(); toggleMenu(); }} className="border-b-2 border-transparent pb-4 text-md font-medium text-mywhite hover:border-gray-300 hover:text-lime">
                            <Link to="/episodes-list">Episodes</Link>
                        </p>
                    </div>
                    {/* Fin Lista de enlaces */}
                </div>
            </div >




        </>
    );
};

export default NavBar;
