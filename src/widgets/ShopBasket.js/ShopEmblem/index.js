import React from 'react'
import {connect } from "react-redux"
import {Description} from "../../../ui/Description";
import {Layout} from "../../../ui/Layout";
import shopEmblem from '../../../static/busket.png'


function ShopEmblem({count, onShopClick}) {
    return(
        <Layout extraClass="shop_emblem">
            <img src={shopEmblem} alt='basket' onClick={() => onShopClick(true)} />
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