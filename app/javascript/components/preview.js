import React from 'react';
import SearchResult from './search_result';

class Preview extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <section>
                <div className = "container">
                    <div className = "row">
                        <div className = "col-8">
                            <LeftCard name = {this.props.name} user = {this.props.user} year = {this.props.year} description = {this.props.description} ></LeftCard>
                        </div>
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