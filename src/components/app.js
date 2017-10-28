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

    this.searchResults = (query) => {
      const params = {
        query,
        maxResults: 5,
        key: window.YOUTUBE_API_KEY};

      youTube.search(params, this.result.bind(this));
    };

    this.videoDetails = () => {
      youTube.getDetails(window.YOUTUBE_API_KEY, this.currentVideo.id.videoId, this.getLongDescription.bind(this));
    };

    this.onClickDescription = () => {
      console.log('clicked');
      this.videoDetails();
    };
    
    this.getLongDescription = (video) => {
      console.log(video);
      this.currentVideo.snippet.description = video.snippet.description;
    };

    this.searchResults('kittens');
  },

  templateUrl: 'src/templates/app.html'
});
