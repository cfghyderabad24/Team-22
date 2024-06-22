
import React, { useState } from 'react';
import "./Forms.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Sign_in = () => {
  const [userType, setUserType] = useState('teacher');

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <div className='container '>
    <div  className="fullForm mt-10">
      <h1 className='mt-10'>Sign up</h1>
      <div>
        <label>
          <input
            type="radio"
            value="teacher"
            checked={userType === 'teacher'}
            onChange={handleUserTypeChange}
          />
          Teacher
        </label>
        <label>
          <input
            type="radio"
            value="admin"
            checked={userType === 'admin'}
            onChange={handleUserTypeChange}
          />
          Admin
        </label>
      </div>

      {userType === 'teacher' && (
        <form>
          <div>
          <label for="formGroupExampleInput" class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Name"/>
        </div>
        </div>
        <div>
          <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3" placeholder='Enter your Email'/>
          </div>
          </div>
          <div>
  <label for="formGroupExampleInput" class=" col-form-label">School Name</label>
  <div class="col-sm-10">
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter school name" />
</div>
</div>
        <div className='row'>
          <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword3" placeholder='Enter Password'/>
          </div>
        </div>
        </form>
      )}

      {userType === 'admin' && (
        <form>
          <div>
          <label for="formGroupExampleInput" class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Name"/>
        </div>
        </div>
        <div className="row ">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3" placeholder='Enter Email'/>
          </div>
        </div>
        <div class="row">
          <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword3" placeholder='Enter Password'/>
          </div>
        </div>
        </form>
      )}
      <button type="button" class="btn btn-outline-primary">Sign up</button>
      <br />
      <p className='mt-2'>Already have an account? <a href='/login' className='font-bold'>Login</a></p>
    </div>
    </div>
  );
};


export default Sign_in;