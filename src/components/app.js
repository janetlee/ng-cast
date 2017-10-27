angular.module('video-player')

.component('app', {
  // TODO
  controller: function() {
    this.videos = window.exampleVideoData;
    console.log('in App', this.videos);
  },
  templateUrl: '/src/templates/app.html'
});
