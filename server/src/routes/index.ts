import { Router } from 'express'

import { router as RootRouter } from './api/root'
import { router as CatalogRouter } from './api/catalog'
import { router as CartRouter } from './api/cart'




const router = Router()


router.use("/",        RootRouter)
router.use("/catalog", CatalogRouter)
router.use("/cart",    CartRouter)




export default router
