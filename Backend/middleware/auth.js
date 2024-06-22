import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const middleware = (request,response,next) => {
    const token = request.cookies.token; 
    
    if(!token)
        return response.status(401).json({message:"No token, authorization denied"});
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);  
        request.user = decoded.user;
        next();
    } catch (err) {
        response.status(401).json({message: 'Token is not valid'});
    }
}

export default middleware;

