import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import CustomInput from '../CustomInput';
import { useDispatch } from 'react-redux';
import { loginTeacher } from '../../features/teacher/teacherSlice';


const TeacherLogin = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let schema = yup.object().shape({
    temail: yup.string().required('Email Required'),
    tpassword: yup.string().required('Enter Password'),
  });

  const formik = useFormik({
    initialValues: {
      temail: '',
      tpassword: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(loginTeacher(values));
    },
  });

  return (
    <>
     <div className='container'>
      <div className='row justify-content-center align-items-center' style={{ height: '100vh' }}>
      <div className='col-md-6'>
          <form className='marquee bg-white p-5 my-5' style={{borderRadius:"30px"}} onSubmit={formik.handleSubmit}>
            <h4 className='text-center text-success fs-2'>Teacher Login</h4>
            <CustomInput
              type='text'
              value={formik.values.temail}
              onChange={formik.handleChange('temail')}
              name='temail'
              placeholder='Email'
            />
            <div className='error'>{formik.touched.temail && formik.errors.temail}</div>
            <CustomInput
              type='password'
              value={formik.values.tpassword}
              onChange={formik.handleChange('tpassword')}
              name='tpassword'
              placeholder='Password'
            />
            <div className='error'>{formik.touched.tpassword && formik.errors.tpassword}</div>
            
            <button className='btn btn-primary my-4 btn-block' type='submit'>
              Login
            </button>
          </form>
        </div>
        </div>
      </div>
    </>
  );
};

export default TeacherLogin;
