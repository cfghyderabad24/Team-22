import { PieChart,Pie } from "recharts";


const StudentPerformence1 = () =>{

    const data01 = [
        {
          "name": "Group A",
          "value": 400
        },
        {
          "name": "Group B",
          "value": 300
        },
        {
          "name": "Group C",
          "value": 300
        },
        {
          "name": "Group D",
          "value": 200
        },
        {
          "name": "Group E",
          "value": 278
        },
        {
          "name": "Group F",
          "value": 189
        }
      ];
      const data02 = [
        {
          "name": "Group A",
          "value": 2400
        },
        {
          "name": "Group B",
          "value": 4567
        },
        {
          "name": "Group C",
          "value": 1398
        },
        {
          "name": "Group D",
          "value": 9800
        },
        {
          "name": "Group E",
          "value": 3908
        },
        {
          "name": "Group F",
          "value": 4800
        }
      ];

    return(
        <div className=" w-[600px] block p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 m-3">
            <PieChart width={530} height={250}>
            <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
            <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            </PieChart>
        </div>
    )
} 


export default StudentPerformence1