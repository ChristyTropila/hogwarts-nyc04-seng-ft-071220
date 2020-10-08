import React from 'react'
//import HogContainer from './HogContainer'


class HogTile extends React.Component {

    


    render(){
       

        let {name}=this.props.pigData
        let pigImages=require(`../hog-imgs/${name.toLowerCase().replace(/ /g,"_")}.jpg`)
      
        return(
           <li className="pigTile">
             <img src={pigImages}/>
            <p>Pig Name: <span>{name}</span></p>
           </li>
        )
    }

}


export default HogTile