import React from "react";
import {Description} from "../../../ui/Description";
import {Button} from "../../../ui/Button";
import {Layout} from "../../../ui/Layout";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {actionBookProperties} from "../../../store/Books/actionBooks";
import {connect} from "react-redux";

const ShowProduct= ({selectedBooks, removeBook, addBook, removeBooks, openBookProperties, onButtonClick}) =>{
    let idTitle = {};
    selectedBooks.map( a =>(idTitle[a.title] = idTitle[a.title] + 1 || 1));
    let sumSelectedBooks = Object.keys(idTitle).map(function (id) {
        return {id: selectedBooks.find(item => item.title === id),
                sum: idTitle[id],
                price: idTitle[id]*selectedBooks.find(item => item.title === id).price
        };
    });
    const openBookInfo =(e)=>{
        openBookProperties(Number(e.target.value))
        onButtonClick(false)
    };

    return(
        <React.Fragment>
            <table className="cart_item">
                <thead>
                    <tr>
                        <td/>
                        <td/>
                        <td className="cart-header">
                            <Description size="s">Количество</Description>
                        </td>
                        <td className="cart-header __cost">
                            <Description size="s">Стоимость</Description>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {sumSelectedBooks.map((item,i) => (
                        <tr key={i} className="basket_carts">
                            <td className="basket_card basket_cart_image">
                                <img alt={i} src={item.id.image}/>
                            </td>
                            <td className="basket_card basket_cart_info">
                                <Description color="dark" weight="600">
                                    <Link  to={`/all/${item.id.id}`}>
                                        <Button bStyle="none" value={item.id.id} onClick={openBookInfo}>{item.id.title}</Button>
                                    </Link>
                                </Description>
                                <Description>{item.id.price}</Description>
                            </td>
                            <td className="basket_card basket_cart_count">
                                <Layout direction="row" align="center">
                                    <Button size="l" bStyle="none" value={item.id.id} onClick={removeBook}>-</Button>
                                    <Description position="center" weight="600">{item.sum}</Description>
                                    <Button size="l" bStyle="none" value={item.id.id} onClick={addBook}>+</Button>
                                </Layout>
                            </td>
                            <td className="basket_card basket_cart_price">
                                <Description position="center" weight="600">{item.price}</Description>
                            </td>
                            <td className="basket_card">
                                <button value={item.id.id} onClick={removeBooks}>Удалить</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </React.Fragment>
    )
};

function mapDispatchToProps(dispatch) {
    return {
        openBookProperties: bindActionCreators(actionBookProperties, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(ShowProduct)

