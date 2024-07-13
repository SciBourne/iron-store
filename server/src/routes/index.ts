import { Router } from 'express'

import { router as RootRouter } from './api/root'
import { router as CatalogRouter } from './api/catalog'
import { parseQuery } from '../middlewares'




const router = Router()


router.use("/", RootRouter)
router.use("/catalog", CatalogRouter)




export default router
