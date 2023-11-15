import { useEffect } from 'react';

/**
 * The useFilterStorage function is a custom hook in JavaScript that saves a filter value to
 * localStorage whenever it changes.
 * @param filterName - The name of the filter that you want to store in the localStorage. It is used as
 * the key to store the filter value.
 * @param filterValue - The value of the filter that you want to store in the localStorage.
 */
const useFilterStorage = (filterName, filterValue) => {
    useEffect(() => {
        localStorage.setItem(filterName, filterValue);
    }, [filterValue]);
};

export default useFilterStorage;
