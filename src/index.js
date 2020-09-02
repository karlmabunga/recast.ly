// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import YoutubeSearch from '/src/lib/searchYouTube.js';
import YOUTUBE_API_KEY from 'src/config/youtube.js';


ReactDOM.render(<App youTubeSearch={YoutubeSearch} API_KEY={YOUTUBE_API_KEY}/>, document.getElementById('app'));
