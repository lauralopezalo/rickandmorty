import { Link } from "react-router-dom";

const NavBar = () => {

    const handleClearFilters = () => {
        localStorage.clear();
    };

    return (
        <div className="hidden sm:flex justify-center mx-auto max-w-screen-xl p-3">
            <div className="border-b border-gray-200">
                <nav className="-mb-px flex gap-6">
                    <button onClick={handleClearFilters} className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:text-gray-100">
                        <Link to="/">Home</Link>
                    </button>
                    <button onClick={handleClearFilters} className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                        <Link to="/characters-list">Characters</Link>
                    </button>
                    <button onClick={handleClearFilters} className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                        <Link to="/locations-list">Locations</Link>
                    </button>
                    <p onClick={() => handleClearFilters("episodes")} className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                        <Link to="/episodes-list">Episodes</Link>
                    </p>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
