import { Router } from 'express'

import { router as RootRouter } from './api/root'
import { router as CatalogRouter } from './api/catalog'
import { router as CartRouter } from './api/cart'
import { router as OrdersRouter} from './api/orders'




const router = Router()


router.use("/",        RootRouter)
router.use("/catalog", CatalogRouter)
router.use("/cart",    CartRouter)
router.use("/orders",  OrdersRouter)




export default router
