import React from 'react'
import './homepage.css'







   const Friday = (props) =>{
    let {dt,temp,pressure,humidity,speed,deg,clouds,snow}=props.history.location.state;
       
       console.log(props.location.state)
       return(
       <div className="Setpage"> 
           <h1>WELCOME TO Friday</h1>
            <div className="tableset">
           <table>
               <thead>
                   <th>DT</th>
                   <th>Temperature</th>
                   <th>Humidity</th>
                   <th>Speed</th>
                   <th>Degree</th>
                   <th>Clouds</th>
                   <th>Snow</th>
               </thead>
               <tbody>
                  
                      <tr key={""}>
                          <td>{dt}</td>
                         <td>{temp.day}</td>
                         <td>{pressure}</td>
                         <td>{humidity}</td>
                         <td>{speed}</td>
                         <td>{deg}</td>
                         <td>{clouds}</td>
                         <td>{snow}</td>
                      </tr>
                  
               </tbody>
           </table>
       </div>
       </div>


       )
   }

   export default Friday;