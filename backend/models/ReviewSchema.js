import mongoose from "mongoose";
import Expert from "./ExpertSchema.js";

const reviewSchema = new mongoose.Schema(
  {
    expert: {
      type: mongoose.Types.ObjectId,
      ref: "Expert",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

reviewSchema.pre(/^find/,function(next){
  this.populate({
    path:"user",
    select:"FullName photo",
  });

  next();
});


reviewSchema.statics.calcAverageRatings = async function (expertId){
  //this points the current review 
  const stats = await this.aggregate([
    {
      $match:{expert: expertId},
    },
    {
      $group:{
        _id:"$expert",
        numOfRating:{$sum:1},
        avgRating:{$avg:'$rating'}
      },
    },
  ]);


await Expert.findByIdAndUpdate(expertId,{
  totalRating: stats[0].numOfRating,
  averageRating: stats[0].avgRating, 
});
};

reviewSchema.post('save',function(){
  this.constructor.calcAverageRatings(this.expert);
});

export default mongoose.model("Review", reviewSchema);