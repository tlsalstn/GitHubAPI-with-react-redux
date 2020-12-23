import { MODAL_OPEN, MODAL_CLOSE } from "./types";

export const open = (name: string) => ({
    type: MODAL_OPEN,
    name
})
export const close = (name: string) => ({
    type: MODAL_CLOSE,
    name
})

export type ModalActions =
    | ReturnType<typeof open>
    | ReturnType<typeof close>