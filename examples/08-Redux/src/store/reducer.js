export default function counter(state = {count: 0, disable: false, step: 1}, action){
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                disable: false,
                count: state.count += 1
            };
        case 'DECREMENT':
            return {
                ...state,
                disable: false,
                count: state.count -= 1
            };
        case 'DELAY' :
            return {
                ...state,
                disable: true
            };
        default:
            return state;
    }
}