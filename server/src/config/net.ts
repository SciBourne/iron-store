import dotenv from "dotenv"




dotenv.config()

const SRV_HOST: string = process.env.SRV_HOST || "127.0.0.1"
const SRV_PORT: string | number = process.env.SRV_PORT || 3000




export { SRV_HOST, SRV_PORT }
