import {createContext} from "react"

type UserType = {
    id?: number,
    username?: string,
    email?: string,
    token?: string 
}
export const UserContext = createContext<{
  user: UserType | null,
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>
} | null>(null);