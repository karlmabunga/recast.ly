import VideoList from './VideoList.js';
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
// import fakeVideoData from '/spec/data/fakeVideoData.js'

// var App = () => {

//   return (<div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em><Search /></em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em><VideoPlayer video={exampleVideoData[0]} /></em></h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em><VideoList videos={exampleVideoData} /></em></h5></div>
//       </div>
//     </div>
//   </div>);
// };

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }

  // component mounting right away
  componentDidMount() {
    this.getYoutubeVideos('Hack Reactor');
  }

  // onclick function
  onVideoClick(video) {
    this.setState({
      currentVideo: video
    });
  }
  // create search function
  getYoutubeVideos(query) {
    let options = {
      key: this.props.API_KEY,
      query: query,
    };
    this.props.youTubeSearch(options, (videos) => {
      this.setState({
        currentVideo: videos[0],
        videos: videos,
      });
    });
  }

  render() {
    var { API_KEY } = this.props;
    return (<div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em><Search getYoutubeVideos={this.getYoutubeVideos.bind(this)} /></em> view goes here</h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><h5><em><VideoPlayer video={this.state.currentVideo} /></em></h5></div>
        </div>
        <div className="col-md-5">
          <div><h5><em>
            <VideoList
              videos={this.state.videos}
              onVideoClick={this.onVideoClick.bind(this)}
            /></em></h5></div>
        </div>
      </div>
    </div >);
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
