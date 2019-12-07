import React from 'react';

class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log('Hello World');
        return (
            <section>
                <center>
                    <div className = "container">
                        <h1>Semcrack</h1>
                        <form action = "/search">
                        <div className="form-group">
                            <input type = 'text' className="form-control" name = 'query' placeholder = "Search" required />
                        </div>
                        <button className = "btn btn-primary">Search</button>
                        </form>
                    </div>
                </center>
            </section>
        );
    }
}

export default Home;