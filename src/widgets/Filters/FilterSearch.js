import React, {useState } from 'react'
import {Button} from "../../ui/Button";

function FilterSearch({books, updateBooks}) {
    const [search, setSearch] = useState('');
    const handleChange =(e)=>{
        setSearch(e.target.value)
    };
    const handleSearchClick = () => {
        const results = books.filter(books =>
            books.title.toLowerCase().includes(search)
        );
        updateBooks(results);
        setSearch("")
    };

    return(
        <React.Fragment>
            <input value={search}
                   onChange={handleChange}
                   placeholder='Введите запрос...'
                   className='setSearch'
            />
            <Button extraClass='search_btn' bStyle="main" onClick={handleSearchClick}>&#128269;</Button>
        </React.Fragment>
    )
}

export {FilterSearch}

