import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import CustomInput from '../CustomInput';
import { useDispatch } from 'react-redux';
import Meta from '../Meta';

const Studentregistration = () => {
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    uid: yup.string().required('Registration Id Is Required'),
    uname: yup.string().required('Name is Required'),
    ulevel: yup.string().required('Level is Required'),
    uage: yup.number().required('Age is Required').positive().integer(),
    uSchool: yup.string().required('School is Required'),
  });

  const formik = useFormik({
    initialValues: {
      uid: '',
      uname: '',
      ulevel: '',
      uage: '',
      uSchool: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
      // dispatch your action here
      // dispatch(registrationSlice(values))
      formik.resetForm();
    },
  });

  return (
    <div className="container-xxl">
      <Meta title="Registrations" />
      <div className="row">
        <div className="col-12">
          <form className="my-4 submit-form bg-white" onSubmit={formik.handleSubmit}>
            <CustomInput
              type="text"
              placeholder="Enter Your Id"
              name="uid"
              onChange={formik.handleChange}
              value={formik.values.uid}
              onBlur={formik.handleBlur}
            />
            <div className="error">
              {formik.touched.uid && formik.errors.uid ? formik.errors.uid : null}
            </div>
            <CustomInput
              type="text"
              placeholder="Enter Your Name"
              name="uname"
              onChange={formik.handleChange}
              value={formik.values.uname}
              onBlur={formik.handleBlur}
            />
            <div className="error">
              {formik.touched.uname && formik.errors.uname ? formik.errors.uname : null}
            </div>
            <CustomInput
              type="text"
              placeholder="Enter Your Level"
              name="ulevel"
              onChange={formik.handleChange}
              value={formik.values.ulevel}
              onBlur={formik.handleBlur}
            />
            <div className="error">
              {formik.touched.ulevel && formik.errors.ulevel ? formik.errors.ulevel : null}
            </div>
            <CustomInput
              type="number"
              placeholder="Enter Your Age"
              name="uage"
              onChange={formik.handleChange}
              value={formik.values.uage}
              onBlur={formik.handleBlur}
            />
            <div className="error">
              {formik.touched.uage && formik.errors.uage ? formik.errors.uage : null}
            </div>
            <CustomInput
              type="text"
              placeholder="Enter Your School"
              name="uSchool"
              onChange={formik.handleChange}
              value={formik.values.uSchool}
              onBlur={formik.handleBlur}
            />
            <div className="error">
              {formik.touched.uSchool && formik.errors.uSchool ? formik.errors.uSchool : null}
            </div>
            <button className="btn btn-primary submit-button" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Studentregistration;
