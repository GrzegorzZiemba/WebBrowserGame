import { CREATE_UNITS } from "../types";
import * as api from '../../api'

export const createUnits = (qty) => async (dispatch) => {
    console.log("Craeting Units")
    try{
        console.log(qty)
        const {data} = await api.trainUnits(qty);
        console.log(data)
        dispatch({type: CREATE_UNITS, payload: data})
    }
    catch(e){
        console.log("Error " + e)
    }
}