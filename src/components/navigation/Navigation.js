import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
const Navigation = ({onRouteChange}) => {
    return (
    
            <Button animated='vertical'  color='violet' floated='right' onClick={() => onRouteChange('signin')}>
              <Button.Content hidden>Sign Out</Button.Content>
                <Button.Content visible>
                    <Icon name='log out' />
                </Button.Content>
                
            </Button>
       
    )
}
export default Navigation;
