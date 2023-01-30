import { CREATE_UNITS } from "../types";
import * as api from '../../api'




export const createUnits = (qty) => async (dispatch) => {
    
    try{
        
        const {data} = await api.trainUnits(qty);
        
        dispatch({type: CREATE_UNITS, payload: data})
    }
    catch(e){
        
    }
}