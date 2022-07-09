import {CARD_DATA_REQUEST,CARD_DATA_SUCCESS,CARD_DATA_ERROR} from './cardListTypes'
import axios from 'axios'


export const cardDataRequest = () =>{
    return{
        type: CARD_DATA_REQUEST
    }
}

export const cardDataSuccess = (data) =>{
    return{
        type : CARD_DATA_SUCCESS,
        payload : data
    }
}

export const cardDataError = (err) =>{
    return{
        type: CARD_DATA_ERROR,
        payload : err
    }
}


export const fetchData = () =>{
    return async function(dispatch){

        dispatch(cardDataRequest())
        try{
            const cdata = await axios.get('https://nut-case.s3.amazonaws.com/coursessc.json')
            const datas = cdata.data;
            if(datas.length === 0){
                dispatch(cardDataSuccess([]))
            }else{
                dispatch(cardDataSuccess(datas))
            }
        }catch(err){
            const msg = err.message
            dispatch(cardDataError(msg))
        }

    } 
}




