import { INCREMENT, DECREMENT, DELAY } from './action';

const initialState = {
    counter: 0,
    delay: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT: 
            return {
                ...state,
                delay: false,
                counter: state.counter + 1
            }
        case DECREMENT: 
            return {
                ...state,
                delay: false,
                counter: state.counter - 1
            }
        case DELAY: {
            return {
                ...state,
                delay: true
            }
        }
        default:
            return state;
    }
}

export default reducer;