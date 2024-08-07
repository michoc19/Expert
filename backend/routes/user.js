import { updateUser,deleteUser,getSingleeUser,getAllUser ,getUserProfile,getMyAppointments} from "../controllers/usercontroller.js";
import { authenticate ,restrict} from "../auth/verifyToken.js"
import express from "express";

const router=express.Router(); 

router.put('/:id',authenticate,restrict(['User']),updateUser);
router.delete('/:id',deleteUser);
router.get('/:id',authenticate,restrict(['User']),getSingleeUser);
router.get('/',getAllUser);
router.get('/profile/me',authenticate,restrict(['User']),getUserProfile);
router.get('/appointments/my-appointments',authenticate,restrict(['User']),getMyAppointments);


export default router;