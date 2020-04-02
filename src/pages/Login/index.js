import React, {Component} from "react";
import {Layout} from "../../ui/Layout";
import FormikForm from "../../widgets/Formik";

class Login extends Component{
    render(){
        return(
            <Layout>
                <FormikForm authType="signUp"/>
            </Layout>
        )
    }
}




export default Login