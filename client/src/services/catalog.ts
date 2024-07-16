import axios from "axios"

import { SRV_ENTRY_POINT, SRV_HOST, SRV_PORT } from "../config"
import { reducers } from "."




async function updateProduct(categoryName: string, productID: string, dispatch: Function) {
  const baseURL: string = `http://${SRV_HOST}:${SRV_PORT}${SRV_ENTRY_POINT}`
  const endPoint: string = `/catalog/${categoryName}/${productID}`

  try {
    dispatch(
      { type: reducers.FetchActions.PROGRESS }
    )

    let response = await axios.get(baseURL + endPoint)

    if ( response.status === 200 ) {
      dispatch(
        {
          type: reducers.FetchActions.SUCCESS,
          data: response.data
        }
      )
    }

  } catch (error) {
    console.log(error)

    dispatch(
      {
        type: reducers.FetchActions.ERROR,
        error: error
      }
    )
  }
}



function updateProductList(categoryName: string, updateList: Function) {
  const baseURL: string = `http://${SRV_HOST}:${SRV_PORT}${SRV_ENTRY_POINT}`
  const endPoint: string = `/catalog/${categoryName}`

  const query: { [prop: string]: number } = {
    description: 0
  }

  axios.get(`${baseURL}${endPoint}`, { params: query })
          .then(
            (response) => {
              updateList(response.data)
            }
          )
          .catch(
            (error) => {
              console.log(error)
            }
          )
}



function updateRecomendedList(updateList: Function) {
  const baseURL: string = `http://${SRV_HOST}:${SRV_PORT}${SRV_ENTRY_POINT}`
  const endPoint: string = "/catalog/recomended"

  const query: { [prop: string]: number } = {
    description: 0
  }

  axios.get(`${baseURL}${endPoint}`, { params: query })
          .then(
            (response) => {
              updateList(response.data)
            }
          )
          .catch(
            (error) => {
              console.log(error)
            }
          )
}




export {
  updateProduct,
  updateProductList,
  updateRecomendedList
}
