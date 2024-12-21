import React from 'react';
import { DECREAMENT, INCREAMENT } from '../../constants/CountConstants';

const countInitialState = { count: 0 };

export default CountReducer = (state = countInitialState, action) => {
    switch (action.type) {
        case INCREAMENT:
            return { ...state, count: state.count + 1 };
            break;
        case DECREAMENT:
            return { ...state, count: state.count - 1 };
            break;
        default:
            return state;
            break;
    }
}
