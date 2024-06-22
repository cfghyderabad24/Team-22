import React from 'react';
import './StudentRegister.css';
import { DatePicker, Space, Select } from 'antd';

function StudentRegister() {
  const onDateChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value) => {
    console.log('search:', value);
  };

  return (
    <div className="container">
      <h1>Student Registration</h1>
      <form>
        <div>
          <label htmlFor="studentName">Name</label>
          <input
            type="text"
            className="form-control"
            id="studentName"
            placeholder="Student's Name"
          />
        </div>
        <div>
          <label htmlFor="studentId">Id</label>
          <input
            type="text"
            className="form-control"
            id="studentId"
            placeholder="Student's Id"
          />
        </div>
        <div>
        <label htmlFor="studentDob">Date of Birth</label>
        <Space direction="vertical" />
        <DatePicker onChange={onDateChange} />
        </div>
        <div>
        <label htmlFor="studentGrade">Student's Grade</label>
        <Select
          showSearch
          placeholder="Select the Grade of Student"
          optionFilterProp="label"
          onChange={onChange}
          onSearch={onSearch}
          options={[
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
            { value: '4', label: '4' },
            { value: '5', label: '5' },
          ]}
        />
        </div>
        <button type="button" className="btn btn-outline-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default StudentRegister;

