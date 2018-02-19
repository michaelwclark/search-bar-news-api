export default function(state=[],action){
    switch(action.type){
        case'ALL_NEWS':
            return action.payload
        case'PARTICULAR_NEWS':
            return action.payload
    
      
        default:
            return state
    }
}

