angular.module('video-player')
.component('videoList', {
  // TODO
  bindings: {
    videos: '<',
    selectVideo: '<'
  },
  controller: function() {
    this.onClick = (index) => {
      this.selectVideo(this.videos[index]);
    };
  },
  templateUrl: 'src/templates/videoList.html'
});
