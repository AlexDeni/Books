import React from 'react';
import { Layout } from '../../ui';
import { FormikForm } from '../../widgets';

const Login = () => {
    return (
        <Layout extraClass="container">
            <FormikForm authType="signUp" formTitle="Форма регистрации" />
        </Layout>
    );
};

export default Login;
