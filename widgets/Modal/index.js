import React  from "react";
import './style.scss'
import {Layout} from "../../ui/Layout";
import {Button} from "../../ui/Button";

function Modal({children, isModalOpen, onButtonClick}) {
    if(!isModalOpen){
        return null
    }

    return(
        <Layout extraClass='modal'>
            <Layout extraClass='modal-body'>
                <Button extraClass='modal-close'  onClick={()=>  onButtonClick(false)}>&times;</Button>
                <Layout extraClass='modal-text' align='center'>{children}</Layout>
            </Layout>
        </Layout>
    )
}

export {Modal}