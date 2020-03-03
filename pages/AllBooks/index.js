import React  from "react";
import { connect } from "react-redux"
import {Layout} from "../../ui/Layout";
import actionFilterBooks from "../../store/actions/actionFilterBooks";
import {ListBooks} from "../../modules/ListBooks";
import {AddBook} from "./AddBook";
import {Filter} from "../../widgets/Filters/Filter";

function AllBooks ({books, setBookFunction}){
    return(
        <React.Fragment>
            <Layout extraClass='container'>
                <Layout wrap='wrap' direction='row' justify='spaceBetween' extraClass='listBooks'>
                    <Filter books={books} setBooks={setBookFunction} />
                    <ListBooks books={books}  />
                    <AddBook books={books} setBooks={setBookFunction} />
                    Добавим
                </Layout>
            </Layout>
        </React.Fragment>
    )
}


function mapStateToProps(state) {
    return {
        books: state.bookInfo.books
    }
}
function mapDispatchToProps(dispatch) {
    return {
        setBookFunction: books => {
            dispatch(actionFilterBooks(books))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AllBooks)






