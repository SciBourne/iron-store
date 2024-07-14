import express from "express"
import { Express } from "express"

import router from "./routes"
import { parseQuery } from "./middlewares";
import { setCORS } from "./middlewares";




const app: Express = express();

app.use(setCORS)
app.use(parseQuery)

app.use("/api/v1", router)




export default app;
