import { useEffect } from 'react';


/**
 * The `useInfiniteScroll` function is a custom hook in JavaScript that triggers a callback function
 * when the user scrolls to the bottom of the page.
 * @param callback - The callback parameter is a function that will be called when the user reaches the
 * bottom of the page and triggers the infinite scroll. This function can be used to load more data or
 * perform any other action required for the infinite scroll functionality.
 */
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
