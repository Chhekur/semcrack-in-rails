import React from 'react';

class Comment extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="card">
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>{this.props.comment}</p>
                        <footer className="blockquote-footer">{this.props.user}</footer>
                    </blockquote>
                </div>
            </div>
        );
    }
}

export default Comment;