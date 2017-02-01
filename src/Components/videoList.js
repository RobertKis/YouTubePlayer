import React from 'react';
import VideoItem from './videoItem';

class List extends React.Component{
    constructor(props){
        super(props);
    }

    render (){
        const { videos } = this.props;
        const {onVideoSelect} = this.props;
        console.log("video list: " + {videos})
        return (
            <ul className="col-md-4 list-group"> 
                {videos && videos[0] && videos.map(elem => 
                        <VideoItem
                        title = {elem.snippet.title}
                        url = {elem.snippet.thumbnails.default.url}
                        video = {elem}
                        key={elem.etag} 
                        onVideoSelect = {onVideoSelect} />
                )
            }
            </ul>
        )
    };
}

 export default List;

// import React, { PropTypes as RPT } from 'react';
// import videoItem from './VideoItem';

// export default class List extends React.Component {

//   static propTypes = {
//     onVideoSelect: RPT.func,
//     videos: RPT.object
//   }

//   render() {
//     const { videos, onVideoSelect } = this.props;
//     console.log("videos in video list")
//     console.log(videos)
//     console.log(videos && videos[0] && videos[0].etag);

//     return (
//       <ul>
//         {videos && videos.map(elem =>
//           <VideoItem
//             title={elem.snippet.title}
//             url={elem.snippet.thumbnails.default.url}
//             video={elem}
//             key={elem.etag}
//             onVideoSelect={onVideoSelect}
//           />
//         )}
//       </ul>
//     );
//   }
// }
