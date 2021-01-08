import React, { useState } from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank";
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import { Grid } from 'semantic-ui-react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';


const app = new Clarifai.App({apiKey: '1eab0b351fac408285831bc6c61e6b9f'});

const particlesParams=  {
  
  "particles": {
    
    "color": {
      "value": "#8F25B1",
      
    },
    
    "number": {
      "value":30,
      "density": {
        "enable": true,
        "area_value": 800,
        
      }
      
    }
    
  }
}



function App() {
  const [input, setInput] = useState('');
  const [imageURL,setImageURL] = useState('');
  const [transition,setTransition] =useState('');
  const onInputChange =(event) =>{
    console.log(event.target.value);
    setInput(event.target.value);
    }

  const onSubmitImage = () =>{
   
      setImageURL(input);
      console.log('clicked');
     
        app.models.predict({id: Clarifai.FACE_DETECT_MODEL},imageURL).then(
          function(response) {
            console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
          },
          function(err) {
            // there was an error
          }
        );
    
     
    }
  return (
    <div className="App">
    <Particles className="particles" params={{particlesParams}}/>

     <Grid padded> 
      <Grid.Row>
          <Grid.Column floated="left" >
          <Logo />
          </Grid.Column>
      
          <Grid.Column floated="right"> 
          <Navigation />
          </Grid.Column>
      </Grid.Row>
     </Grid>
     <Grid stackable padded>
      <Grid.Row>
        <Grid.Column width={7} >
        <Rank/>
        </Grid.Column>
        <Grid.Column >
        <ImageLinkForm onInputChange={onInputChange} onSubmitImage={onSubmitImage}/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <FaceRecognition imageUrl = {imageURL} transitionEffect={transition} />
      </Grid.Row>
     </Grid>
     
     
     
        
    
     
     
     
    </div>
  );
}

export default App;
