import {CARD_DATA_REQUEST,CARD_DATA_SUCCESS,CARD_DATA_ERROR} from './cardListTypes'


const initialState= {
    loading: false,
    cardData: [],
    error : ''   
}




const cardDataReducer = (state = initialState, action) =>{
    switch(action.type){
        case CARD_DATA_REQUEST:
            return{
                ...state,
                loading: true,
            }
        
        case CARD_DATA_SUCCESS: 
            return{
                loading : false,
                cardData : action.payload,
                error : ''
            }
        
        case CARD_DATA_ERROR:
            return{
                loading : false,
                cardData : [],
                error : action.payload
            }

        default : return state
    }
}

export default cardDataReducer