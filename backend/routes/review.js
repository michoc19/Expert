import express from "express";
import { getAllReviews,createReview } from "../controllers/reviewController.js";
import { authenticate,restrict } from "../auth/verifyToken.js";

const router = express.Router({mergeParams:true});

router.route('/').get(getAllReviews).post(authenticate,restrict(['User']),createReview);

export default router;