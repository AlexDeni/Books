import React from "react";
import { connect } from "react-redux"
import {Layout} from "../../ui/Layout";
import {ListBooks} from "../../modules/ListBooks";
import {Slider} from "../../widgets/Slider";
import {Title} from "../../ui/Title";
import './style.scss'
import slide2 from '../../static/slide2.jpg';
import slide3 from '../../static/slide3.jpg';
import slide4 from '../../static/slide4.jpg';
import slide5 from '../../static/slide5.jpg';
import slide6 from '../../static/slide6.jpg';

const slidesInfo = [
    {
        image: slide2,
        content: "H"
    },
    {
        image: slide3,
        content: "HH"
    },
    {
        image: slide4,
        content: "Hello"
    },
    {
        image: slide5,
        content: "HD"
    },
    {
        image: slide6,
        content: "Hello"
    },
];

function Home({books}){
    return(
        <React.Fragment>
            <Slider slidesInfo={slidesInfo} size='allWidth' displayDot />
            <Layout extraClass="container">
                <Title tagName="h1" position="center" color="blue">Популярные товары</Title>
                <ListBooks books={books} num={4}/>
            </Layout>
        </React.Fragment>
    )
}

function mapStateToProps(state) {
    return {
        books: state.getBooks.books
    }
}

export default connect(mapStateToProps)(Home)