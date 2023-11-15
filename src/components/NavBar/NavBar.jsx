import { Link } from "react-router-dom";
import { HamburgerIcon, XIcon } from "../../../public/icons";
import { useState } from "react";

import { NavBarLink } from "./NavBar.style";

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
			{/* Desktop */}
			<div className='hidden bg-mydark sm:flex justify-center mx-auto w-screen-xl p-3 pt-5'>
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
					<div className='flex-shrink-0'>
						<h1 className='text-mylight text-2xl font-bold'>
							Rick&Morty Encyclopedia
						</h1>
					</div>
					<div className='block sm:hidden'>
						<div onClick={toggleMenu}>
							<HamburgerIcon />
						</div>
					</div>
					<div
						className={`py-20 text-right h-screen w-screen bg-mydark z-50 ${
							isMenuOpen ? "fixed top-0 left-0" : "hidden"
						} `}>
						<div
							onClick={toggleMenu}
							className='fixed top-5 right-3'>
							<XIcon />
						</div>
						<NavBarLink
							onClick={() => {
								handleClearFilters();
								toggleMenu();
							}}>
							<Link to='/'>Home</Link>
						</NavBarLink>
						<NavBarLink
							onClick={() => {
								handleClearFilters();
								toggleMenu();
							}}>
							<Link to='/characters-list'>Characters</Link>
						</NavBarLink>
						<NavBarLink
							onClick={() => {
								handleClearFilters();
								toggleMenu();
							}}>
							<Link to='/locations-list'>Locations</Link>
						</NavBarLink>
						<NavBarLink
							onClick={() => {
								handleClearFilters();
								toggleMenu();
							}}>
							<Link to='/episodes-list'>Episodes</Link>
						</NavBarLink>
					</div>
				</div>
			</div>
		</>
	);
};

export default NavBar;
