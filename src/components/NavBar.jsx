import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <div className="border-b border-black bg-red-500">
            <div className="mx-auto max-w-screen-xl p-3">
                <nav className="gap-8 flex justify-center">
                    <button >
                        <Link to="/">Home</Link>
                    </button>
                    <button >
                        <Link to="/characters-list">Characters</Link>
                    </button>
                    <button >
                        <Link to="/locations-list">Locations</Link>
                    </button>
                    <button >
                        <Link to="/episodes-list">Episodes</Link>
                    </button>
                </nav>
            </div>

        </div>
    );
};

export default NavBar;
