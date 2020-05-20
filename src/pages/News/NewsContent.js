import React from 'react';
import { connect } from 'react-redux';
import { Layout, Description } from '../../ui';

const NewsContent = ({ news }) => {
    return (
        <Layout extraClass="container listBooks">
            <Layout direction="row" wrap="wrap" justify="space-evenly">
                <Layout extraClass="news_item_content">
                    <Description position="center" size="l">
                        {news.title}
                    </Description>
                    <Description extraClass="news-content">{news.text}</Description>
                </Layout>
            </Layout>
        </Layout>
    );
};

function mapStateToProps(state) {
    return {
        news: state.getNews.id,
    };
}

export default connect(mapStateToProps)(NewsContent);
