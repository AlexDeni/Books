import React  from "react";
import './style.scss'
import PropTypes from 'prop-types'
import {Layout} from "../../ui/Layout";
import {Description} from "../../ui/Description";
import {Button} from "../../ui/Button";
import cx from "classnames";

function Modal({children, title, isModalOpen, onModalClick, size, extraClass}) {
    if(!isModalOpen){
        return null
    }
    const className = cx('modal_body',
        `modal_body__size_${size}`, extraClass
    );
    return(
        <Layout justify="center" align="center">
            <div className='modal' >
                <div className={className}>
                    <Layout extraClass="modal_header" direction="row">
                        <Description color="dark" size="l">{title}</Description>
                        <Button bStyle="none" onClick={()=> onModalClick(false)} extraClass="modal_close_icon"/>
                    </Layout>
                    <Layout extraClass='modal_item' align='center' justify="center">
                        {children}
                    </Layout>
                </div>
            </div>

        </Layout>

    )
}

Modal.propTypes ={
    children: PropTypes.node.isRequired,
    isModalOpen: PropTypes.bool,
    size: PropTypes.oneOf(["s","m"]),
    title: PropTypes.node.isRequired,
};

Modal.defaultProps = {
    isModalOpen: false,
    title: "",
    size: "s"
};

export {Modal}