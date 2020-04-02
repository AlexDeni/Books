import React, {useState } from 'react'
import {Button} from "../../ui/Button";

function FilterSearch({books, needBooks, setBooks}) {
    const [search, setSearch] = useState('');
    const handleChange =(e)=>{
        setSearch(e.target.value)
    };

    const handleSearchClick = () => {
        const results = books.filter(books =>
            books.title.toLowerCase().includes(needBooks)
        );
        console.log(results)
        setSearch("")
    }


    return(
        <React.Fragment>
            <input value={search}
                   onChange={handleChange}
                   placeholder='Введите запрос...'
                   className='setSearch'
            />
            <Button extraClass='search_btn' onClick={handleSearchClick}>&#128269;</Button>
        </React.Fragment>
    )
}

export {FilterSearch}

