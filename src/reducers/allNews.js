const initialState = {
    loading: false,
    error: null,
    articles: []
}

export default function(state=initialState,action){
    // console.log(state, action)
    switch(action.type){
        case 'ALL_NEWS_PENDING':
            console.log('ALL_NEWS_PENDING')
            return {loading:true , error:null, articles: []}
        case 'ALL_NEWS_FULFILLED':
            console.log('ALL_NEWS_FULFILLED', action.payload)
            return {loading:false , error:null, articles: action.payload.articles}

        case 'PARTICULAR_NEWS_PENDING':
            console.log('PARTICULAR_NEWS_REQUESTED')        
            return {loading:true , error:null, articles: []}
        case 'PARTICULAR_NEWS_FULFILLED':
            console.log('PARTICULAR_NEWS_FULFILLED')
            return {loading:false , error:null, articles: action.payload.articles}
      
        default:
            return state
    }
}

