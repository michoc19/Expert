import jwt from 'jsonwebtoken'
import User from "../models/UserSchema.js"
import Expert from "../models/ExpertSchema.js"

export const authenticate = async(req,res,next)=>{
    //get token from headers 

    const authToken =req.headers.authorization;
    
    //check  token is exists
    if(!authToken || !authToken.startsWith("Bearer")){
        return res.status(401).json({success:false,message:'no token,authorization denied'});
    }

    try {
        const token = authToken.split(" ")[1];

        //verify token 
        const decoded =jwt.verify(token, process.env.JWT_SECRET_KEY)

        req.userId=decoded.id
        req.role=decoded.role
        next();  //must be call the next function 
    } catch (error) {
        if(error.name=="TokenExpiredError"){
            return res.status(401).json({message:"Token is expired"})
        }
        return res.status(401).json({success:false,message:"Invalide Token "});   
    }
};
export const restrict= roles=>async(req,res,next)=>{//roles table of roles  they are authorized
    const userId = req.userId;
    let user;
    const USer = await User.findById(userId);
    const expert = await Expert.findById(userId);

    if(USer){
        user=USer;
    }
    if(expert){
        user=expert;
    }

    if(!roles.includes(user.role)){
        return res.status(401).json({success:false,message:"You're not authorized"});
    }
    next();
};  