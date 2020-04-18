import React, {Component} from "react";
import './slider.scss'
import {SlideImg} from "./SlideImg";
import {Layout} from "../../ui/Layout";
import {Dots} from "./Dots";
import {Description} from "../../ui/Description";

class Slider extends Component{
    constructor(props) {
        super(props);
        this.state={
            currentImage: 0,
            slideShow: false
        };
        this.makeSlide = this.makeSlide.bind(this);
    }
    makePrevSlide({allImg,currentNum}){
        if(currentNum>0) {
            this.setState({currentImage: currentNum - 1})
        }
        if(currentNum===0){
            this.setState({currentImage: allImg-1})
        }
    }
    makeNextSlide({allImg,currentNum}){
        if(allImg-1>currentNum) {
            this.setState({currentImage: currentNum + 1})
        }
        if(allImg-1===currentNum){
            this.setState({currentImage: 0})
        }
    }
    makeSlide(e){
        e.preventDefault();
        let allImg = this.props.slidesInfo.length-1;
        let currentNum = this.state.currentImage;
        let setDirection = e.currentTarget.dataset.direct;
        if(setDirection === 'prev'){
            this.makePrevSlide({allImg,currentNum})
        }
        if(setDirection === 'next'){
            this.makeNextSlide({allImg,currentNum})
        }
    }
    setImageDot = (value) => {
        this.setState({ currentImage: value})
    };

    componentDidMount() {
        if(this.props.slideShow) {
            this.timerID = setInterval(
                () => this.updateImg(),
                5500
            );
        }
    }
    updateImg(){
        let allImg = this.props.images.length-1;
        let currentNum = this.state.currentImage;
        if(allImg===currentNum){
            this.setState({
                currentImage: 0
            })
        }
        if(allImg>currentNum) {
            this.setState({
                currentImage: currentNum + 1
            })
        }
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {


        const{slidesInfo,size, displayDot} = this.props;
        const{currentImage} = this.state;
        return(
            <Layout extraClass='slide' justify='center' direction='row'>
                <React.Fragment>
                    <span className="arrows" data-direct='prev' onClick={this.makeSlide} />
                    <SlideImg image={slidesInfo} size={size} index={currentImage}/>
                    <span className="arrows"  data-direct='next' onClick={this.makeSlide} />
                    <Layout extraClass="slide_text">
                        <Description size="l" color="white" position="center">{slidesInfo[currentImage].content}</Description>
                    </Layout>
                    <Dots quantityDots={slidesInfo} currentImage={currentImage}  updateDots={this.setImageDot} displayDot={displayDot} />
                </React.Fragment>
            </Layout>
        )
    }
}
export {Slider}

/*
* {slidesInfo.map(slide => {
                    return(
                        <React.Fragment>
                            <span className="arrows" data-direct='prev' onClick={this.makeSlide} />
                            <SlideImg image={slide.image} size={size} index={currentImage}/>
                            <span className="arrows"  data-direct='next' onClick={this.makeSlide} />
                            <Layout extraClass="slide_text">
                                <Description size="l" color="white" position="center">The Library preserves and provides access to a rich, diverse and enduring source of knowledge to inform, inspire and engage you in your intellectual and creative endeavors.</Description>
                            </Layout>
                            <Dots quantityDots={slide.image} currentImage={currentImage}  updateDots={this.setImageDot} displayDot={displayDot} />
                        </React.Fragment>
                    )
                })}*/