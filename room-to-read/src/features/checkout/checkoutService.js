import axios from 'axios'
import url from '../../utils/base_url'


const checkin =  async(checkinData)=>{
    const response = await axios.post(`${url}teacher/checkin`,checkinData)
    return response.data
}

const checkout =  async(checkoutData)=>{
    const response = await axios.post(`${url}teacher/checkout`,checkoutData)
    return response.data
}


const checkoutServices = {
    checkin,
    checkout
}

export default checkoutServices