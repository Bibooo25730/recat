import { LOGIN } from "../constants/index"

export function login(data) {
    return {
        type: LOGIN,
        data
    }
}