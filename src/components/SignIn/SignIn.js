import React from 'react'
import { Grid,Segment,Form,Button,Icon } from 'semantic-ui-react';
import './signIn.css';

const SignIn = () => {
    return (
        
        <Grid centered columns={3} style={{marginTop:'10px'}} >
        <Grid.Column className="signIn-form">
        <Form >
            <Form.Field>
            <label>Email</label>
            <input type="email"/>
            </Form.Field>
            <Form.Field>
            <label>Enter Password</label>
            <input type='password' />
            </Form.Field>
           
            <Button  animated='vertical'  color='violet' type='submit' floated='right'>
                <Button.Content hidden>Sign In</Button.Content>
                <Button.Content visible>
                    <Icon name='sign in' />
                </Button.Content>
            </Button> 
          
            <Button basic color='purple' >Register</Button>
         </Form>
        </Grid.Column>
        </Grid>
     
    )
        
}

export default SignIn;
