import dotenv from "dotenv"




dotenv.config()

const SRV_HOST: string = process.env.SRV_HOST || "127.0.0.1"
const SRV_PORT: string = process.env.SRV_PORT || "3000"

const CLIENT_HOST: string = "127.0.0.1"
const CLIENT_PORT: string = "5173"




export {
  SRV_HOST,
  SRV_PORT,

  CLIENT_HOST,
  CLIENT_PORT
}
