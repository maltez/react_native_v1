import { Decrement } from '../decrement/decrement';
import store from '../../store/store';

export class Increment extends Decrement {
    delayedDecrement() {
        store.dispatch({type: 'DELAY'});
        setTimeout(()=> {
            store.dispatch({type: 'INCREMENT'});
        },  500);
    }
}
