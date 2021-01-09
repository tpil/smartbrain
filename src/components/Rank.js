import React from 'react'
import { Segment, Label, Icon } from 'semantic-ui-react';

const Rank = () => {
    return (
        <Segment style={{'maxWidth':'200px'}}>
       <p style={{textAlign:'right'}}>
        <Label  as='a' color='blue' image>
            <Icon  name='user' />
                Veronika
            </Label>
        </p>
        
        <p>Email:</p>
        <p>Rank:#5</p>
        <p>Times searched:</p>
       
        </Segment>
          
      
    )
}


export default Rank;
