import React,{Component} from 'react'
import PropTypes from "prop-types"
import "./style.scss"
import {Logo} from "../../ui/Logo";

class ScrollButton extends Component{
    state = {
        isVisible: false,
    };
    componentDidMount(){
        document.addEventListener("scroll", ()=>{this.toScroll()})
    }
    toScroll(){
        if(window.pageYOffset > this.props.scrollPoint){
            this.setState({isVisible: true})
        }
        else{
            this.setState({isVisible: false})
        }
    }
    scrollToTop(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    render() {
        const {isVisible} = this.state;
        return(
            <React.Fragment>
                {isVisible ?
                    <span className="scrollToTop" onClick={this.scrollToTop}>
                        &#187;
                    </span>
                 : ''}
            </React.Fragment>
        )
    }
}

ScrollButton.propTypes = {
    scrollPoint: PropTypes.number
};
ScrollButton.defaultProps = {
    scrollPoint: 300
};


export {ScrollButton}