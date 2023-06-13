import express from 'express';
const router = express.Router();
import { register,
         authenticate,
         confirm,
         forgetPassword,
         checkToken,
         newPassword,
         perfil
         } from '../controller/usuarioController.js';
import checkAuth from '../middleware/checkAuth.js';

         

//Auth, Register and Confirm of Users 
router.post('/', register);
router.post('/login', authenticate);
router.get('/confirm/:token', confirm);
router.post('/forget-password', forgetPassword);
router.route('/forget-password/:token').get(checkToken).post(newPassword);
router.get('/perfil', checkAuth, perfil);


export default router;