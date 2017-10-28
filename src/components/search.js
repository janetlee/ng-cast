angular.module('video-player')

.component('search', {
  bindings: {
    result: '<'
  },

  controller: function(youTube) {
    this.searchData = '';
    this.search = (query) => {
      const params = {
        query,
        maxResults: 5,
        key: window.YOUTUBE_API_KEY};

      youTube.search(params, this.result.bind(this));
    };
  },

  templateUrl: 'src/templates/search.html'
});
