import React from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank";
import { Grid } from 'semantic-ui-react';
import Particles from 'react-particles-js';
import './App.css';

const particlesParams=  {
  
  "particles": {
    "bounce": {
      "horizontal": {
        "random": {
          "enable": false,
          "minimumValue": 0.1
        },
        "value": 1
      },
      "vertical": {
        "random": {
          "enable": false,
          "minimumValue": 0.1
        },
        "value": 1
      }
    },
  
    "color": {
      "value": "#ffffff",
      "animation": {
        "enable": true,
        "speed": 50,
        "sync": false
      }
    },
    
    "number": {
      "density": {
        "enable": true,
        "area": 800,
        "factor": 1000
      },
      "limit": 0,
      "value": 100
    }
    
  }
}



function App() {
  return (
    <div className="App">
    <Particles className="particles" params={particlesParams}/>

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
        <ImageLinkForm />
        </Grid.Column>
      </Grid.Row>
     </Grid>
     
     
     
        
    
     
      { /* <FaceRecognition />*/}
     
    </div>
  );
}

export default App;
