import React from 'react'
import {Formik} from 'formik'
import * as Yup from 'yup';
import Error from "./error";

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(1, "Must have more")
        .max(255, 'Must be less')
        .required('Must enter a name'),
    email: Yup.string()
        .email('Must a valid email adress')
        .max(255, 'Must be less')
        .required('Must enter an email')
})

export default function FormikForm() {
    return(
        <Formik initialValues={{name:"", email: ""}}
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
                    <div className='inputForm'>
                        <label htmlFor="name">Email</label>
                        <input type='email'
                               name='email'
                               id='email'
                               placeholder='Email'
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.email}
                               className={touched.email && errors.email ? 'has-error' : null}
                        />
                        <Error message={errors.email} touched={touched.email} />
                    </div>
                    <div className='inputForm'>
                        <button type='submit'  onChange={handleChange} disabled={isSubmitting}>Submit</button>
                    </div>
                </form>
            )}
        </Formik>
    )
}