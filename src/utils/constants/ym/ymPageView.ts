import {YM_COUNTER} from "../constants";

declare global {
    interface Window {
        ym: (a: number, b: string, c: string) => void
    }
}

export const ymPageView = () => {
    window.ym(YM_COUNTER, 'hit', window.location.href)
}