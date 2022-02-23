import { IDMVinit } from "../constants/index"
const initState = {};
export default function IDmV(state = initState, action) {
    switch (action.type) {
        case IDMVinit: {
            return action.data;
        }
            default:
                return state;
        }
}
