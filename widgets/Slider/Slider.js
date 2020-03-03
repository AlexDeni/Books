import React, {Component} from "react";
import './slider.scss'
import {SlideImg} from "./SlideImg";
import {Layout} from "../../ui/Layout";
import {Dots} from "./Dots";

class Slider extends Component{
    constructor(props) {
        super(props);
        this.state={
            currentImage: 0,
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
        if(currentNum<allImg-1) {
            this.setState({currentImage: currentNum + 1})
        }
        this.slideTurnBack();
    }
    makeSlide(e){
        e.preventDefault();
        let allImg = this.props.images.length;
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
                () => this.setState({
                    currentImage: this.state.currentImage + 1
                }),
                3000
            );
        }
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    slideTurnBack(){
        if(this.state.currentImage===this.props.images.length){
            this.setState({currentImage: 0})
        }
    }

    render() {
        this.slideTurnBack();
        const{images,size, displayDot} = this.props;
        const{currentImage} = this.state;
        return(
            <Layout extraClass='slide'>
                <Layout justify='center' direction='row' >
                    <span data-direct='prev' onClick={this.makeSlide} />
                    <SlideImg image={images} size={size} index={currentImage}/>
                    <span data-direct='next' onClick={this.makeSlide} />
                </Layout>
                <Dots quantityDots={images}  updateDots={this.setImageDot} displayDot={displayDot} />
            </Layout>
        )
    }
}
export {Slider}
