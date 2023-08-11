import {BOOKMARK_CARD_FLAG , FAVORITE_CARD_FLAG} from './cardListTypes'
// import axios from 'axios'




export const bookmarkCourse = (bookmark_courses) =>{

    return{
        type: BOOKMARK_CARD_FLAG,
        payload : bookmark_courses,

    }

}

export const favoriteCourse = (favorite_courses) =>{

    return{
        type: FAVORITE_CARD_FLAG,
        payload : favorite_courses,

    }

}








// export const cardDataRequest = () =>{
//     return{
//         type: CARD_DATA_REQUEST
//     }
// }

// export const cardDataSuccess = (data) =>{
//     return{
//         type : CARD_DATA_SUCCESS,
//         payload : data
//     }
// }

// export const cardDataError = (err) =>{
//     return{
//         type: CARD_DATA_ERROR,
//         payload : err
//     }
// }


// export const fetchData = () =>{
//     return async function(dispatch){

//         dispatch(cardDataRequest())

//         const clientId = 'hq0az0hdZfjpo1fpUPJB6r4XA9o6I02sY7QYiVvk';
//         const clientSecret = 'KvrTYw4RgrZpOVF3NwXqctD1a5TA7lsTGKHNJvwwoFI7g274F6jcTNh2k1jWhxjVP1hbnbMBJ9O9lwu8yEZG2G3Oa2LP0mwiHHuqNdbH52TKZ1n8Rh35GTGoswLxFd0e';

//         const token = btoa(`${clientId}:${clientSecret}`);
//         const config = { headers: { Authorization: `Basic ${token}` } };

//         try{
//             const cdata = await axios.get('https://www.udemy.com/api-2.0/courses/433798/?page=84&page_size=100', config)

//             // console.log(cdata);
//             console.log(cdata.data);
//             console.log(cdata.data.results);
//             const datas = cdata.data.results;
//             if(datas.length === 0){
//                 dispatch(cardDataSuccess([]))
//             }else{
//                 dispatch(cardDataSuccess(datas))
//             }
//         }catch(err){
//             const msg = err.message
//             dispatch(cardDataError(msg))
//         }

//     } 
// }




