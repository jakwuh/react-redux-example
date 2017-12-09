import 'babel-polyfill';
import {createStore as createReduxStore} from 'redux'
import {COMPLETE_COURSE_ACTION} from 'entities/Course/actions';
import {SET_CURRENT_USER_ACTION} from 'entities/User/actions';

function reducer(state, action) {
    if (action.type === COMPLETE_COURSE_ACTION) {
        return {
            ...state,
            cards: state.cards.map(card => {
                return action.cardId === card.id
                    ? {
                        ...card,
                        completed: true
                    }
                    : card;
            })
        };
    }

    if (action.type === SET_CURRENT_USER_ACTION) {
        return {
            ...state,
            user: action.user
        };
    }

    return state;
}

export function createStore(data) {
    return createReduxStore(reducer, data);
}
