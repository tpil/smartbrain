import React from 'react';
import { Input } from 'semantic-ui-react';
 const ImageLinkForm = () => {
    return (
        <div  >
            
            <Input 
                action={{
                color: 'purple',
                labelPosition: 'right',
                icon: 'search',
                content: 'Detect',
                }}
                actionPosition='right'
                placeholder='Upload picture...'
               
            />
            
        </div>
    )
}
export default ImageLinkForm;