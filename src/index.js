import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {lat:null,err:''};

        window.navigator.geolocation.getCurrentPosition(
            (position)=>{
                this.setState({lat:position.coords.latitude})
            },
            (err)=>{
                this.setState({err:err.message})
            }
        )
    }

    render(){
        
        return (
            <div>
                Lattitude: {this.state.lat}
                <br></br>
                Error: {this.state.err}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)