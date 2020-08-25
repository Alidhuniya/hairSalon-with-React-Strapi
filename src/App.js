import React, {Component, Fragment} from "react";
import Apptwo from './Apptwo';
import "./App.scss";

class App extends Component {

    render() {

        return (

            <Fragment>
            <header className = "header">
                <div>
                    <h1>Heading Header</h1>
                </div>

                <div>
                    <p>Description: Hello World from webpack and babel</p>
                </div>

                <Apptwo />

                </header>

            </Fragment>

        );
    }
}

export default App;