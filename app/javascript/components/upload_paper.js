import React from 'react';

class UploadPaper extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error : ""
        }
    }

    upload(e){
        console.log('uploading....');
        console.log(new FormData($('#form')[0]));
        e.preventDefault();
        $.ajax({
            headers:{
                'X-CSRF-Token': this.props.csrf
            },
            url : '/upload-paper',
            type : 'post',
            data : new FormData(document.getElementById('form')),
            contentType: false,
            processData: false,
            success: function(res){
                console.log(res);
            },
            error: function(error){
                console.error(error);
            }
        })
    }

    render(){
        return(
            <section>
                <div className = "container">
                    <h3>Upload Question Paper</h3>
                    <form id = "form">
                        <TextField id = "name" label = "Name" type = "text" />
                        <TextField id = "year" label = "Year" type = "number"></TextField>
                        <Description id = "description" label = "Description" type = "text"></Description>
                        <TextField id = "question_paper" label = "Question Paper" type = "file"></TextField>
                        <span id = "error" className = "error">{this.state.error}</span><br />
                        <button className = "btn btn-primary" onClick = {this.upload.bind(this)}>Upload</button>
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
            <input type = {props.type} className="form-control" id = {props.id} name = {props.id} required />
        </div>
    );
}

var Description = function(props){
    return(
        <div className="form-group">
            <label htmlFor= {props.id}>{props.label}</label>
            <textarea type = {props.type} className="form-control" id = {props.id} name = {props.id} required />
        </div>
    );
}

export default UploadPaper;