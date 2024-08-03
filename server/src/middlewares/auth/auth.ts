import { Request, Response, NextFunction } from "express"

import {

  verifyAccessToken,
  updateAccess,
  AccessData,
  TokenName,
  CookieOptions,
  createGuest

} from "./lib"




function authUser(req: Request, res: Response, next: NextFunction) {
  const cookieOptions = new CookieOptions

  if ( req.cookies.ACCESS_TOKEN && req.cookies.REFRESH_TOKEN ) {
    const payload = verifyAccessToken(req.cookies.ACCESS_TOKEN)

    if ( !payload ) {
      updateAccess(req.cookies.REFRESH_TOKEN)
        .then(
          (data: AccessData) => {
            res.cookie(TokenName.ACCESS, data.accessToken, cookieOptions)
            res.cookie(TokenName.REFRESH, data.refreshToken, cookieOptions)

            next()
          }
        )
        .catch(
          (err: Error) => {
            console.log(err.message)
          }
        )

    } else {
      return next()
    }
  }

  createGuest().then(
    (data: AccessData) => {
      res.cookie(TokenName.ACCESS, data.accessToken, cookieOptions)
      res.cookie(TokenName.REFRESH, data.refreshToken, cookieOptions)

      res.redirect(req.url)
    }
  )
}




export { authUser }
