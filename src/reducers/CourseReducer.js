import * as actionsTypes from '../actions/actionsTypes';

// reducers

export default function courseReducer(state = [], action) {
    switch (action.type) {
        case actionsTypes.CREATE_COURSE:
            console.log(actionsTypes.CREATE_COURSE);
            return [...state, Object.assign({}, action.course)];
        default:
            return state;
    }
}