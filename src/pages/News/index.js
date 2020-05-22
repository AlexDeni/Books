import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Layout, Description } from '../../ui';
import { actionOpenNews } from '../../store/News/actionNews';
import { Loader } from '../../widgets/LoaderError';
import './style.scss';
import { Link } from 'react-router-dom';
import ErrorText from '../../widgets/LoaderError/Error';

const clipText = (text, count) => {
	text = text.trim();
	if (text.length < count) return text;
	text = text.slice(0, count);
	return text.trim() + '...';
};

const News = ({ loader, news, openNewsContent, errorText }) => {
	const openNews = (post) => {
		openNewsContent(post);
	};
	if (errorText) {
		return <ErrorText errorText={errorText} />;
	}
	if (loader) return <Loader />;
	return (
		<Layout extraClass="container listBooks">
			<Layout direction="row" wrap="wrap" justify="space-evenly">
				{news.data.map((post) => (
					<Layout key={post.id} extraClass="news-item">
						<Link to={`/news/${post.id}`} onClick={() => openNews(post)}>
							<Description color="dark" position="center" size="l">
								{post.title}
							</Description>
						</Link>
						<Description extraClass="news-content">
							{clipText(post.text, 150)}
						</Description>
					</Layout>
				))}
			</Layout>
		</Layout>
	);
};

function mapStateToProps(state) {
	return {
		news: state.getNews.news,
		loader: state.getNews.loader,
		errorText: state.getNews.error,
	};
}
function mapDispatchToProps(dispatch) {
	return {
		openNewsContent: bindActionCreators(actionOpenNews, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(News);
