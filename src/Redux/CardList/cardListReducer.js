import {BOOKMARK_CARD_FLAG , FAVORITE_CARD_FLAG} from './cardListTypes'


const initialState= {
    bookmarkCourses: [],
    favoriteCourses: [],
    error : ''   
}




const cardDataReducer = (state = initialState, action) =>{

    console.log(state.bookmarkCourses)
    console.log(state.favoriteCourses)

    switch(action.type){
        
        case BOOKMARK_CARD_FLAG: {
            
            if(!state.bookmarkCourses.some(ele => ele.id === action.payload.id)){
                state.bookmarkCourses = [ ...state.bookmarkCourses ,  action.payload ]
                
            }else{
                state.bookmarkCourses = state.bookmarkCourses.filter((ele) =>{ return ele.id!==action.payload.id} )
                
            }
            
            return{
                ...state,
                bookmarkCourses : state.bookmarkCourses,
            }
        }
        
        case FAVORITE_CARD_FLAG:{

            if(!state.favoriteCourses.some(ele => ele.id === action.payload.id)){
                state.favoriteCourses = [ ...state.favoriteCourses ,  action.payload ]
                
            }else{
                state.favoriteCourses = state.favoriteCourses.filter((ele) =>{ return ele.id!==action.payload.id} )
                
            }

            return{
                ...state,
                favoriteCourses : state.favoriteCourses
            }

        }
        default : return state
    }
}

export default cardDataReducer