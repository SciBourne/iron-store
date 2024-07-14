import axios from "axios"
import { SRV_ENTRY_POINT, SRV_HOST, SRV_PORT } from "../config"




function updateRecomendedList(updateList: Function) {
  const baseURL: string = `http://${SRV_HOST}:${SRV_PORT}${SRV_ENTRY_POINT}`
  const endPoint: string = "/catalog/recomended"

  const query: { [prop: string]: number } = {
    description: 0
  }

  axios.get(`${baseURL}${endPoint}`, { params: query })
          .then((response) => {
            updateList(response.data)
          })
          .catch((error) => {
            console.log(error)
          })
}




export { updateRecomendedList }
