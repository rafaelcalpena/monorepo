import React from 'react'

import {Button, Accordion} from '@rafaelcalpena/re-use'
import Terminals from './Terminals'

export default ({startTask, mutate, websocketWrapper, match:{params}, config: {categoriesElements, processes, tasks} }) => {

  const categoryItem = categoriesElements.find(categoryItem => categoryItem.id === params.category)

  return <div style={{clear: 'both'}} key={categoryItem.title}>

      <h4> {categoryItem.title} </h4>

       {categoryItem.buttons.map(button =>
         <Button text={button.text}
           backgroundColor={button.backgroundColor}
           onClick={startTask.bind(this, button.task, mutate)}
           key={button.text}
         />
       )}
       <Terminals for={categoryItem.terminals} websocket={websocketWrapper} />
   </div>


}
