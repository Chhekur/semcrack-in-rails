import React from 'react';

class Hello extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log('Hello World');
        return (
            <section>
                <center>
                    <h1>Hello from semcrack</h1>
                </center>
            </section>
        );
    }
}

export default Hello;