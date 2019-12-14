import React from 'react';

class ForgotPassword extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            error : ""
        }
    }

    send(e){
        e.preventDefault();
        $.ajax({
            headers: {
                'X-CSRF-Token': this.props.csrf
            },
            url: '/forgot-password',
            type : 'post',
            data : {
                email : $('#email').val()
            },
            success: function(res){
                if(res.error){
                    this.setState({
                        error : res.msg
                    });
                }else{
                    this.setState({
                        error: 'email has been sent'
                    });
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
                    <h3>Forgot Password</h3>
                    <form>
                        <TextField id = "email" label = "Email" type = "email" required></TextField>
                        <span id = "error" className = "error">{this.state.error}</span><br />
                        <button className = "btn btn-primary" onClick = {this.send.bind(this)}>Send</button>
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

export default ForgotPassword;