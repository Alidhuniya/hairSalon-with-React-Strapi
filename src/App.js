import React, {Component, Fragment} from "react";
import Apptwo from './Apptwo';

class App extends Component {

    render() {

        return (

            <Fragment>
                <div>
                    <h1>Heading Header</h1>
                </div>

                <div>
                    <p>Description: Hello World</p>
                </div>

                <Apptwo />
            </Fragment>

        );
    }
}

export default App;