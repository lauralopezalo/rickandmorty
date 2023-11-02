// Custom Hook: useInfiniteScroll
// This hook sets up an event listener for scrolling to the bottom of a page,
// and triggers a callback function when the bottom of the page is reached.
// Parameters:
//   - callback: The function to be executed when the bottom of the page is reached.


import { useEffect } from 'react';


const useInfiniteScroll = (callback) => {

    useEffect(() => {
        const handleScroll = () => {
            const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
            if (bottom) {
                callback();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [callback]);

};

export default useInfiniteScroll;
