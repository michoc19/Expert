import User from '../models/UserSchema.js'
import Expert from '../models/ExpertSchema.js'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const  generateToken=user=>{
    return jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET_KEY,{
        expiresIn:'15d'
    })
} 

export const register =async(req,res)=>{
    const {email,password, FullName,role,phone,gender} =req.body
    try {
        let user = null
        if(role=='User'){
            user= await User.findOne({email});
        }
        else if (role=='Expert'){
            user= await Expert.findOne({email});
        }

        //check if user exist 
        if (user){
            return res.status(400).json({message:'User already exist.'});
        }

        //hash password 
        const salt =await bcrypt .genSalt(10);
        const hashPassword =await bcrypt.hash(password,salt);

        if(role=='User'){
            user=new User({
                FullName,
                email,
                password:hashPassword,
                phone,
                gender,
                role,
            });
        }

        if(role=='Expert'){
            user=new Expert({
                FullName,
                email,
                password:hashPassword,
                phone,
                gender,
                role,
            });
        }
        await user.save();
        res.status(200).json({success:true,message:'User successfully created'});
        
    } catch (error) {
        res.status(500).json({success:false,message:'internal server error,Try again'});

    }
};

export const login =async(req,res)=>{
    const {email} =req.body

    try {
        let user=null
        const USer=await User.findOne({email})
        const expert=await Expert.findOne({email})

        if(USer){
            user=USer;
        }
        if(expert){
            user=expert;
        }

        //check if user exist or not 
        if(!user){
            return res.status(404).json({message:"User not found"});
        }

        //compaer password
        const isPasswordMatch= await bcrypt.compare(req.body.password,user.password);
        
        if(!isPasswordMatch){
            return res.status(400).json({status:false, message:"Invalide credentials"});
        }

        //get token
        const token=generateToken(user);
        const{password,role,appointments, ...rest}=user._doc

        res.status(200).json({status:true, message:"Successfuly login ",token,data:{ ...rest},role});

    } catch (error) {
        res.status(500).json({status:false, message:"Faild to login"});
    }
};