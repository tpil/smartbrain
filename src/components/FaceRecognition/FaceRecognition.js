import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl,box,transitionEffect}) => {
    

    return (
        <div  >
            <div className="img-style" >
                <img  id="inputimage"  src={imageUrl}  style={{"maxWidth":"500px"}} /> 
                <div  className='bounding-box' style={{top:box.topRow, right:box.rightCol, bottom: box.bottomRow, left:box.leftCol}}></div>
            </div>    
        </div>
    )
}

export default FaceRecognition;
