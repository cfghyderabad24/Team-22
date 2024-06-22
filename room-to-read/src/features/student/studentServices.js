import axios from 'axios'
import url from '../../utils/base_url'


const registerStudent =  async(registerData)=>{
    const response = await axios.post(`${url}user/registerStudent`,registerData)
    return response.data
}




const studentServices = {
    registerStudent
}

export default studentServices