angular.module('video-player')

.component('app', {
  // TODO
  controller: function(youTube) {
    this.videos = window.exampleVideoData;

    this.currentVideo = window.exampleVideoData[0];

    this.selectVideo = (video) => {
      this.currentVideo = video;
      console.log(this.currentVideo);
    };


    this.handleSearchData = (videos) => {
      console.log(videos);
      this.videos = videos;
      this.currentVideo = this.videos[0];
      console.log(this.currentVideo);
    };

    this.searchResults = (query) => {
      // needs to do stuff
      const params = {
        query,
        maxResults: 5,
        key: window.YOUTUBE_API_KEY};

      youTube.search(this.handleSearchData.bind(this), params);
    };

    this.searchResults('kittens');
  },

  templateUrl: 'src/templates/app.html'
});
