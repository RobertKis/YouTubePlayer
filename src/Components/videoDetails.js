import React from 'react';

export default class VideoDetails extends React.Component{    
    constructor(props)
    {
        console.log("This: asdasda");
        super(props);
    }

    render(){
        if(!this.props.videoItem){
		    return <div>Loading...</div>;
	    }
        
        const videoId = this.props.videoItem.id.videoId;
        const url = 'https://www.youtube.com/embed/' + videoId;
        const title = this.props.videoItem.title; 

        return(
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe src={url}></iframe>
                </div>
                <div className="details">
                    {title}
                </div>
            </div>
        );
    }
}