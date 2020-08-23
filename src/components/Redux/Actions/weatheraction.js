


export const reqSend = () =>({
    type:"SENDING_REQ",
    payload:"REQ has been sent"
})

export const getweatherAction = (dispatch) =>{
      return (dispatch) =>{
         fetch("https://cors-anywhere.herokuapp.com/samples.openweathermap.org/data/2.5/forecast/daily?id=524901&appid=b1b15e88fa797225412429c1c50c122a1 ")
         .then((res)=>{
           
              return res.json()
           
         })
        .then((res)=>{
          console.log(res,"in action")
         
             dispatch({
             type:'REQ_SUCCESS',
             payload:{
               
               days:res.list
             }
         })
        
      })
      .catch((err)=>{
           dispatch({
             type:'REQ_FAILDED',
             msg:`NetWork Error ${err}`
           })
         })
      }
}


