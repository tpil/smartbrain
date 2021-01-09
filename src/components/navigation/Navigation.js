import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
const Navigation = () => {
    return (
    
            <Button animated='vertical'  color='violet' floated='right'>
                <Button.Content hidden>Sign Out</Button.Content>
                <Button.Content visible>
                    <Icon name='log out' />
                </Button.Content>
            </Button>
       
    )
}
export default Navigation;
