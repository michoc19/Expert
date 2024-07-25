import User from "../models/UserSchema.js"

export const updateUser=async(req,res)=>{
    const id =req.params.id;

    try {
        const updateUser=await User.findByIdAndUpdate(id,{$set:req.body},{new:true});

        res.status(200).json({succes:true,message:'Successfully updated',data:updateUser});

    } catch (error) {
        res.status(500).json({succes:false,message:'Failed to updated'}) ;  
    }
}

export const deleteUser=async(req,res)=>{
    const id =req.params.id;

    try {
        const deleteUser=await User.findByIdAndDelete(id,{$set:req.body},{new:true});

        res.status(200).json({succes:true,message:'Successfully delete'});

    } catch (error) {

        res.status(500).json({succes:false,message:'Failed to delete'}) ;  
    }
}

export const getSingleeUser=async(req,res)=>{
    const id =req.params.id;

    try {
        const user=await User.findById(id).select("-password");

        res.status(200).json({succes:true,message:'user found',data:user});
    } catch (error) {
        res.status(404).json({succes:false,message:'No user found',data:updateUser}) ;  
    }
}

export const getAllUser=async(req,res)=>{   

    try {
        const users=await User.find({}).select("-password");

        res.status(200).json({succes:true,message:'users found',data:users});
    } catch (error) {
        res.status(404).json({succes:false,message:'Not found',data:updateUser}) ;  
    }
}
