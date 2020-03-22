import React, {Component}  from "react";
import { connect } from "react-redux"
import {Layout} from "../../ui/Layout";
import {bindActionCreators} from 'redux';
import {actionGetBooks} from '../../store/Books/actionBooks'
import {ListBooks} from "../../modules/ListBooks";
import {Loader} from "../../widgets/Loader";
import {Button} from "../../ui/Button";
import FormikForm from "../../widgets/Formik";

class AllBooks extends Component {
    constructor() {
        super();
        this.state = {
            search: '',
            needBooks: '',
            filterStatus: '',
            isToggleRating: false
        };
        this.searchChange = this.searchChange.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleRatingClick = this.handleRatingClick.bind(this);
    }
    componentDidMount() {
        this.props.getAllBooks()
    }
    searchChange(e){
        this.setState({search: e.target.value})
    }
    handleSearchClick(){
        this.setState({
            needBooks: this.state.search,
            filterStatus: 'search',
            search: ''
        })
    }
    handleRatingClick(){
        this.setState({
            filterStatus: 'rating',
            isToggleRating: !this.state.isToggleRating
        })}
    render() {
        const {books, loader} = this.props;
        const {needBooks, filterStatus, isToggleRating, search} = this.state;
        if(!books){
            return null
        }
        let results = books;
        if(filterStatus === "search") {
            results = books.filter(books =>
                books.title.toLowerCase().includes(needBooks)
            );
        }
        if(filterStatus === "rating") {
            if(isToggleRating) {
                results = books.filter(books =>
                    books.title.toLowerCase().includes(needBooks)).sort((prev, next) => next.rating - prev.rating)
            }
            if(!isToggleRating) {
                results = results.sort((prev, next) => prev.rating - next.rating)
            }
        }
        return (
            <React.Fragment>
                <FormikForm/>
                {loader ? <Loader/> :
                    <Layout wrap='wrap' direction='row'  extraClass='listBooks'>
                        <input value={search}
                               onChange={this.searchChange}
                               placeholder='Введите запрос...'
                               className='setSearch'
                        />
                        <Button extraClass='search_btn' onClick={this.handleSearchClick}>&#128269;</Button>
                        <Button extraClass='rating_btn' onClick={this.handleRatingClick}>По рейтингу {isToggleRating ? <span>&#11015;</span> : <span>&#11014;</span>} </Button>
                        <ListBooks books={results} />
                    </Layout>
                }
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.getBooks.books,
        loader: state.getBooks.loader
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getAllBooks: bindActionCreators(actionGetBooks, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllBooks)


