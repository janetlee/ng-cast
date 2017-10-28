angular.module('video-player')

.component('app', {

  controller: function(youTube) {
    this.videos = window.exampleVideoData;

    this.currentVideo = window.exampleVideoData[0];

    this.onClick = (index) => {
      this.selectVideo(this.videos[index]);
    };

    this.selectVideo = (video) => {
      this.currentVideo = video;
    };

    this.result = (videos) => {
      this.videos = videos;
      this.currentVideo = this.videos[0];
    };
  },

  templateUrl: 'src/templates/app.html'
});
