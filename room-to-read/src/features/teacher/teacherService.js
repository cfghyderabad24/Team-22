import axios from 'axios'
import url from '../../utils/base_url'


const loginTeacher =  async(loginData)=>{
    const response = await axios.post(`${url}teacher/loginTeacher`,loginData)
    return response.data
}




const teacherServices = {
    loginTeacher
}

export default teacherServices