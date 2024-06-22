import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'antd';
import studentstatic from './staticStudentList';
import librarydashboardData from './staticLibraryDashboard';

const columns = [
  {
    title: 'Book Title',
    dataIndex: 'book_title',
    key: 'book_title',
  },
  {
    title: 'Book Unique Id',
    dataIndex: 'bid',
    key: 'bid',
  },
  {
    title: 'Number Of Copies',
    dataIndex: 'noc',
    key: 'noc',
  },
  {
    title: 'Book Level',
    dataIndex: 'level',
    key: 'level',
  },
  {
    title: 'Book Language',
    dataIndex: 'bok_lan',
    key: 'bok_lan',
  },
  {
    title: 'Book Author',
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: 'Publication Name',
    dataIndex: 'publication_name',
    key: 'publication_name',
  },
  {
    title: 'Booke Genre',
    dataIndex: 'genre',
    key: 'uSchool',
  },
];

const LibraryDashboard = () => {
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
        book_title: ele?.book_title,
        bid: ele?.bid,
        noc: ele?.noc,
        level: ele?.level,
        genre: ele?.genre,
        bok_lan: ele?.bok_lan,
        author: ele?.author,
        publication_name: ele?.publication_name,
      }));
      setData(newData.reverse());
    }
  }, [sessionsData]);

  return (
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
          <Table columns={columns} dataSource={librarydashboardData} rowKey="uid" />
        </div>
      </div>
    </div>
  );
};

export default LibraryDashboard;
