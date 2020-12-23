import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { getBranchList, getRepository, getRepositoryList } from "../modules/github/repository";

export default function useRepository() {
    const repositoryState = useSelector((state: RootState) => state.repository)
    const dispatch = useDispatch()

    const getRepositoryData = useCallback((name: string, repo: string) => dispatch(getRepository(name, repo)), [dispatch])
    const getRepositoryListData = useCallback((name: string, type: string, sort: string) => dispatch(getRepositoryList(name, type, sort)), [dispatch])
    const getBranchListData = useCallback((name: string, repo: string) => dispatch(getBranchList(name, repo)), [dispatch])

    return { repositoryState, getRepositoryData, getRepositoryListData, getBranchListData }
}