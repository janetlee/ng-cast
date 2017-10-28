angular.module('video-player')
.component('videoList', {
  // TODO
  bindings: {
    videos: '<',
    onClick: '<'
  },
  // controller: function() {

  //   // this.select = (index) => {
  //   //   this.selectVideo(this.videos[index]);
  //   // };

  //   // this.onClick = (index) => {
  //   //   // this.selectVideo(this.videos[index]);
  //   //   this.select(index);
  //   // };
  // },
  templateUrl: 'src/templates/videoList.html'
});
