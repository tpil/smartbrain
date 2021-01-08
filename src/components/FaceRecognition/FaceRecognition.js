import React from 'react';
import { Image } from 'semantic-ui-react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl,transitionEffect}) => {
    

    return (
        <div className={transitionEffect}>
            <div className="img-container">
                <Image id="inputimage"  src={imageUrl}   /> 
            </div>    
        </div>
    )
}

export default FaceRecognition;
