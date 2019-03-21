import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';



//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

var mapStateToProps = (state) => ({
    video: state.currentVideo
  });


var VideoPlayerContainer = connect(mapStateToProps, null)(VideoPlayer)

export default VideoPlayerContainer;
