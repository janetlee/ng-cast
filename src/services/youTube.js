angular.module('video-player')

.service('youTube', function($http) {

  this.search = ({query, maxResults = 5, key = YOUTUBE_API_KEY}, callback) => {
    const params = {
      q: query,
      maxResults,
      key,
      type: 'video',
      part: 'snippet',
      videoEmbeddable: 'true'
    };

    // make the search by hitting the endpoint
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search/',
      params: params
    }).then((response) => {
      callback(response.data.items);
    }, (response) => {
      console.log('Failure');
    });
  };

});