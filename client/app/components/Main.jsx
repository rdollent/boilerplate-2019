import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Search from 'Search';
// const Results = require('Results');
import Register from './Register';


class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

                <div id='main'>
                    <Register store={this.props.store}/>
                </div>
        );
    }
}

// module.exports = Main;

// cannot mix import with module.exports
export default Main;
