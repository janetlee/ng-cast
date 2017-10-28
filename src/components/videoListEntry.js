angular.module('video-player')
.component('videoListEntry', {
  // TODO
  bindings: {
    video: '<',
    onClick: '<',
    index: '<'
  },
  templateUrl: 'src/templates/videoListEntry.html'
});
