import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { repositoryListAPI, repositoryAPI } from "../modules/repository";
import { useCallback } from "react";

export default function useRepository() {
    const repositoryState = useSelector((state: RootState) => state.repository)
    const dispatch = useDispatch()

    const getRepository = useCallback((name: string, repo_name: string) => dispatch(repositoryAPI(name, repo_name)), [dispatch])
    const getRepositoryList = useCallback((name: string) => dispatch(repositoryListAPI(name)), [dispatch])

    return { repositoryState, getRepository, getRepositoryList };
}