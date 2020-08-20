import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { repositoryAPI } from "../modules/repository";
import { useCallback } from "react";

export default function useRepository() {
    const repository = useSelector((state: RootState) => state.repository);
    const dispatch = useDispatch();

    const getRepositoryData = useCallback((name: string) => dispatch(repositoryAPI(name)), [dispatch]);

    return { repository, getRepositoryData };
}