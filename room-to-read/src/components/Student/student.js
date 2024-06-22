import StudentPerformence1 from "../StudentPerformence/StudentPerformence1";
import StudentPerformence2 from "../StudentPerformence/StudentPerformence2";
import StudentPerformence3 from "../StudentPerformence/StudentPerformence3";
import EditStudentInfo from "./editInfo";


const StudentProfile = () =>{

    return(
        <>
        <div>
        <div>
        </div>
        <div>
            <div className=" w-[400px] block p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 m-3">
                <div className="flex flex-row">
                    <label className="m-2 font-semibold">Name:</label>
                    <p className="m-2">Student name</p>
                </div>
                
                <div className="flex flex-row">
                    <label className="m-2 font-semibold">Class:</label>
                    <p className="m-2">Class VI</p>
                </div>

                <div className="flex flex-row">
                    <label className="m-2 font-semibold">School Name:</label>
                    <p className="m-2">Governament High School</p>
                </div>

                <div className="flex flex-row">
                    <label className="m-2 font-semibold">Number of books Taken:</label>
                    <p className="m-2">2 books</p>
                </div>
                <div className="flex flex-row justify-end">
                    <EditStudentInfo/>
                </div>
            </div>
        </div>
        </div>
        <div className="flex flex-row justify-center">
           <StudentPerformence1/>
           <StudentPerformence2/>
        </div>
        <div className="flex flex-row justify-center">
           <StudentPerformence3/>
           <StudentPerformence2/>
        </div>
        
        </>
    )
}


export default StudentProfile;