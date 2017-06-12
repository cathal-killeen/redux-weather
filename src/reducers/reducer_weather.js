import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
    switch(action.type){
    case FETCH_WEATHER:
        // return state.push(action.payload.data); -- intuitive solution
        // we need to return a new instance of state, can never mutate current state
        // return state.concat([ action.payload.data ]); -- this is a viable solution 
        // but ES6 makes it easier...
        return [ action.payload.data, ...state ];
    }


    return state;
}