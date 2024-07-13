import { Router } from "express"

import {
  getCatalog,
  getProducts,
  getRecomended
} from "../../controllers"




const router = Router()

router.route("/"             ).get(getCatalog   )
router.route("/recomended"   ).get(getRecomended)
router.route("/:categoryName").get(getProducts  )




export { router }
