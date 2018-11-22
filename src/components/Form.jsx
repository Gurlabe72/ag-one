import React from "react";

class Form extends React.Component {
    state = {
        user: '',
        temperature: '', 
        waterTimeIn: '',
        waterTimeOut: '',
        additionalComments: ''
    }
    render(){
        return (
            <form>
                <input placeholder='user' value= {this.state.user} onChange={e => this.setState({ user : e.target.value})} />
                <input placeholder='temperature' value= {this.state.temperature}  onChange={e => this.setState({ temperature : e.target.value})} />
                <input placeholder='Time Starting Water' value= {this.state.waterTimeIn}  onChange={e => this.setState({ waterTimeIn : e.target.value})} />
                <input placeholder='Time I Turned Off Water' value= {this.state.waterTimeOut}  onChange={e => this.setState({ waterTimeOut : e.target.value})} />
                <input placeholder='Any Additional Comments' value= {this.state.additionalComments}  onChange={e => this.setState({ additionalComments : e.target.value})} />

            </form>
        )
        }
    }

export default Form