import { updateUser,deleteUser,getSingleeUser,getAllUser } from "../controllers/usercontroller.js";
import { authenticate ,restrict} from "../auth/verifyToken.js"
import express from "express";

const router=express.Router(); 

router.put('/:id',updateUser);
router.delete('/:id',deleteUser);
router.get('/:id',authenticate,restrict(['User']),getSingleeUser);
router.get('/',getAllUser);

export default router;