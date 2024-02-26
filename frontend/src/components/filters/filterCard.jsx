import { useState } from 'react';

const FilterCard = ({ onSearchChange }) => {
    const [search, setSearch] = useState('');



    const handleSearchChange = () => {
        onSearchChange(search.toLowerCase());
    };

    return (
        <div className="bg-white mx-10 my-5 p-3 shadow rounded-lg sticky top-20 sm:top-4 z-40 flex">
            <input className='w-full'
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <svg onClick={handleSearchChange} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-red-600 hover:text-white hover:cursor-pointer rounded-full hover:bg-red-600 w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>

        </div>
    );
};

export default FilterCard;
