
import { Field, Form, Formik } from 'formik';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/CreateRadio.css";
import RadioData from '../models/RadioData';
import { postRadio } from '../api/radioapi';
import radioValidate from '../validations/radioValidate';
import { useNavigate } from 'react-router-dom';
import authContext from './AuthContext';

interface CreateRunProps{
    onAdd: (data: RadioData) => void
    closeModal: () => void
}

export interface MyFormValues {
    link: string,
    name: string,
    tag: string
}

const initialValues: MyFormValues = { 
    link: '',
    name: '',
    tag: ''
}
const CreateRadio = (props:CreateRunProps) =>{
    const navigate = useNavigate();
    const auth_context = React.useContext(authContext);
    
    const onSubmit = (values:MyFormValues)=>{
        postRadio(props.onAdd, values, auth_context, navigate);
        props.closeModal()
    }

    return (
        <Formik
         initialValues={initialValues}
         onSubmit={onSubmit}
         validate={radioValidate}
         >
        {({ errors, touched }) => (
         <Form className='radio-form'>
            <div className='form-input'>
                    <div className='form-label'><label htmlFor="link">Link</label></div>
                    <Field className='form-control' id="link" name="link" placeholder="Input link"/>
                    {errors.link && touched.link && <div className='text-danger'>{errors.link}</div>}   
                    
                    <div className='form-label'><label htmlFor="name">Name</label></div>   
                    <Field className='form-control' id="name" name="name" placeholder="Input name" />
                    {errors.name && touched.name && <div className='text-danger'>{errors.name}</div>} 

                    <div className='form-label'><label htmlFor="tag">Tag</label></div>    
                    <Field className='form-control' id="tag" name="tag" placeholder="Input tag" />
                    {errors.tag && touched.tag && <div className='text-danger'>{errors.tag}</div>} 
            </div>
            <div className='form-button'>
                <button className='btn btn-success' type="submit">Add radio</button>
            </div>
         </Form>
        )}
       </Formik>
      )
}

export default CreateRadio;