import React from 'react';
import { Segment, Label, List } from 'semantic-ui-react';

const FaceDescription = ({imageUrl,imageDescription}) =>{

    const listItems = imageDescription.map((tag) =>
    <List.Item key={tag.id.toString()}>
      <Label  >
      {tag.name}
      </Label>
    </List.Item>
  );
 
    if(imageUrl){
        return (
           <section style={{"margin":"10px"}}>
              <Segment>
              <h2 style={{"textAlign":"center"}}>Image Description Tags</h2>
                  <List horizontal  style={{"maxWidth":"350px"}}>
                    {listItems}
                  </List>
                  <p><br></br></p>
                  <p><i>*Smart Brain can detect a face and predict related tags to the image</i></p>
              </Segment>
            </section>
        )
    }else{
      return (
        <section style={{"margin":"10px"}}>
         <Segment>
              <p>Enter an image URL and click on the Analyze button to start..</p>
             
         </Segment>
         </section>
     )

    }
    
}

export default FaceDescription;
