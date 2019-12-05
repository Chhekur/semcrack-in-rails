import React from 'react';

class Singup extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.csrf);
        this.state = {
            error: ""
        }
    }

    signup(e){
        e.preventDefault();
        let name = $('#name').val();
        let email = $('#email').val();
        let password = $('#password').val();
        console.log(name, email, password);
        $.ajax({
            headers:{
                'X-CSRF-Token': this.props.csrf
            },
            url: '/register',
            type: 'post',
            data: {
                name: name, email: email, password: password
            },
            success: function(res){
                if(res.error == false){
                    location.href = '/login';
                }else{

                    // this.setState({
                    //     error: res.
                    // })
                    
                    this.setState({
                        error: Object.keys(res.msg).map(function(error, index){
                            return <p>{`${error} : ${res.msg[error][0]}`}</p>
                        })
                    })
                    
                    
                    // let s = "";
                    // for (let error in res.msg){
                    //     s += '${error} : ${res.msg[error][0]}' <br />;
                    // }
                    // this.setState({
                    //     error : s
                    // });
                    console.error(res);
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
                    <h3>Singup</h3>
                    <form>
                        <TextField id = "name" label = "Name" type = "text" />
                        <TextField id = "email" label = "Email" type = "email"></TextField>
                        <TextField id = "password" label = "password" type = "password"></TextField>
                        <span id = "error" className = "error">{this.state.error}</span><br />
                        <button className = "btn btn-primary" onClick = {this.signup.bind(this)}>Sing up</button>
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

export default Singup;