import React, { useState }from 'react';
import { Grid,Form,Button} from 'semantic-ui-react';
import './register.css';

const Register = ({onRouteChange,newUser}) => {
    //Hooks
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');


    const onNameChange =(event)=>{
        setName(event.target.value);
    }

    const onEmailChange  = (event) =>{
        setEmail(event.target.value);
    }

    const onPasswordChange  = (event) =>{
        setPassword(event.target.value);
    }

    const onSubmitRegister = () =>{
        console.log(name,email);
        //POST request to server. If Name, email& passowrd match cretiria srver responses success register
        fetch('https://sheltered-cliffs-34923.herokuapp.com/register',{
            method:'post',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({
                name:name,
                email:email,
                password:password
            })
        })
        .then(response=>response.json())
        .then(user=>{
            if(user.id){
                newUser(user);
                onRouteChange('home');
            }
        })
       
    }

    return (
        <Grid centered columns={2} style={{marginTop:'10px'}} >
        <Grid.Column className="register-form">
        <h3 style={{textAlign:'center'}}>Register</h3>
        <Form >
            <Form.Field>
                <label>Name</label>
                <input 
                    type="text" 
                    name="name"
                    id="name"
                    onChange={onNameChange}/>
            </Form.Field>
            <Form.Field>
                <label>Email</label>
                <input 
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={onEmailChange}/>
            </Form.Field>
            <Form.Field>
                <label>New Password</label>
                <input 
                    type='password' 
                    name="password"
                    id="password"
                    onChange={onPasswordChange}/>
            </Form.Field>
           
            <Button color='purple' floated='right' type='submit' onClick = {onSubmitRegister}>Create account</Button>
            <Button basic color='purple' floated='left' onClick={()=> onRouteChange('signin')}> Cancel</Button>
         </Form>
        </Grid.Column>
        </Grid>
    )
}

export default Register;
