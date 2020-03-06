import React, {Component}  from "react";
import { connect } from "react-redux"
import {Layout} from "../../ui/Layout";
import { bindActionCreators } from 'redux';
import { getAllLibrary } from '../../store/actions/getAllLibrary'


class AllBooks extends Component {
   componentDidMount() {
        this.props.getAllLibrary()
    }
    render() {
        console.log(this.props.books)
        return (
            <React.Fragment>
                <Layout extraClass='container'>
                    <Layout wrap='wrap' direction='row' justify='spaceBetween' extraClass='listBooks'>

                        Добавим
                    </Layout>
                </Layout>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.bookInfo.books
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getAllLibrary: bindActionCreators(getAllLibrary, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllBooks)









