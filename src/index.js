import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

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
    renderBody(){
        if(this.state.lat && !this.state.err){
            return <SeasonDisplay  lat={this.state.lat}/>
        }
        if(!this.state.lat && this.state.err){
            return <div>Error:{this.state.err}</div>
        }
          return <Spinner />    
    }
    render(){               
        return (
            <div className="border red">{this.renderBody()}</div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)