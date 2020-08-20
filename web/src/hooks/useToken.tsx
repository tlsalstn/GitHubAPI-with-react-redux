import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { tokenAPI } from "../modules/token";
import { useCallback } from "react";

export default function useToken() {
    const token = useSelector((state: RootState) => state.token);
    const dispatch = useDispatch();

    const getToken = useCallback((code: string, state: string) => dispatch(tokenAPI(code, state)), [dispatch]);

    return { token, getToken };
}