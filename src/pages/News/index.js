import React,{Component} from "react";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import {Layout} from "../../ui/Layout";
import {Description} from "../../ui/Description";
import {actionGetNews} from "../../store/News/actionNews";
import {Loader} from "../../widgets/Loader";
import './style.scss'

class News extends Component{

    componentDidMount() {
        this.props.getAllNews()
    }
    render() {
        const {loader, news} = this.props;
        return(
            <React.Fragment>
                <Layout>
                {loader ? <Loader/> :
                    <Layout direction="row" wrap="wrap">
                        {news.data.map(post => (
                            <div key={post.id} className="news-item">
                                <Description size="l">{post.title}</Description>
                                <Description extraClass="news-item-text">{post.text}</Description>
                            </div>
                        ))}
                    </Layout>
                }
                </Layout>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        news: state.getNews.news,
        loader: state.getNews.loader
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getAllNews: bindActionCreators(actionGetNews, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(News)