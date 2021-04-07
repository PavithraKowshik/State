import React from 'react';
import ReactDOM from 'react-dom';

class Username extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            Fullname:"",
            newname:"new"
        }
    }
    changeName =(e)=>
    {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submit=()=>{
        this.setState({newname:this.state.Fullname})
    }
    
    render(){
        //const {Fullname}=this.state
        return(
            <div>
                <h2>welcome {this.state.newname} </h2>
                    <p><input type='text' placeholder='Name' name='Fullname' onChange={this.changeName}/></p>
                    <p><button onClick={this.submit}>Submit</button></p>
            </div>
        )
    }
}
ReactDOM.render(<Username/>, document.getElementById('root'));