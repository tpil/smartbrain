import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
const Navigation = () => {
    return (
        <nav style={{'float':'right', 'margin':'10px'}}>
            <Button animated='vertical'  color='violet'>
                <Button.Content hidden>Sign Out</Button.Content>
                <Button.Content visible>
                    <Icon name='log out' />
                </Button.Content>
            </Button>
        </nav>
    )
}
export default Navigation;