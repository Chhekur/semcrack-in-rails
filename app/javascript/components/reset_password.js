import React from 'react';

class ResetPassword extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            error : ""
        }
    }

    change(e){
        e.preventDefault();
        $.ajax({
            headers: {
                'X-CSRF-Token': this.props.csrf
            },
            url: '/reset-password',
            type : 'post',
            data : {
                password : $('#password').val()
            },
            success: function(res){
                if(res.error){
                    this.setState({
                        error : res.msg
                    });
                }else{
                    this.setState({
                        error: 'password has been changed'
                    });
                    location.href = '/login'
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
                    <h3>Reset Password</h3>
                    <form>
                        <TextField id = "password" label = "New Password" type = "password" required></TextField>
                        <span id = "error" className = "error">{this.state.error}</span><br />
                        <button className = "btn btn-primary" onClick = {this.change.bind(this)}>Change</button>
                    </form>
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

export default ResetPassword;