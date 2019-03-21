import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var mapStateToProps = (state) => ({
  videos: state.videoList
});

var mapDispatchtoProps = (dispatch) => ({
  handleVideoListEntryTitleClick: (video) => {
    dispatch(changeVideo(video));
  }
});

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.
var VideoListContainer = connect(mapStateToProps, mapDispatchtoProps)(VideoList);

export default VideoListContainer;
