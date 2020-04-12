import React from "react";
import { connect } from "react-redux"
import {Layout} from "../../ui/Layout";
import {Description} from "../../ui/Description";
import {ListBooks} from "../../modules/ListBooks";
import {Slider} from "../../widgets/Slider";
import './style.scss'
import {Title} from "../../ui/Title";

const images = [
    'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
    'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
    'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'
];

function Home({books}){
    return(
        <Layout justify='space-between'>
            <Slider images={images} size='allWidth' displayDot slideShow/>
            <Layout extraClass="container">
                <Title tagName="h1" position="center" color="blue">Популярные товары</Title>
                <ListBooks books={books} num={4}/>
            </Layout>
        </Layout>
    )
}

function mapStateToProps(state) {
    return {
        books: state.getBooks.books
    }
}

export default connect(mapStateToProps)(Home)