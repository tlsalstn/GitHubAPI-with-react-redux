import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { getContents } from "../modules/github/content";

export default function useContents() {
    const contentsState = useSelector((state: RootState) => state.contents)
    const dispatch = useDispatch()

    const getContentsData = useCallback((name: string, repo: string, roots?: string, branch?: string) => dispatch(getContents(name, repo, roots, branch)), [dispatch])

    return { contentsState, getContentsData }
}