import React from 'react';
import { Formik, Field } from 'formik';
import Error from './error';
import config from './config';
import { SignInSchema, SignUpSchema } from './validationSchema';
import { useHistory } from 'react-router-dom';
import { Button } from '../../ui/Button';
import './style.scss';
import { Layout } from '../../ui/Layout';
import { Description } from '../../ui/Description';

function getButtonText(authType) {
    const textBtn = ['Войти', 'Зарегистрироваться'];
    if (authType === 'signUp') {
        return textBtn.reverse();
    }
    return textBtn;
}

export default function FormikForm({ authType, formTitle, onModalClick }) {
    let history = useHistory();
    const handleGetType = (authType) => {
        if (authType === 'signIn') {
            history.push('/login');
            onModalClick(false);
        }
    };
    return (
        <React.Fragment>
            {config[authType].map((data, i) => (
                <Formik
                    key={i}
                    initialValues={{
                        name: '',
                        email: '',
                        login: '',
                        password: '',
                        repeatPassword: '',
                    }}
                    validationSchema={authType === 'signIn' ? SignInSchema : SignUpSchema}
                    onSubmit={(values, { setSubmitting, resetForm }) => (
                        setSubmitting(true),
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            resetForm();
                            setSubmitting(false);
                        }, 500)
                    )}
                >
                    {({ errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                        <form className="login_form" onSubmit={handleSubmit}>
                            <Description color="dark" position="center" size="l">
                                {formTitle}
                            </Description>
                            <div className="inputForm">
                                {data.fields.map((item, key) => {
                                    const { type, placeholder, name } = item;
                                    return (
                                        <React.Fragment key={key}>
                                            <Field
                                                type={type}
                                                placeholder={placeholder}
                                                name={name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={touched.name && errors.name ? 'has-error' : null}
                                            />
                                            <Error message={errors} touched={touched} name={name} />
                                        </React.Fragment>
                                    );
                                })}
                            </div>
                            <Layout justify="center" align="center" extraClass="btn_form">
                                <Button size="all" type="submit" onClick={handleChange}>
                                    {getButtonText(authType)[0]}
                                </Button>
                                <Button
                                    size="all"
                                    type="submit"
                                    onClick={() => handleGetType(authType)}
                                    disabled={isSubmitting}
                                >
                                    {getButtonText(authType)[1]}
                                </Button>
                            </Layout>
                        </form>
                    )}
                </Formik>
            ))}
        </React.Fragment>
    );
}
