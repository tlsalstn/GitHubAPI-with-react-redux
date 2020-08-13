import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { useCallback } from "react";
import { projectAPI } from "../modules/project";

export default function useProject() {
    const project = useSelector((state: RootState) => state.project);
    const dispatch = useDispatch();

    const getProjectData = useCallback((name: string, type: string) => dispatch(projectAPI(name, type)), [dispatch]);

    return { project, getProjectData };
}