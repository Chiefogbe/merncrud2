import express from 'express'
import { UpdateUser, deleteuser, getUser, postUser, updateUser } from '../Controllers/userController.js'
export const router=express.Router()

router.get('/create', getUser)
router.post('/post', postUser)
router.get('/update/:id', updateUser)
router.put('/updateuser/:id', UpdateUser)
router.delete('/deleteuser/:id', deleteuser)
