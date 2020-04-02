import React, {useState } from 'react'

function SearchBooks({book, setBooks}) {
    const [search, setSearch] = useState('');
    const handleChange =(e)=>{
        setSearch(e.target.value)
    };
    const handleClick =(e)=>{
        if (e.key === 'Enter') {
            const results = book.filter(books =>
                books.title.toLowerCase().includes(search)
            );
            console.log(results)
        }
    }

    return(
        <React.Fragment>
            <input value={search}
                   onChange={handleChange}
                   placeholder='Введите запрос...'
                   className='setSearch'
            />
            <button onClick={handleClick}>Поиск</button>
        </React.Fragment>
    )
}

export {SearchBooks}

