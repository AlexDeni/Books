import React from "react";
import {Layout} from "../../ui/Layout";
import FormikForm from "../../widgets/Formik";

function Login(){
    return(
        <Layout extraClass="container">
            <FormikForm authType="signUp" formTitle="Форма регистрации"/>
        </Layout>
    )
}

export default Login