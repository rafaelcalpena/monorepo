import React from 'react'

class IsRunning extends React.Component {
  render () {
    const {isRunning, onClick} = this.props
    return     <span onClick={onClick} style={{
          display:'inline-block',
          width:'15px',
          height: '15px',
          borderRadius: '50%',
          cursor: 'pointer',
          background:
            (isRunning)
              ?
              '#4caf50'
              :
              '#f44336'
        }}>
        </span>
  }

  componentWillUpdate() {
    //console.log('will update')
  }

}

export default IsRunning
