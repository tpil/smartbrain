import React, { useState } from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank";
import { Grid } from 'semantic-ui-react';
import Particles from 'react-particles-js';
import './App.css';

const particlesParams=  {
  
  "particles": {
    
    "color": {
      "value": "#8F25B1",
      
    },
    
    "number": {
      "value":100,
      "density": {
        "enable": true,
        "value": 800,
        
      }
      
    }
    
  }
}



function App() {
  const [input, setInput] = useState('');

  const onInputChange =(event) =>{
    console.log(event.target.value);
    
    }
    const onSubmitImage = () =>{
      console.log('clicked');
    }
  return (
    <div className="App">
    <Particles className="particles" params={{particlesParams}}/>

     <Grid stackable padded>
     <Grid.Row>
        <Grid.Column floated="left" >
        <Logo />
        </Grid.Column>
     
        <Grid.Column floated="right"> 
        <Navigation />
        </Grid.Column>
     </Grid.Row>
      <Grid.Row   columns={3}>
        <Grid.Column>
        <Rank/>
        </Grid.Column>
        <Grid.Column >
        <ImageLinkForm onInputChange={onInputChange} onSubmitImage={onSubmitImage}/>
        </Grid.Column>
      </Grid.Row>
     </Grid>
     
     
     
        
    
     
      { /* <FaceRecognition />*/}
     
    </div>
  );
}

export default App;
