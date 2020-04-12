import React from "react";

export const ShowTitleCount = ({getCard, removeCart, id}) =>{
    let idTitle = {};
    for(let key in getCard){
        getCard[key].map( a =>(idTitle[a.title] = idTitle[a.title] + 1 || 1))
    }
    let titleCount = [];
    for (let key in idTitle) {
        titleCount.push( key + " - " + idTitle[key] );
    }
    console.log(id.map(item=>item.id))

    return(<>{titleCount.map((title, key )=>{
                return <li key={key}>{title}
                            <button value={id.map(item=>item)} onClick={removeCart}>&#215;</button>
                       </li>
            })}
        </>
    )
}