import React from 'react';

class CommentBox extends React.Component{
    constructor(props){
        super(props);
    }

    post(e){
        console.log('commenting....')
        e.preventDefault();
        $.ajax({
            headers:{
                'X-CSRF-Token': this.props.csrf
            },
            url : '/new-comment',
            data : {
                comment : $('#comment').val(),
                paper_id : this.props.paper_id
            },
            success : function(res){
                if(res.error ==false){
                    location.reload();
                }
                console.log(res);
            },
            error: function(error){
                console.error(error);
            }
        })
    }

    render(){
        return(
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Comment</label>
                    <textarea type="text" className="form-control" id="comment" required />
                </div>
                <button className = "btn btn-primary" onClick = {this.post.bind(this)}>Post</button>
            </form>
        );
    }
}

export default CommentBox;