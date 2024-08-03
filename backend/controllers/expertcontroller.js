import Expert from "../models/ExpertSchema.js";
import Booking from "../models/BookingSchema.js";

export const updateExpert=async(req,res)=>{
    const id =req.params.id;

    try {
        const updateExpert=await Expert.findByIdAndUpdate(id,{$set:req.body},{new:true});

        res.status(200).json({succes:true,message:'Successfully updated',data:updateExpert});

    } catch (error) {
        res.status(500).json({succes:false,message:'Failed to updated'}) ;  
    }
}

export const deleteExpert=async(req,res)=>{
    const id =req.params.id;

    try {
        const deleteExpert=await Expert.findByIdAndDelete(id,{$set:req.body},{new:true});

        res.status(200).json({succes:true,message:'Successfully delete'});

    } catch (error) {

        res.status(500).json({succes:false,message:'Failed to delete'}) ;  
    }
}

export const getSingleeExpert=async(req,res)=>{
    const id =req.params.id;

    try {
        const expert=await Expert.findById(id).populate("reviews").select("-password");

        res.status(200).json({succes:true,message:'Expert found',data:expert});
    } catch (error) {
        res.status(404).json({succes:false,message:'No Expert found'}) ;  
    }
}

export const getAllExpert=async(req,res)=>{   

    try {
        const {query}= req.query;
        let experts;

        if(query){
            experts=await Expert.find({
                isApproved:"approved",
                $or:[
                    {name:{$regex:query,$options:"i" } },
                    {specialization:{$regex:query,$options:"i" }},
                ],
                }).select("-password");
        }else{
            experts=await Expert.find({isApproved:"approved",}).select("-password");

        }

        res.status(200).json({succes:true,message:'Experts found',data:experts});
    } catch (error) {
        res.status(404).json({succes:false,message:'Not found'}) ;  
    }
};

export const getExpertProfile = async(req,res)=>{
    const expertId =req.expertId;

    try {
        const expert = await Expert.findById(expertId);

        if(!expert){
            res.status(404).json({succes:false,message:' Expert Not found'});  
        }

        const {password, ...rest}=expert._doc;
        const appointments =await Bookin.find({expert:expertId});

        res.status(200).json({succes:true,message:'profil info is getting',data:{...rest,appointments}});

    } catch (error) {
        res.status(500).json({succes:false,message:'Something wnet wrong,can not get'});  
    }
};


