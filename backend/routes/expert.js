import { updateExpert,deleteExpert,getSingleeExpert,getAllExpert,getExpertProfile } from "../controllers/expertcontroller.js";
import { authenticate ,restrict} from "../auth/verifyToken.js"
import express from "express";
import reviewRouter from "./review.js"

const router=express.Router();

//nested route
router.use('/:expertId/reviews',reviewRouter )

router.put('/:id',authenticate,restrict(['Expert']),updateExpert);
router.delete('/:id',authenticate,restrict(['Expert']),deleteExpert);
router.get('/:id',getSingleeExpert);
router.get('/',getAllExpert);
router.get('/profile/me',authenticate,restrict(['Expert']),getExpertProfile);

export default router;