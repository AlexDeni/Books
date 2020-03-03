export default function actionFilterBooks(books) {
    return{
        type: 'SET_BOOKS',
        payload: books
    }
}