angular.module('video-player')
.component('videoListEntry', {

  bindings: {
    video: '<',
    onClick: '<',
    index: '<'
  },
  templateUrl: 'src/templates/videoListEntry.html'
});
