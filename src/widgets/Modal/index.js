import React  from "react";
import './style.scss'
import PropTypes from 'prop-types'
import {Layout} from "../../ui/Layout";
import {Description} from "../../ui/Description";
import {Button} from "../../ui/Button";

function Modal({children, title, isModalOpen, onButtonClick}) {
    if(!isModalOpen){
        return null
    }
    return(
        <Layout justify="center" align="center">
            <div className='modal' onClick={()=>  onButtonClick(false)}/>
            <div className='modal_body'>
                <Layout extraClass="modal_header" direction="row">
                    <Description color="dark" size="l">{title}</Description>
                    <Button bStyle="none" onClick={()=> onButtonClick(false)} extraClass="modal_close_icon"/>
                </Layout>
                <Layout extraClass='modal_item' align='center' justify="center">
                    {children}
                </Layout>
            </div>
        </Layout>

    )
}

Modal.propTypes ={
    children: PropTypes.node.isRequired,
    isModalOpen: PropTypes.bool,
    title: PropTypes.node.isRequired,
};

Modal.defaultProps = {
    isModalOpen: false,
    title: ""
};

export {Modal}