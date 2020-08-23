import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {  getweatherAction }  from './Redux/Actions/weatheraction'
import './homepage.css'





    const HomePage= (props) =>{
      const getsunday= (e,i) =>{
        console.log(e.target.id)
        props.history.push({pathname:`${e.target.id}`,state:props.data[i]})
       
      }
        
      //  useEffect(()=>{

      //  },)
      console.log(props.data)
      
        return(
          

          <div className="Setpage">
             
            <h1>Weather App</h1>
            <button onClick={props.Fetchweather}>Getdata</button> <br />

            
          
          <button id="sunday"onClick={(e)=>getsunday(e,0)}>Click on sunday</button><br />
          <button id="monday"onClick={(e)=>getsunday(e,1)}>Click on Monday</button><br />
          <button id="tuesday"onClick={(e)=>getsunday(e,2)}>Click on Tuesday</button><br />
          <button id="wednesday"onClick={(e)=>getsunday(e,3)}>Click on Wednesday</button><br />
          <button id="thursday"onClick={(e)=>getsunday(e,4)}>Click on Thursday</button><br />
          <button id="friday" onClick={(e)=>getsunday(e,5)}>Click on Friday</button><br />
          <button id="saturday" onClick={(e)=>getsunday(e,6)}>Click on Saturday</button><br />
         
            
           
          </div>

              

        )
    }


    const mapStateToProps = (state) =>({
      ...state,
   })
   
   const mapDispatchToProps = (dispatch) => ({
     Fetchweather:() => dispatch(getweatherAction())
   })
   
    export default connect(mapStateToProps,mapDispatchToProps) (HomePage);