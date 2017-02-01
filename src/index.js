import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import VideoList from './Components/videoList';
import SearchBar from './Components/searchBar';
import VideoDetails from './Components/videoDetails';

class App extends Component{
    constructor(props)
    {
        super(props);

        this.state = {
                videos: [],
                selectedVideo: null
        };

        console.log("selectedVideo " + this.state.selectedVideo);
    }

    SearchResult(items)
    {
        if(this.state.selectedVideo)
        {
            console.log("search rez: " + this.state.selectedVideo);
        }

        this.setState({
            videos: items,
            selectedVideo: items[0]                     
        });
    }

    render (){
        const searchVideo = _.debounce(this.SearchResult.bind(this), 300);

        return (
            <div>
                <SearchBar VideoList = {searchVideo}  />
                <VideoList 
                    videos = {this.state.videos}
                    onVideoSelect = {currentVideo => this.setState({selectedVideo: currentVideo}) }
                 />
                <VideoDetails videoItem = {this.state.selectedVideo} />
            </div>
        )
    };
}

ReactDOM.render(<App />, document.querySelector('.container'));