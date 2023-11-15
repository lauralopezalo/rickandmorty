import React from "react";

const Spinner = () => {
	return (
		<div className="h-screen">
			<div className='absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2'>
				<div className='border-t-transparent animate-spin rounded-full border-mydark border-4 h-24 w-24'></div>
			</div>
		</div>
	);
};

export default Spinner;
