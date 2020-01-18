const NewsUploadReducer = (state =
    {
    newsheader:'',
    newsimage:'',
    newsdesc:'',
    result:'',
    loading:false
}  , action)=>{

    switch (action.type){
        case "NEWS_DESC_UPLOAD":

        state = {
...state,
        newsdesc: action.payload.data

        }
        break;

        case "NEWS_HEAD_UPLOAD":

          state = {
            ...state,
            newsheader:action.payload.data
        }
        break;
        case "NEWS_IMG_UPLOAD":

          state = {
            ...state,
            newsimage:action.payload.data
        }
        break;
        case "LOADING_UPLOAD":

          state = {
            ...state,
            loading:action.payload
        }
        break;

        case "SET_RESULT_NEWS_UPLOAD":

          state = {
            ...state,
            result:action.payload
        }
        break;
        case "NEWS_CLEAR_UPLOAD":

          state = {
            newsheader:'',
            newsimage:'',
            newsdesc:'',
            result:''
        }
        break;

    }
    return state;
};
export default NewsUploadReducer;
