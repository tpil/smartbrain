import React from 'react';
import { Image } from 'semantic-ui-react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl,box,transitionEffect}) => {
    

    return (
        <div >
            <div className='img-container'>
                <Image   id="inputimage"  src={imageUrl}   /> 
                <div className='bounding-box' style={{top:box.topRow, right:box.rightCol, bottom: box.bottomRow, left:box.leftCol}}></div>
            </div>    
        </div>
    )
}

export default FaceRecognition;
