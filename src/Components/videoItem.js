import React from 'react';

class VideoItem extends React.Component{
    constructor(props){
       
        super(props);
    }

		handleClick(value) {
            console.log("value: " + value);
    	const { onVideoSelect, video } = this.props;
      
      onVideoSelect(video);
    }

    render (){
        console.log("VidItem: " + this.props.video.snippet.title);
    const { title, url } = this.props;
        return(
            <li className="list-group-item">
                <div className="media-left">
                    <span> {title} </span>
                    <img className="media-object" src={url} onClick={() => this.props.onVideoSelect(this.props.video)}/>
                </div>
            </li>
        )
    }
}

export default VideoItem;

// import React, { PropTypes as RPT } from 'react';

// export default class VideoItem extends React.Component {

//   static propTypes = {
//     onVideoSelect: RPT.func,
//     title: RPT.string,
//     url: RPT.string,
//     video: RPT.object
//   }

//   handleClick() {
//     const { onVideoSelect, video } = this.props;

//     onVideoSelect(video);
//   }

//   render() {
//     const { title, url } = this.props;

//     return (
//       <li>
//         <span> {title} </span>
//         <img src={url} onClick={this.handleClick.bind(this)} />
//       </li>
//     );
//   }
// }
