import React from 'react';
import { Segment } from 'semantic-ui-react'

const FaceRecognition = ({imageUrl,box}) => {
    

   
    return (
        <section style={{"margin":"10px"}}>
            <Segment>
                <div className="img-style" >
                    <img  id="inputimage"  src={imageUrl}  style={{"maxWidth":"500px"}} /> 
                    <div  className='bounding-box' style={{top:box.topRow, right:box.rightCol, bottom: box.bottomRow, left:box.leftCol}}></div>
                    
                </div>    
                    
            </Segment>
         </section>
    )
}

export default FaceRecognition;
