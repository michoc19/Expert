import User from '../models/UserSchema'
import Expert from '../models/ExpertSchema'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt.js' 

export const register =async(req,res)=>{
    const {email,password,name,role,photo,gender} =req.body
    try {
        let User = null
        if(role=='User'){
            user=user.find({email})
        }
        
    } catch (error) {
        
    }
};

export const login =async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
};