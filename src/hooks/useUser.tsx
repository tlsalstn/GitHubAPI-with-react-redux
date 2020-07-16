import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { userAPI } from "../modules/user";
import { useCallback } from "react";

export default function useUser() {
    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    const getUserData = useCallback((name: string) => dispatch(userAPI(name)), [dispatch]);

    return { user, getUserData };
}