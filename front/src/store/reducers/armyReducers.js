import { CREATE_UNITS } from "../types";

const initialState ={ 
    units: {},
}

export default function (state = initialState, action) {
    switch(action.type){
        case CREATE_UNITS:
            return {...state, units: action.payload}

        default: 
            return state;
    }
}