import { RootState } from "modules";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { modalOpen, modalClose } from '../modules/modal'

export default function useModal() {
    const modalState = useSelector((state: RootState) => state.modal)
    const dispatch = useDispatch()

    const openModal = useCallback((name: string) => dispatch(modalOpen(name)), [dispatch])
    const closeModal = useCallback((name: string) => dispatch(modalClose(name)), [dispatch])

    return { modalState, openModal, closeModal }
}