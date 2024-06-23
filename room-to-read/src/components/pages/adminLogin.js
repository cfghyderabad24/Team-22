import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import CustomInput from '../CustomInput';
import { useDispatch } from 'react-redux';
import { loginTeacher } from '../../features/teacher/teacherSlice';

const TeacherLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let schema = yup.object().shape({
    temail: yup.string().email('Invalid email').required('Email Required'),
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
            <form
              className='bg-white p-5 my-5'
              style={{
                borderRadius: '30px',
                border: '2px solid #1a73e8', // Border color
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Shadow for depth
              }}
              onSubmit={formik.handleSubmit}
            >
              <h4 className='text-center text-success fs-2'>Teacher Login</h4>
              <CustomInput
                type='text'
                value={formik.values.temail}
                onChange={formik.handleChange('temail')}
                name='temail'
                placeholder='Email'
              />
              <div className='error' style={{ color: 'red', fontSize: '0.9em' }}>
                {formik.touched.temail && formik.errors.temail}
              </div>
              <CustomInput
                type='password'
                value={formik.values.tpassword}
                onChange={formik.handleChange('tpassword')}
                name='tpassword'
                placeholder='Password'
              />
              <div className='error' style={{ color: 'red', fontSize: '0.9em' }}>
                {formik.touched.tpassword && formik.errors.tpassword}
              </div>
              <button
                className='btn btn-primary my-4 btn-block'
                type='submit'
                style={{
                  backgroundColor: '#1a73e8',
                  borderColor: '#1a73e8',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              >
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
