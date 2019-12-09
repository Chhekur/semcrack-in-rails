import React from 'react';

class CommentBox extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Comment</label>
                    <textarea type="text" class="form-control" id="comment" required />
                </div>
                <button className = "btn btn-primary">Post</button>
            </form>
        );
    }
}

export default CommentBox;