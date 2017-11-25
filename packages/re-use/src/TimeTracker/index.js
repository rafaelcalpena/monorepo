import React from 'react'

class TimeTracker extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      currentTime: Date.now(),
    };
  }

  componentDidMount(){
    const that = this;
    this.interval = setInterval(() => {
      that.setState({
        currentTime: Date.now()
      })
    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }  	

  render(){
   const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       currentTime: this.state.currentTime
     })
    );

    return <div>{childrenWithProps}</div>
  }
}

export default TimeTracker