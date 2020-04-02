import React  from "react";
import './style.scss'
import PropTypes from 'prop-types'
import {Layout} from "../../ui/Layout";
import {Button} from "../../ui/Button";

function Modal({children, isModalOpen, onButtonClick}) {
    if(!isModalOpen){
        return null
    }
    return(
        <Layout justify="center" align="center">
            <div className='modal' onClick={()=>  onButtonClick(false)}/>
            <div className='modal-body'>
                <Button extraClass='modal-close'  onClick={()=> onButtonClick(false)}>&times;</Button>
                <Layout extraClass='modal-text' align='center'>{children}</Layout>
            </div>
        </Layout>

    )
}

Modal.propTypes ={
    children: PropTypes.node.isRequired,
    isModalOpen: PropTypes.bool
};

Modal.defaultProps = {
    isModalOpen: false
};

export {Modal}