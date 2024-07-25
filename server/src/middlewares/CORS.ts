import { NextFunction, Request, Response } from "express"
import { CLIENT_HOST, CLIENT_PORT } from "../config/net"




function setCORS(_: Request, res: Response, next: NextFunction) {
  res.header(
    "Access-Control-Allow-Origin",
    `http://${CLIENT_HOST}:${CLIENT_PORT}`
  )

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )

  res.header(
    "Access-Control-Allow-Credentials",
    "true"
  )

  next()
}




export { setCORS }
