import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    //An alternative way of initializing the state.
    state = {lat:null,err:''};
    componentDidMount(){
        //Data loading stuff which needs to be rendered once should be written here
        window.navigator.geolocation.getCurrentPosition(
            (position)=>this.setState({lat:position.coords.latitude}),
            (err)=> this.setState({err:err.message})           
        )
    }
    render(){               
        if(this.state.lat && !this.state.err){
             return <div>Lattitude:{this.state.lat}</div>
         }
         if(!this.state.lat && this.state.err){
             return <div>Error:{this.state.err}</div>
         }
           return <div>Loading!...</div>        
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)