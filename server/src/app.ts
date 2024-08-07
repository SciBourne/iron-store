import express from "express"
import { Express } from "express"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"

import router from "./routes"
import { parseQuery } from "./middlewares";
import { setCORS } from "./middlewares";
import { authUser } from "./middlewares/auth/auth";




const app: Express = express();

app.use(setCORS)
app.use(cookieParser())
app.use(bodyParser.json())
app.use(authUser)
app.use(parseQuery)

app.use("/api/v1", router)




export default app;
