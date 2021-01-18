import React, { useState } from 'react'
import { Grid,Form,Button,Icon } from 'semantic-ui-react';
import './signIn.css';

const SignIn = ({onRouteChange}) => {
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
        fetch('http://localhost:3000/signin',{
            method:'post',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({
                email:signInEmail,
                password:signInPassword
            })
        })
        .then(response=>response.json())
        .then(data=>{
            if(data==='success'){
                onRouteChange('home');
            }
        })
       
    }

    return (
       
        <Grid centered columns={3} style={{marginTop:'10px'}} >
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
           
            <Button  animated='vertical'  color='violet' type='submit' floated='right' onClick={onSubmitSignIn}>
                <Button.Content visible>Sign In</Button.Content>
                <Button.Content hidden>
                    <Icon name='sign in' />
                </Button.Content>
            </Button> 
          
            <Button basic color='purple' onClick={()=> onRouteChange('register')}> Register</Button>
         </Form>
        </Grid.Column>
        </Grid>
        
     
    )
        
}

export default SignIn;
