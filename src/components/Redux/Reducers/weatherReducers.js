const initialState = {
    data:[],
    
  }
  
  const getweatherRedu = (state = initialState,action) =>{
      switch (action.type) {
        
        case "REQ_SUCCESS":
            return{...state,data:action.payload.days}
          break;
        case "REQ_FAILDED":
            return{...state,msg:action.payload}
          break;
        default:
          return{...state}
      }
  }
  
  export default getweatherRedu;
  