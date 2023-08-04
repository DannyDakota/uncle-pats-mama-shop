import { Router } from "express";

import {
    createItem,
    getAllItems,
    updateItem,
    deleteItem,
    createUser,
    login
} from '../controllers'

const router = Router();

router.get('/', (req, res) => res.send('This is root!'))

// User routes
router.post('/login', login)
router.post('/user', createUser)

// Item routes
router.post('/products', createItem);
router.get('/products', getAllItems);
router.delete('/products', deleteItem);
router.put('/products', updateItem);
