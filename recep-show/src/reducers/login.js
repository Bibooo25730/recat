import { LOGIN } from "../constants/index"
const ininState = {};
export default function login(state = ininState, action) {
    switch (action.type) {
        case LOGIN:
            return action.data;
        default:
            return state;
    }
}