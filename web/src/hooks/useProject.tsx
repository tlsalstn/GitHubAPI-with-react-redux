import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../modules'
import { projectListAPI } from '../modules/project'
import { useCallback } from 'react'

export default function useProject() {
    const projectState = useSelector((state: RootState) => state.project)
    const dispatch = useDispatch()

    const getProjectList = useCallback((name: string, type: string) => dispatch(projectListAPI(name, type)), [dispatch])

    return { projectState, getProjectList }
}