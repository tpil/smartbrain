import React from 'react'
import { Segment, Label, Icon } from 'semantic-ui-react';

const Rank = ({userName,userMail,userEntries}) => {
    return (
        <Segment style={{'maxWidth':'200px'}}>
       <p >
        <Label  as='a' color='blue' image style={{"cursor":"default"}}>
            <Icon  name='user' />
               {userName}
            </Label>
        </p>
        
        <p><b>Email: </b>{userMail}</p>
        <p><b>Rank: </b>#5</p>
        <p><b>Times searched: </b>{userEntries}</p>
       
        </Segment>
          
      
    )
}


export default Rank;
