
import { INCREASE, DECREASE } from "../actions/actionsTypes";

const initialState = 0;

const counterReducer = (state = initialState, action)=>{

    switch(action.type){

        
        case INCREASE:
            console.log(action);
            return state+1;

        case DECREASE:
            console.log(action);
            return state-1;

        default:
            console.log(action);
            return state;
    }
}


export default counterReducer;