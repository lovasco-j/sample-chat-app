import React, {Component} from 'react';
import {sendMessage, receiveMessage} from "./api/sendMessage";

class App extends Component {

    state = {
        messages: [],
        msgToBeSent: ""
    };

    onSubmit = (e) => {
        e.preventDefault();
        const {msgToBeSent} = this.state;

        sendMessage(msgToBeSent, () => {
            this.setState({
                msgToBeSent: ""
            });
        });

    };

    onChange = (e) => {
        this.setState({msgToBeSent: e.target.value});
    };

    componentDidMount() {
        receiveMessage((msg) => {
            this.setState(({messages: prevMessages}) => ({
                messages: [...prevMessages, msg]
            }));
        });
    }

    render() {
        const {messages} = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    Messages
                </header>
                {
                    messages.map((msg, index) => <p key={index}>{msg}</p>)
                }
                <form onSubmit={this.onSubmit}>
                    <input type="text" onChange={this.onChange} value={this.state.msgToBeSent}/>
                    <input type="submit" value="SEND"/>
                </form>
            </div>
        );
    }
}

export default App;
