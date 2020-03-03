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
    }, [search]);

    return(
        <React.Fragment>
            <input value={search} onChange={handleChange} placeholder='Введите запрос...' className='setSearch' />
        </React.Fragment>
    )
}

export default SearchFilter





/*
* import React, {useState, useEffect } from 'react'
import books from '../../modules/ListBooks/books.json';
import {ListBooks} from "../../modules/ListBooks";

function Search({count, setCount, setLoader}) {
    const [bok] = useState(books);
    const [search, setSearch] = useState('');
    const handleChange =(e)=>{
        setSearch(e.target.value)
    };

    useEffect(() => {
        const results = bok.filter(persons =>
            persons.title.toLowerCase().includes(search)
        );
        setTimeout(() => setLoader(false), 1);
        setTimeout(() => setCount(results), 1);

    }, [search]);

    return(
        <React.Fragment>
            <input value={search} onChange={handleChange} placeholder='Введите запрос...' className='setSearch' />
            <ListBooks books={count}  />
        </React.Fragment>
    )
}

export default Search*/
