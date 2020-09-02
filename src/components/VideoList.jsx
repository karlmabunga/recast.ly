import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoListEntry from './VideoListEntry.js';

const VideoList = (props) => (
  <div className="video-list">
    {props.videos.map((video) => (
      <VideoListEntry video={video} key={video.id.videoId} onVideoClick={props.onVideoClick} />
    ))}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
