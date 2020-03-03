import React from "react";
import './style.scss'
import {Layout} from "../../ui/Layout";

function Loader() {

    return(
        <Layout align='center'>
            <div className="lds-dual-ring" />
        </Layout>
    )
}

export {Loader}