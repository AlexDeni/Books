import none from '../static/none.jpg'
import book_1 from '../static/book_1.jpg'

const IMAGES = {
    none: none,
    book_1: book_1
};

export function getImage(image) {
    if(IMAGES.hasOwnProperty(image)){
        return IMAGES[image]
    }
    return none
}