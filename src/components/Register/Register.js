import React from 'react';
import { Grid,Form,Button} from 'semantic-ui-react';
import './register.css';

const Register = ({onRouteChange}) => {
    return (
        <Grid centered columns={2} style={{marginTop:'10px'}} >
        <Grid.Column className="register-form">
        <h3 style={{textAlign:'center'}}>Register</h3>
        <Form >
        <Form.Field>
            <label>Name</label>
            <input type="text"/>
            </Form.Field>
            <Form.Field>
            <label>Email</label>
            <input type="email"/>
            </Form.Field>
            <Form.Field>
            <label>New Password</label>
            <input type='password' />
            </Form.Field>
           
            <Button color='purple' floated='right' type='submit' onClick = {()=> onRouteChange('home')}>Create account</Button>
         </Form>
        </Grid.Column>
        </Grid>
    )
}

export default Register;
