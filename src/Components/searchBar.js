import React from 'react';
import VideoList from './videoList';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCQOrCyZMNUT9PwPes5AJUyn1kopJm2xU8';

class SearchBar extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
            term: '',
            videos: [],
            selectedVideo: "temp"
        }
    }

    readInput(event){
        this.videoSearch(event.target.value);
    }
    
    videoSearch(searchText) {
        YTSearch({key: API_KEY, term: searchText}, (data) => {
            this.props.VideoList(data);
        });
    }

    render () {
        return(
            <div className="search-bar">
                <input onChange={event => this.videoSearch(event.target.value)}/>
            </div>
        )     
    };
}



export default SearchBar;