import React from "react";
import { Svg } from "../src/components/ProfileCard/ProfileCard.style";

export const FemaleIcon = () => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		width='30'
		height='30'
		viewBox='0 0 24 24'
		strokeWidth='1.5'
		stroke='var(--lightgray)'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'>
		<path stroke='none' d='M0 0h24v24H0z' fill='none' />
		<path d='M12 9m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0' />
		<path d='M12 14v7' />
		<path d='M9 18h6' />
	</Svg>
);

export const MaleIcon = () => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		className='iconColorClass'
		width='30'
		height='30'
		viewBox='0 0 24 24'
		strokeWidth='1.5'
		stroke='var(--lightgray)'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'>
		<path stroke='none' d='M0 0h24v24H0z' fill='none' />
		<path d='M10 14m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0' />
		<path d='M19 5l-5.4 5.4' />
		<path d='M19 5h-5' />
		<path d='M19 5v5' />
	</Svg>
);

export const GenderlessIcon = () => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		width='30'
		height='30'
		viewBox='0 0 24 24'
		strokeWidth='1.5'
		stroke='var(--lightgray)'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'>
		<path stroke='none' d='M0 0h24v24H0z' fill='none' />
		<path d='M12 12m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0' />
		<path d='M7 12h11' />
	</Svg>
);

export const GenderUnknownIcon = () => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		className='iconColorClass'
		width='30'
		height='30'
		viewBox='0 0 24 24'
		strokeWidth='1.5'
		stroke='var(--lightgray)'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'>
		<path stroke='none' d='M0 0h24v24H0z' fill='none' />
		<path d='M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4' />
		<path d='M12 19l0 .01' />
	</Svg>
);

export const AliveIcon = () => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		className='iconColorClass'
		width='30'
		height='30'
		viewBox='0 0 24 24'
		strokeWidth='1.5'
		stroke='var(--lightgray)'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'>
		<path stroke='none' d='M0 0h24v24H0z' fill='none' />
		<path d='M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572' />
	</Svg>
);

export const DeadIcon = () => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		className='iconColorClass'
		width='30'
		height='30'
		viewBox='0 0 24 24'
		strokeWidth='1.5'
		stroke='var(--lightgray)'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'>
		<path stroke='none' d='M0 0h24v24H0z' fill='none' />
		<path d='M12 4c4.418 0 8 3.358 8 7.5c0 1.901 -.755 3.637 -2 4.96l0 2.54a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-2.54c-1.245 -1.322 -2 -3.058 -2 -4.96c0 -4.142 3.582 -7.5 8 -7.5z' />
		<path d='M10 17v3' />
		<path d='M14 17v3' />
		<path d='M9 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
		<path d='M15 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
	</Svg>
);

export const StatusUnknownIcon = () => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		className='iconColorClass'
		width='30'
		height='30'
		viewBox='0 0 24 24'
		strokeWidth='1.5'
		stroke='var(--lightgray)'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'>
		<path stroke='none' d='M0 0h24v24H0z' fill='none' />
		<path d='M14.105 17.915l-2.105 2.085l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 0 1 8.524 5.127' />
		<path d='M19 22v.01' />
		<path d='M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483' />
	</Svg>
);

export const HamburgerIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		// className="icon icon-tabler icon-tabler-menu-2"
		width='28'
		height='28'
		viewBox='0 0 24 24'
		strokeWidth='1.6'
		stroke='#f9faf7'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'>
		<path stroke='none' d='M0 0h24v24H0z' fill='none' />
		<path d='M4 6l16 0' />
		<path d='M4 12l16 0' />
		<path d='M4 18l16 0' />
	</svg>
);

export const XIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		// className='icon icon-tabler icon-tabler-x'
		width='30'
		height='30'
		viewBox='0 0 24 24'
		strokeWidth='1.5'
		stroke='#f9faf7'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'>
		<path stroke='none' d='M0 0h24v24H0z' fill='none' />
		<path d='M18 6l-12 12' />
		<path d='M6 6l12 12' />
	</svg>
);

export const FilterIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		// className="icon icon-tabler icon-tabler-adjustments-horizontal"
		width='28'
		height='28'
		viewBox='0 0 24 24'
		strokeWidth='1.5'
		stroke='#f9faf7'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'>
		<path stroke='none' d='M0 0h24v24H0z' fill='none' />
		<path d='M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
		<path d='M4 6l8 0' />
		<path d='M16 6l4 0' />
		<path d='M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
		<path d='M4 12l2 0' />
		<path d='M10 12l10 0' />
		<path d='M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
		<path d='M4 18l11 0' />
		<path d='M19 18l1 0' />
	</svg>
);

export const SearchIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='icon-search'
		width='20'
		height='20'
		viewBox='0 0 24 24'
		strokeWidth='1.5'
		stroke='#2c3e50'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'>
		<path stroke='none' d='M0 0h24v24H0z' fill='none' />
		<path d='M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0' />
		<path d='M21 21l-6 -6' />
	</svg>
);

export const TriangleIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		// className="icon icon-tabler icon-tabler-triangle-inverted-filled"
		width='8'
		height='8'
		viewBox='0 0 24 24'
		strokeWidth='1.5'
		stroke='#2c3e50'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'>
		<path stroke='none' d='M0 0h24v24H0z' fill='none' />
		<path
			d='M20.118 3h-16.225a2.914 2.914 0 0 0 -2.503 4.371l8.116 13.549a2.917 2.917 0 0 0 4.987 .005l8.11 -13.539a2.914 2.914 0 0 0 -2.486 -4.386z'
			strokeWidth='0'
			fill='currentColor'
		/>
	</svg>
);
