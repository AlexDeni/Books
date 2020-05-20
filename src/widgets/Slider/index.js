import React, { Component } from 'react';
import './slider.scss';
import { SlideImg } from './SlideImg';
import { Layout, Description } from '../../ui';
import { Dots } from './Dots';

class Slider extends Component {
    state = {
        currentImage: 0,
        slideShow: false,
    };
    componentDidMount() {
        if (this.props.slideShow) {
            this.timerID = setInterval(() => this.updateImg(), 7000);
        }
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    makePrevSlide = ({ allImg, currentNum }) => {
        if (currentNum > 0) {
            this.setState({ currentImage: currentNum - 1 });
        }
        if (currentNum === 0) {
            this.setState({ currentImage: allImg });
        }
    };
    makeNextSlide = ({ allImg, currentNum }) => {
        if (allImg > currentNum) {
            this.setState({ currentImage: currentNum + 1 });
        }
        if (allImg === currentNum) {
            this.setState({ currentImage: 0 });
        }
    };
    makeSlide = (e) => {
        e.preventDefault();
        let allImg = this.props.slidesInfo.length - 1;
        let currentNum = this.state.currentImage;
        let setDirection = e.currentTarget.dataset.direct;
        if (setDirection === 'prev') {
            this.makePrevSlide({ allImg, currentNum });
        }
        if (setDirection === 'next') {
            this.makeNextSlide({ allImg, currentNum });
        }
    };
    setImageDot = (value) => {
        this.setState({ currentImage: value });
    };
    updateImg = () => {
        let allImg = this.props.slidesInfo.length - 1;
        let currentNum = this.state.currentImage;
        if (allImg === currentNum) {
            this.setState({
                currentImage: 0,
            });
        }
        if (allImg > currentNum) {
            this.setState({
                currentImage: currentNum + 1,
            });
        }
    };
    render() {
        const { slidesInfo, size, displayDot } = this.props;
        const { currentImage } = this.state;
        return (
            <Layout extraClass="slide" justify="center" direction="row">
                <span className="arrows" data-direct="prev" onClick={this.makeSlide} />
                <SlideImg image={slidesInfo} size={size} index={currentImage} />
                <span className="arrows" data-direct="next" onClick={this.makeSlide} />
                <Layout extraClass="slide_text">
                    <Description size="l" color="white" position="center">
                        {slidesInfo[currentImage].content}
                    </Description>
                </Layout>
                <Dots
                    quantityDots={slidesInfo}
                    currentImage={currentImage}
                    updateDots={this.setImageDot}
                    displayDot={displayDot}
                />
            </Layout>
        );
    }
}
export { Slider };
