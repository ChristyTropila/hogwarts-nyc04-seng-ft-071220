import React from 'react'
import hogs from "../porkers_data";
//import HogContainer from './HogContainer'


class HogTile extends React.Component {

    state ={
        open: false
    }
    
 handleDetails = ((evt) =>{
    this.setState({open: !this.state.open})
 })
    render(){
        console.log(this.weight)
       
        let {name}=this.props.pigData
        let pigImages=require(`../hog-imgs/${name.toLowerCase().replace(/ /g,"_")}.jpg`)
      
        return(
           <li className="pigTile" name ={name} onClick= {this.handleDetails}>
             <img src={pigImages}/>
            <p>Pig Name: <span>{name}</span></p>
           
        
           {
               this.state.open ? <li> specialty: {this.props.pigData.specialty }</li> : <li> </li>
              
           }
           
           {
            this.state.open ?  <li> weight:{this.props.pigData.weight}</li> : <li> </li>
           }

           {
               this.state.open ? <li> highest medal achieved:{this.props.pigData['highest medal achieved']}</li> : <li></li>
           }
           </li>
        )   
    }
        
    }




export default HogTile