import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

import _ from 'lodash';
var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  return _.debounce((dispatch) => {
    searchYouTube({YOUTUBE_API_KEY, q}, (err, videos) => {
      if (err) {
        console.log(err)
      } else {
        dispatch(changeVideo(videos[0]), changeVideoList(videos))
      }
    });
  }, 200);
};

export default handleVideoSearch;
