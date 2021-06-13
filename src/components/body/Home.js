import React, {Component} from 'react';


class Home extends Component {
    render() {
        document.title = "Home"
        return( 
            <div className="container" style={{paddingTop: "40px" }}>
                <h1>Welcome to My Restaurant</h1>
            </div>
        )
    }
}

export default Home;