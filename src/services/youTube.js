angular.module('video-player')

.service('youTube', function($http) {
  // TODO
  this.search = (callback, {query, maxResults = 5, key = YOUTUBE_API_KEY}) => {
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
      console.log('Success', response);
      callback(response.data.items);
    }, (response) => {
      console.log('Failure');
    });
    
  };

});