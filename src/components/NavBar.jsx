import { Link } from "react-router-dom";

const NavBar = () => {

    const handleClearFilters = () => {
        localStorage.clear();
    };

    return (
        <div className="border-b border-black bg-red-500">
            <div className="mx-auto max-w-screen-xl p-3">
                <nav className="gap-8 flex justify-center">
                    <button onClick={handleClearFilters}>
                        <Link to="/">Home</Link>
                    </button>
                    <button onClick={handleClearFilters}>
                        <Link to="/characters-list">Characters</Link>
                    </button>
                    <button onClick={handleClearFilters}>
                        <Link to="/locations-list">Locations</Link>
                    </button>
                    <button onClick={handleClearFilters}>
                        <Link to="/episodes-list">Episodes</Link>
                    </button>
                </nav>
            </div>

        </div>
    );
};

export default NavBar;
