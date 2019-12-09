import React from 'react';
import SearchResult from './search_result';
import CommentBox from './comment_box';

class Preview extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <section>
                <div className = "container">
                    <div className = "row">
                        <GenrateLeftSide {...this.props} ></GenrateLeftSide>
                        <div className = "col-4">
                            {this.props.related.map(function(data, index){
                                return <SearchResult name = {data.name} year = {data.year} description = {data.description} user = {data.user} id = {data.id}></SearchResult>
                            })}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

let GenrateLeftSide = function(props){
    if(props.login){
        return (
            <div className = "col-8">
                <LeftCard name = {props.name} user = {props.user} year = {props.year} description = {props.description} ></LeftCard>
                <br />
                <CommentBox></CommentBox>
            </div>
        );
    }else{
        return(
            <div className = "col-8">
                <LeftCard name = {props.name} user = {props.user} year = {props.year} description = {props.description} ></LeftCard>
            </div>
        );
    }

}

let LeftCard = function(props){
    return (
        <div className = "card text-center">
            <div className = "card-header">
                {props.name}
            </div>
            <div className = "card-body">
                <h5 className = "card-title">{props.year}</h5>
                <p className = "card-text">{props.description}</p>
                <a href="#" className = "btn btn-primary">Download</a>
            </div>
            <div className = "card-footer text-muted blockquote-footer">
                {props.user}
            </div>
        </div>
    );
}

export default Preview;