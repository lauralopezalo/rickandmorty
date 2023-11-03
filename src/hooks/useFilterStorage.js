import { useEffect } from 'react';

const useFilterStorage = (filterName, filterValue) => {
    useEffect(() => {
        localStorage.setItem(filterName, filterValue);
    }, [filterValue]);
};

export default useFilterStorage;
