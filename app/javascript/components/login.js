import React from 'react';

class Login extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.csrf);
        this.state = {
            error : ""
        }
    }

    login(e){
        e.preventDefault();
        let email = $('#email').val();
        let password = $('#password').val();
        console.log(email, password);
        $.ajax({
            headers:{
                'X-CSRF-Token': this.props.csrf
            },
            url: '/user-login',
            type: 'post',
            data: {
                email: email, password: password
            },
            success: function(res){
                // res = JSON.parse(res);
                if(res.error == false){
                    location.href = '/';
                }else{
                    this.setState({
                        error : res.msg
                    });
                    console.log(res.msg);
                    
                }
            }.bind(this),
            error: function(error){
                console.error(error);
            }
        });
    }

    render(){
        return(
            <section>
                <div className = "container">
                    <h3>Login</h3>
                    <form>
                        <TextField id = "email" label = "Email" type = "email" required></TextField>
                        <TextField id = "password" label = "password" type = "password" required></TextField>
                        <span id = "error" className = "error">{this.state.error}</span><br />
                        <button className = "btn btn-primary" onClick = {this.login.bind(this)}>Login</button>
                    </form>
                    <p>Don't have an account ? <a href = '/signup'>signup</a></p>
                </div>
            </section>
        );
    }
}

var TextField = function(props){
    return(
        <div className="form-group">
            <label htmlFor= {props.id}>{props.label}</label>
            <input type = {props.type} className="form-control" id = {props.id} required />
        </div>
    );
}

export default Login;