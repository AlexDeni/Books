import React, {useState} from "react";
import PropTypes from 'prop-types'
import {Description} from "../../ui/Description";
import {Button} from "../../ui/Button";

function AddBook({onCreate}) {
    const [valueTitle, setTitle] = useState('');
    const [valueAuthor, setAuthor] = useState('');
    const [valueRating, setRating] = useState(0);


    function addOne(e) {
        e.preventDefault();
        onCreate(valueTitle, valueAuthor, valueRating);
        setTitle('');
        setAuthor('');
        setRating( '');
    }

    return(
            <form onSubmit={addOne} className='addBook'>
                <Description extraClass='loadImage'>Загрузите фотографию</Description>
                <input type="file" name="photo" multiple accept="image/*,image/jpeg" />
                <input value={valueTitle} onChange={event => setTitle(event.target.value)} className='addTitle' placeholder='Название' />
                <input value={valueAuthor} onChange={event => setAuthor(event.target.value)} className='addAuthor' placeholder='Автор' />
                <input type="range" className='addRating' min="0" max="5"  step="1" value={valueRating} onChange={event => setRating(Number(event.target.value))} />
                <Button type='submit'>Добавить книгу</Button>
            </form>
    )
}
AddBook.propTypes = {
    onCreate: PropTypes.func
};

export {AddBook}