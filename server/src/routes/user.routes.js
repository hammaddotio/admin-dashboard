import express from 'express'
import { auth_middleware } from '../middlewares/auth.middlewares.js'
import { delete_user, get_all_users, get_user, update_user } from '../controllers/users/user.controllers.js'

export const user_router = express.Router()

user_router.get('/api/get-all-users', get_all_users)
user_router.patch('/api/update-user/:id', update_user)
user_router.delete('/api/delete-user/:id', delete_user)
user_router.get('/api/get-user/:id', get_user)