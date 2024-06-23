import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import CustomInput from '../CustomInput';
import { useDispatch } from 'react-redux';
import Meta from '../Meta';
import { studentRegistration } from '../../features/student/studentSlice';

const CheckInOut = () => {
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    student_id: yup.string().required('Student Id Is Required'),
    book_name: yup.string().required('Book Name is Required'),
    book_level: yup.number().required('Level is Required'),
    
  });

  const formik = useFormik({
    initialValues: {
        student_id: '',
        book_name: '',
        book_level: '',
        genuine: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
      // dispatch your action here
      dispatch(studentRegistration(values))
      formik.resetForm();
    },
  });

  return (
    <div className="container-xxl">
      <Meta title="Registrations" />
      <div className="row">
        <div className="col-12">
          <form className="my-4 submit-form bg-white" onSubmit={formik.handleSubmit}>
            <h3>Check-In Check-Out</h3>
            <CustomInput
              type="text"
              placeholder="Enter Your Student Id"
              name="student_id"
              onChange={formik.handleChange('student_id')}
              value={formik.values.student_id}
              onBlur={formik.handleBlur('student_id')}
            />
            <div className="error">
              {formik.touched.student_id && formik.errors.student_id ? formik.errors.student_id : null}
            </div>
            <CustomInput
              type="text"
              placeholder="Enter Your Book Name"
              name="book_name"
              onChange={formik.handleChange('book_name')}
              value={formik.values.book_name}
              onBlur={formik.handleBlur('book_name')}
            />
            <div className="error">
              {formik.touched.book_name && formik.errors.book_name ? formik.errors.book_name : null}
            </div>
            <CustomInput
              type="number"
              placeholder="Enter Your Level"
              name="book_level"
              onChange={formik.handleChange('book_level')}
              value={formik.values.book_level}
              onBlur={formik.handleBlur('book_level')}
            />
            <div className="error">
              {formik.touched.book_level && formik.errors.book_level ? formik.errors.book_level : null}
            </div>
            <CustomInput
              type="boolean"
              placeholder="Enter Genuine"
              name="genuine"
              onChange={formik.handleChange('genuine')}
              value={formik.values.genuine}
              onBlur={formik.handleBlur('genuine')}
            />
            <div className="error">
              {formik.touched.genuine && formik.errors.genuine ? formik.errors.genuine : null}
            </div>
            <button className="btn btn-primary submit-button" type="submit">
              Check-In
            </button>
            <button className="btn btn-primary submit-button" type="submit">
              Check-Out
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckInOut;
