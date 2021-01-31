import React, { useState, useEffect } from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank";
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import { Grid } from 'semantic-ui-react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';


const app = new Clarifai.App({apiKey: '1eab0b351fac408285831bc6c61e6b9f'});

const particlesOptions = {
  particles: {
    
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}



function App() {
  /*Hooks states*/
  const [input, setInput] = useState('');
  const [imageURL,setImageURL] = useState(input);
  const [transition,setTransition] =useState('');
  const [faceBox,setFaceBox]=useState({});
  const [route,setRoute] = useState('signin');
  //user
  const [isSignedIn,setIsSignedIn] = useState(false);
  const [user,setUser] = useState({
      id:'',
      name:'',
      email:'',
      password:'',
      entries:0,
      joined: ''
  });

  const loadUser = (data)=>{
    console.log(data);
    setUser({
      id:data.id,
      name:data.name,
      email:data.email,
      password:data.password,
      entries:data.entries,
      joined:data.joined

    });

  }

  useEffect(() => {
    fetch('http://localhost:3000/')
    .then(response=>response.json())
   //.then(console.log); //console.log its the same with .then(data=>console.log(data))
 
  }) ;

  
  const onInputChange =(event) =>{
    //console.log(event.target.value);
    setInput(event.target.value);
  
      
    }

    useEffect(() => {
      setImageURL(input);
      setFaceBox({});
    }, [input]);

  const onSubmitImage = () =>{
   
     
       // app.models.predict({id: 'd02b4508df58432fbb84e800597b8959'},imageURL).then(
        app.models.predict({id:Clarifai.FACE_DETECT_MODEL },imageURL).then( 
          function(response) {
            if(response){
              fetch('http://localhost:3000/image',{
                method:'put',
                headers:{'content-type':'application/json'},
                body:JSON.stringify({
                  id:user.id
                })
              })
              .then(response=>response.json())
              .then(count=>{
                //*Object.assign() allow us to change only specific parametres in an object
                //setUser(Object.assign(user,{entries:count}));
                setUser({...user, entries:count});
              })
            }
            displayFaceBox(calculateFaceLocation(response));
          },
          function(err) {
            console.log(err);
          }
        );
     
    }

   

   const  calculateFaceLocation = (res) =>{
      const clarifaiFace = res.outputs[0].data.regions[0].region_info.bounding_box;
      //console.log(clarifaiFace);
      const image = document.getElementById('inputimage');
      const width= Number(image.width);
      const height =Number(image.height);
      //console.log(width,height);
      return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
       
      }

   } 

   const displayFaceBox = (box) =>{
     //console.log(box);
    setFaceBox(box);
   }

   const onRouteChange = (newRoute) =>{

    setRoute(newRoute);

   }
  return (
    <div className="App">
    <Particles className="particles" params={{particlesOptions}}/>
    { /*We use the route state to create routers for login */
     (route==='home')
        ?<React.Fragment>
            <Grid  padded> 
                  <Grid.Column  floated="left" >
                  <Logo />
                  </Grid.Column>
              
                  <Grid.Column > 
                  <Navigation onRouteChange ={onRouteChange}/>
                  </Grid.Column>
            </Grid>
            <Grid stackable padded>
                <Grid.Row>
                  <Grid.Column width={7} >
                  <Rank userName ={user.name} userMail={user.email} userEntries={user.entries}/>
                  </Grid.Column>
                  <Grid.Column >
                  <ImageLinkForm onInputChange={onInputChange} onSubmitImage={onSubmitImage}/>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column >
                  <FaceRecognition imageUrl = {imageURL} box={faceBox} transitionEffect={transition} />
                  </Grid.Column>
                </Grid.Row>
            </Grid>
        </React.Fragment>  
        :( route==='signin' 
            ?<SignIn onRouteChange ={onRouteChange} loadUser={loadUser}/> 
            :<Register onRouteChange ={onRouteChange} newUser={loadUser}/>
          )    
     
    }
            
     
    </div>
  );
}

export default App;
