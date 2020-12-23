import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { getToken } from "../modules/auth";

export default function useAuth() {
    const authState = useSelector((state: RootState) => state.auth)
    const dispatch = useDispatch()

    const getTokenData = useCallback((code: string, state: string) => dispatch(getToken(code, state)), [dispatch])

    return { authState, getTokenData }
}