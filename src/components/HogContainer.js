import React from 'react'
import HogTile from './HogTile'


function HogContainer(props){


 let arrayOfComponents=props.pigData.map((singularPig) => {
     return <HogTile key={singularPig.id} pigData={singularPig} />
 })



return ( 
    <div className="pigContainer">
    <ul>
        {arrayOfComponents}
    </ul>
    </div>
)

}





export default HogContainer