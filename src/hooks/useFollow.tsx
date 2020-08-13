import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { followerAPI } from "../modules/follow";
import { useCallback } from "react";

export default function useFollow() {
    const follower = useSelector((state: RootState) => state.follow);
    const dispatch = useDispatch();

    const getFollowerData = useCallback((name: string) => dispatch(followerAPI(name)), [dispatch]);

    return { follower, getFollowerData };
}