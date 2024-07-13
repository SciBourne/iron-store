import express from "express"
import { Express } from "express"

import router from "./routes"
import { parseQuery } from "./middlewares";




const app: Express = express();

app.use(parseQuery)
app.use("/api/v1", router)




export default app;
