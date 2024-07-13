import { Request, Response } from "express"

import { CategoryName, VisibilityMask } from "../models"
import { catalog } from "../services"





async function getProducts(req: Request, res: Response) {
  const fieldsConfig: VisibilityMask = req.query

  const category: CategoryName = CategoryName[
    req.params.categoryName as keyof typeof CategoryName
  ]

  res.status(200).json(
    await catalog.getProducts(category, fieldsConfig)
  )
}




export default getProducts
