import React from 'react';

class SearchResult extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div class="card w-50">
                <div class="card-body">
                    <a href = {"/preview/" + this.props.id} ><h5 class="card-title">{this.props.name}</h5></a>
                    <p class="card-text">{this.props.year}</p>
                    <p class="card-text">{this.props.description}</p>
                    <footer class="blockquote-footer">{this.props.user}</footer>
                    {/* <a href="#" class="btn btn-primary">Preview</a> */}
                </div>
            </div>
        );
    }
}

export default SearchResult;