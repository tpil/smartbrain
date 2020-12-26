import React from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank";
import { Grid } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
        
     <Grid stackable padded columns={3}>
     <Grid.Row >
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
