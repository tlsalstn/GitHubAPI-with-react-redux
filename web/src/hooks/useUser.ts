import { useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../modules"
import { getUser } from "../modules/github/user"
import { User } from "modules/github/user/actions"

export default function useUser() {
    const userState = useSelector((state: RootState) => state.user)
    const dispatch = useDispatch()

    const getUserData = useCallback((name: string) => dispatch(getUser(name)), [dispatch])

    return { userState, getUserData }
}