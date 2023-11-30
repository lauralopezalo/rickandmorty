import React from "react";
import { Link } from "react-router-dom";
import { Button1 } from "../../GlobalStyle";
import { ImageContainer, GradientContainer } from "./Home.style";

const Home = () => {
	return (
		<div className='h-screen overflow-hidden text-mylight'>
			<ImageContainer>
				<GradientContainer>
					<div className='container md:max-w-sm lg:max-w-md xl:max-w-lg'>
						<p className='md:mt-6 md:block md:text-xl'>Welcome to the</p>
						<h2 className='text-2xl font-bold sm:text-3xl md:text-7xl text-lime'>
							Ultimate <span className='whitespace-nowrap'>Rick & Morty</span> Encyclopedia
						</h2>
						<p className='hidden max-w-lg md:mt-6 md:block md:text-lg lg:text-xl md:leading-relaxed'>
							<br />
							<br />
							Dive into the fascinating world of Rick & Morty, the beloved animated series that takes you
							on mind-bending adventures across the multiverse.
							<br />
							Our website is your go-to destination for exploring a comprehensive database of characters
							and locations from every corner of the Rick & Morty universe.
							<br />
							<br />
							Start exploring now and unlock the secrets of the
							<span className='whitespace-nowrap'> Rick & Morty</span> universe. Happy adventuring!
						</p>
						<div className='mt-4 sm:mt-8 flex justify-center'>
							<Link to='/characters-list'>
								<Button1>Get started!</Button1>
							</Link>
						</div>
					</div>
				</GradientContainer>
			</ImageContainer>
		</div>
	);
};
export default Home;
