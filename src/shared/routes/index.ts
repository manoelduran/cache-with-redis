import { Router } from "express";
import { Request, Response } from 'express';
import { cache } from '../../cacheConfig';
const routes = Router();


routes.get('/', async (req: Request, res: Response) => {
   const response = await cache.get('products')
    console.log('response', response)
    res.status(200).json(response)
})

routes.get('/create', async (req: Request, res: Response) => {
    const products = [
        { id: 0, name: "Product 1", quantity: Math.random() },
        { id: 1, name: "Product 2", quantity: Math.random() },
        { id: 2, name: "Product 3", quantity: Math.random() },
        { id: 3, name: "Product 4", quantity: Math.random() },
        { id: 4, name: "Product 5", quantity: Math.random() },
        { id: 5, name: "Product 6", quantity: Math.random() },
    ]
    cache.create('products', JSON.stringify(products))

    res.status(201).json(products)
})

export { routes };