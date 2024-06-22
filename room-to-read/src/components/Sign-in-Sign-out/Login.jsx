import React, { useState } from 'react';
import StudentRegister from './StudentRegister';

function Login() {
  const [userType, setUserType] = useState('teacher');

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <div className='container '>
    <div  className="fullForm mt-10">
      <h1 className='mt-10'>Sign In</h1>
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
          <label for="teacherEmail" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="teacherEmail" placeholder='Enter your Email'/>
          </div>
          </div>
        <div className='row'>
          <label for="teacherpass" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="teacherpass" placeholder='Enter Password'/>
          </div>
        </div>
        </form>
      )}

      {userType === 'admin' && (
        <form>
        <div className="row ">
          <label for="adminEmail" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="adminEmail" placeholder='Enter Email'/>
          </div>
        </div>
        <div class="row">
          <label for="adminPass" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="adminPass" placeholder='Enter Password'/>
          </div>
        </div>
        </form>
      )}
      <button type="button" class="btn btn-outline-primary">Login</button>
      <br />
      <p className='mt-2'>Don't have an account? <a href='/sign_in' className='font-bold'>signup</a></p>
    </div>
    </div>
  );
}

export default Login