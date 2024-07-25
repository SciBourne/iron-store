import { ObjectId, Timestamp } from "mongodb";




enum UserGroup {
  ADMINS   = 0,
  MANAGERS = 1,
  USERS    = 3,
  GUESTS   = 4
}


interface User {
  _id?: ObjectId
  group: UserGroup

  auth: {
    token: string
    expireIn: Timestamp
  }

  secret?: {
    hash: string
    salt: string
  }

  email?: string

  name?: {
    first: string
    second: string
    patronymic: string
  }

  address?: {
    region: string
    city: string

    street: string
    house: number
    flat: number | null

    privateHouse: boolean
  }
}




export { User, UserGroup }
