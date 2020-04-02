import React from 'react'
import {Formik, Field} from 'formik'
import Error from "./error";
import config from './config';
import {SignInSchema, SignUpSchema} from './validationSchema';
import {useHistory} from "react-router-dom";

function getButtonText(authType) {
    const textBtn = ['Войти', 'Зарегистрироваться'];
    if(authType==='signUp'){
        return textBtn.reverse();
    }
    return textBtn
}

export default function FormikForm({authType}) {

    let history = useHistory();
    const handleGetType = authType => {
        if(authType==='signIn'){
            history.push("/login");
        }
    };

    return (
        <React.Fragment>
            {config[authType].map((data, i) =>
                <Formik key={i} initialValues={{name:"", email: "", password: "", repeatPassword: "" }}
                        validationSchema={authType === 'signIn' ? SignInSchema : SignUpSchema}
                        onSubmit={(values,{setSubmitting, resetForm}) =>(
                            setSubmitting(true),
                                setTimeout(()=>{
                                    alert(JSON.stringify(values, null, 2));
                                    resetForm();
                                    setSubmitting(false)
                                }, 500)
                        )}
                >
                    {({
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting
                      })=>(
                        <form onSubmit={handleSubmit}>
                            <div className='inputForm'>
                                {data.fields.map((item, key) => {
                                    const {type, placeholder, name} = item;
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
                                            <Error message={errors.name} touched={touched.name} />
                                        </React.Fragment>
                                    )
                                })
                                }
                            </div>
                            <button type='submit'  onClick={handleChange} >{getButtonText(authType)[0]}</button>
                            <button type='submit'  onClick={() => handleGetType(authType)} disabled={isSubmitting}>{getButtonText(authType)[1]}</button>
                        </form>
                    )}
                </Formik>
            )}
        </React.Fragment>
    )
}






/*
import React from 'react'
import {Formik} from 'formik'
import * as Yup from 'yup';
import Error from "./error";
import config from './config'

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(1, "Must have more")
        .max(255, 'Must be less')
        .required('Must enter a name'),
    email: Yup.string()
        .email('Must a valid email adress')
        .max(255, 'Must be less')
        .required('Must enter an email'),
    password: Yup.number()
        .min(1, "Must have more")
        .required('Must enter a password'),
});

function getButtonText(authType) {
    const textBtn = ['Войти', 'Зарегистрироваться']
    if(authType==='signUp'){
        return textBtn.reverse();
    }
    return textBtn
}


export default function FormikForm() {
    let authType = 'signUp'
    return (
        <React.Fragment>
        {config[authType].map((data, i) =>
            <Formik initialValues={{name:"", email: "", password: "", repeatPassword: "" }}
                validationSchema={validationSchema}
                onSubmit={(values,{setSubmitting, resetForm}) =>(
                    setSubmitting(true),
                    setTimeout(()=>{
                        alert(JSON.stringify(values, null, 2));
                        resetForm();
                        setSubmitting(false)
                    }, 500)
                )}
            >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting
            })=>(
                <form onSubmit={handleSubmit}>
                    <div className='inputForm'>
                        <label htmlFor="name">Name</label>
                        <input type='text'
                               name='name'
                               id='name'
                               placeholder='Name'
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.name}
                               className={touched.name && errors.name ? 'has-error' : null}
                        />
                        <Error message={errors.name} touched={touched.name} />
                    </div>

                    <button type='submit'  onClick={handleChange} disabled={isSubmitting}>{getButtonText(authType)[0]}</button>
                    <button type='submit'  onChange={handleChange} disabled={isSubmitting}>{getButtonText(authType)[1]}</button>
                </form>
            )}
        </Formik>
        )}
        </React.Fragment>
    )
}
* */