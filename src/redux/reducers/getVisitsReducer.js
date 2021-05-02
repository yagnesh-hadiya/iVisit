import { GETVISITS } from "../constants";

const initialState = {
    data: [],
}

const getVisitsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETVISITS:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}
export default getVisitsReducer;
