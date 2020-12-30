import React from 'react';
import { Button, Input } from 'semantic-ui-react';
 const ImageLinkForm = ({onInputChange,onSubmitImage}) => {
    return (
        <div>
            
            <Input type='text' placeholder='Search...' action>
                <input onChange={onInputChange} />
                <Button type='submit' color="purple" onClick={onSubmitImage}>Detect</Button>
            </Input>
            
    </div>
    )
}
export default ImageLinkForm;