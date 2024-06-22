import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'antd';
import studentstatic from './staticStudentList';

const columns = [
  {
    title: 'Sid',
    dataIndex: 'uid',
    key: 'uid',
  },
  {
    title: 'Student Name',
    dataIndex: 'uname',
    key: 'uname',
  },
  {
    title: 'Student Level',
    dataIndex: 'ulevel',
    key: 'ulevel',
  },
  {
    title: 'Student Age',
    dataIndex: 'uage',
    key: 'uage',
  },
  {
    title: 'Student School',
    dataIndex: 'uSchool',
    key: 'uSchool',
  },
];

const GetStudentList = () => {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
//   const { AllSessions } = useSelector((state) => state.admin);
  const [sessionsData, setSessionsData] = useState([]);

//   useEffect(() => {
//     // setSessionsData(AllSessions);
//   }, [AllSessions]);

  useEffect(() => {
    if (Array.isArray(sessionsData)) {
      const newData = sessionsData.map((ele) => ({
        uid: ele?.uid,
        uname: ele?.uname,
        ulevel: ele?.ulevel,
        uage: ele?.uage,
        uSchool: ele?.uSchool,
      }));
      setData(newData.reverse());
    }
  }, [sessionsData]);

  return (
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
          <Table columns={columns} dataSource={studentstatic} rowKey="uid" />
        </div>
      </div>
    </div>
  );
};

export default GetStudentList;
