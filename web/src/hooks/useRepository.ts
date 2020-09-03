import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { getRepository, getRepositoryList } from "../modules/github/repository";

export default function useRepository() {
    const repositoryState = useSelector((state: RootState) => state.repository)
    const dispatch = useDispatch()

    const getRepositoryData = useCallback((name: string, repo: string) => dispatch(getRepository(name, repo)), [dispatch])
    const gerRepositoryListData = useCallback((name: string, type: string) => dispatch(getRepositoryList(name, type)), [dispatch])

    return { repositoryState, getRepositoryData, gerRepositoryListData }
}