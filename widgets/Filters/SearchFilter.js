import React, {useState, useEffect } from 'react'

function SearchFilter({book, setBooks}) {
    const [search, setSearch] = useState('');
    const handleChange =(e)=>{
        setSearch(e.target.value)
    };
    useEffect(() => {
        const results = book.filter(books =>
            books.title.toLowerCase().includes(search)
        );
        setBooks(results)
        console.log(results)
    }, [search]);

    return(
        <React.Fragment>
            <input value={search} onChange={handleChange} placeholder='Введите запрос...' className='setSearch' />
        </React.Fragment>
    )
}

export default SearchFilter
