import React from 'react';
import { Segment } from 'semantic-ui-react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl,box}) => {
    
    if (imageUrl){
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
    }else return <section style={{"margin":"10px"}}></section>
   
    
}



export default FaceRecognition;
