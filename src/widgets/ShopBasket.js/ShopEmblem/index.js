import React from 'react'
import {connect } from "react-redux"
import {Description} from "../../../ui/Description";
import {Layout} from "../../../ui/Layout";
import {faShoppingBasket} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function ShopEmblem({count, onShopClick}) {
    return(
        <Layout extraClass="shop_emblem">
            <FontAwesomeIcon size="3x"  color="#113d54"  onClick={() => onShopClick(true)} icon={faShoppingBasket} />
            <Description size="l" color="dark" extraClass="countCart">{count}</Description>
        </Layout>
    )
}

function mapStateToProps(state) {
    return {
        count: state.orderBooks.count,
    }
}

export default connect(mapStateToProps)(ShopEmblem)