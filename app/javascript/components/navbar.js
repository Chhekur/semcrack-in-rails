import React from 'react';

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            login : props.login
        }
    }

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Semcrack</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <NavButtonContainer login = {this.state.login} />
                </div>
            </nav>
        );
    }
}

var NavButtonContainer = function(props){
    // console.log(props.login);
    if(props.login){
        return (
            <div className="navbar-nav">
                <NavButton link = '/home'>Home</NavButton>
                <NavButton link = '/upload-paper'>Upload Paper</NavButton>
                <NavButton link = '/logout'>Logout</NavButton>
            </div>
        );
    }else{
        return (
            <div className="navbar-nav">
                <NavButton link = '/home'>Home</NavButton>
                <NavButton link = '/login'>Login</NavButton>
                <NavButton link = '/signup'>Signup</NavButton>
            </div>
        );
    }
}

var NavButton = function(props){
    // console.log(props);
    return(
        <a className="nav-item nav-link" href={props.link}>{props.children}</a>
    );
}

export default Navbar;