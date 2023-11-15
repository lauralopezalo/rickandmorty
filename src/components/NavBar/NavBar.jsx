import { Link } from "react-router-dom";
import { HamburgerIcon, XIcon } from "../../../public/icons";
import { useState } from "react";

import { NavBarLink } from "./NavBar.style";

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
		handleClearFilters();
	};

	const handleClearFilters = () => {
		localStorage.clear();
	};

	return (
		<>
			{/* Desktop */}
			<div className='hidden bg-mydark sm:flex justify-between items-center gap-5 w-screen-xl px-5 py-3'>
			<h1 className='text-mylight text-2xl font-bold'>Rick&Morty Encyclopedia</h1>
				<div>
					<nav className='flex'>
						<NavBarLink onClick={handleClearFilters}>
							<Link to='/'>Home</Link>
						</NavBarLink>
						<NavBarLink onClick={handleClearFilters}>
							<Link to='/characters-list'>Characters</Link>
						</NavBarLink>
						<NavBarLink onClick={handleClearFilters}>
							<Link to='/locations-list'>Locations</Link>
						</NavBarLink>
						<NavBarLink onClick={handleClearFilters}>
							<Link to='/episodes-list'>Episodes</Link>
						</NavBarLink>
					</nav>
				</div>
			</div>

			{/* Mobile */}
			<div className='bg-mydark sm:hidden'>
				<div className='flex justify-between items-center mx-auto w-screen-xl p-3 pt-5'>
					<h1 className='text-mylight text-2xl font-bold'>Rick&Morty Encyclopedia</h1>
					<div className='block sm:hidden'>
						<div onClick={() => setIsMenuOpen(!isMenuOpen)}>
							<HamburgerIcon />
						</div>
					</div>
					<div
						className={`py-20 text-right h-screen w-screen bg-mydark z-50 ${
							isMenuOpen ? "fixed top-0 left-0" : "hidden"
						} `}>
						<div onClick={toggleMenu} className='fixed top-5 right-3'>
							<XIcon />
						</div>
						<NavBarLink onClick={toggleMenu}>
							<Link to='/'>Home</Link>
						</NavBarLink>
						<NavBarLink onClick={toggleMenu}>
							<Link to='/characters-list'>Characters</Link>
						</NavBarLink>
						<NavBarLink onClick={toggleMenu}>
							<Link to='/locations-list'>Locations</Link>
						</NavBarLink>
						<NavBarLink onClick={toggleMenu}>
							<Link to='/episodes-list'>Episodes</Link>
						</NavBarLink>
					</div>
				</div>
			</div>
		</>
	);
};

export default NavBar;
