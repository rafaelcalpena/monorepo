import React from 'react'
import ProgramStatusIndicator from './ProgramStatusIndicator'
import toggleProgram from './Terminals/toggleProgram'

export default ({processes, isProgramRunning,websocketWrapper, serverState}) => <div>

  <div>{processes.length} processes available:</div>

  {
    processes.map((serverProcess) => {

      const isRunning = isProgramRunning(serverState, serverProcess.name )

      return <div>
        <ProgramStatusIndicator
          onClick={toggleProgram.bind(this,
          {
            websocketWrapper,
            itemName: serverProcess.name,
            isRunning
          })}
          isRunning={isRunning}/>
        &nbsp;
        {serverProcess.name}
      </div>
    }

    )
  }

 </div>
