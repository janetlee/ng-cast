angular.module('video-player')
  
.component('videoPlayer', {
  // TODO

  bindings: {
    video: '<',
    onClickDescription: '<'
  },

  templateUrl: 'src/templates/videoPlayer.html'
});
