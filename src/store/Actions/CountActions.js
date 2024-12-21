import { DECREAMENT, INCREAMENT } from "../../constants/CountConstants";

export const countIncreament = () => {
    return (dispatch) => {
        //dispatch response to the store
        dispatch({ type: INCREAMENT })
    };
};

export const countDecreament = () => {
    return (dispatch) => {
        //dispatch response to the store
        dispatch({ type: DECREAMENT })
    };
};