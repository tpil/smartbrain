import React from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/Logo/Logo';
import { Container } from 'semantic-ui-react';


function App() {
  return (
    <Container>
      <Navigation />
      <Logo />
     {/* <ImageLingForm />
      <FaceRecognition />*/}
    </Container>
  );
}

export default App;
