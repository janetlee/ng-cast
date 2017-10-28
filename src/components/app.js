angular.module('video-player')

.component('app', {
  // TODO
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

    this.searchResults = (query) => {
      // needs to do stuff
      const params = {
        query,
        maxResults: 5,
        key: window.YOUTUBE_API_KEY};

      youTube.search(params, this.result.bind(this));
    };

    this.searchResults('kittens');
  },

  templateUrl: 'src/templates/app.html'
});
