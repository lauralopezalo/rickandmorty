import { Link } from "react-router-dom";

const NavBar = () => {

    const handleClearFilters = () => {
        localStorage.clear();
    };

    return (
        <div className="hidden sm:flex justify-center mx-auto max-w-screen-xl p-3">
            <div className="border-b border-gray-200">
                <nav className="-mb-px flex gap-6">
                    <p onClick={handleClearFilters} className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-md font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                        <Link to="/">Home</Link>
                    </p>
                    <p onClick={handleClearFilters} className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-md font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                        <Link to="/characters-list">Characters</Link>
                    </p>
                    <p onClick={handleClearFilters} className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-md font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                        <Link to="/locations-list">Locations</Link>
                    </p>
                    <p onClick={handleClearFilters} className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-md font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                        <Link to="/episodes-list">Episodes</Link>
                    </p>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
