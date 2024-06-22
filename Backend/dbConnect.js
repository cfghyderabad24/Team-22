import mongoose from "mongoose"

const dbConnect = ()=>{
    try {
        const uri = process.env.URI
        const connect = mongoose.connect(uri)
        return connect;
    } catch (error) {
        console.log(error)
    }
}

export default dbConnect