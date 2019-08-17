import { ADD_COMMENT } from '../actions/types';

export default function (state = null, action) {
    switch (action.type) {
        case ADD_COMMENT :
            return action.payload || false;
        default:
            return state;
    }
}