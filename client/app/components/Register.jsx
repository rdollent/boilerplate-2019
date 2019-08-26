import React, { Component } from 'react';
// need connect function to be able to connect to store from Provider
import { connect } from 'react-redux';


import * as actions from '../actions/actions';
import { storeCredentials } from '../actions/userActions';

class Register extends Component {
    constructor(props) {
        super(props);
        
        this.submitInput = this.submitInput.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        this.props.submitNewInput(event.target.value);
    }

    submitInput(e) {
        e.preventDefault();
        const formData = new FormData(document.getElementById('register'));
        let data = {};
        for(let pair of formData.entries()) {
            data[pair[0]] = pair[1];
        }

        this.props.submitCredentials(data);
        
        console.log(this.props);
        let stateData = {username, password, email} = this.props;


        // fetch
        fetch('./api/user/register', {
            method: 'POST',
            body: stateData,
            headers: { 'Content-type': 'application/json' }
            })
            .then(res => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch(err => {
                throw new Error(err);
            });

    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitInput} id='register'>
                    <input type="text" name="username" id="username" required/>
                    <input type="email" name="email" id="email" required/>
                    <input type="password" name="password" id="password" required/>

                    <button>Submit</button>
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.credentials;
    
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        submitNewInput: (input) => {
            dispatch(actions.addInput(input))
        },
        submitCredentials: (data) => {
            dispatch(storeCredentials(data))
        }
    }
};
  

export default connect(mapStateToProps, mapDispatchToProps)(Register);
