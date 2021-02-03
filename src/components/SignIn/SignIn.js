import React, { useState } from 'react'
import { Grid,Form,Button,Icon, Message } from 'semantic-ui-react';
import './signIn.css';

const SignIn = ({onRouteChange, loadUser}) => {
    const [signInEmail,setSignInEmail] = useState('');
    const [signInPassword,setSignInPassword] = useState('');

    const onEmailChange  = (event) =>{
        setSignInEmail(event.target.value);
    }

    const onPasswordChange  = (event) =>{
        setSignInPassword(event.target.value);
    }

    const onSubmitSignIn = () =>{
        //console.log(signInEmail,signInPassword);
        //POST request to server. If email& passowrd match adn srver responses success we sign in
        fetch('https://sheltered-cliffs-34923.herokuapp.com/signin',{
            method:'post',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({
                email:signInEmail,
                password:signInPassword
            })
        })
        .then(response=>response.json())
        .then(user=>{
            if(user.id){
                //if Server respond with a user
                loadUser(user);
                onRouteChange('home');
            }
        })
       
    }

    return (
        
        <Grid centered columns={3} style={{marginTop:'10px'}} >
        <Grid.Row><h1 >Welcome to Smart-Brain</h1></Grid.Row>
        <Grid.Column className="signIn-form">
        <Form >
        <h3 >Sign In</h3>
            <Form.Field>
            <label>Email</label>
            <input 
                type="email"
                name="email"
                id="email-address"
                onChange={onEmailChange}
            />
            </Form.Field>
            <Form.Field>
            <label>Enter Password</label>
            <input 
                type='password' 
                name="password"
                id="password"
                onChange={onPasswordChange}
            />
            </Form.Field>
            <Button color='violet'  floated='right' onClick={onSubmitSignIn}>Sign In</Button>
           
            <Button basic color='purple' onClick={()=> onRouteChange('register')}> Register</Button>
         </Form>
         <Message info>
            <Message.Header>Register or login with a demo account</Message.Header>
            <p><b>email:</b> test@email.com <b>password: </b> test </p>
         </Message>
        </Grid.Column>
        
        </Grid>
        
     
    )
        
}

export default SignIn;
