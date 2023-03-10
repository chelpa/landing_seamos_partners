/**
 * Open YouTube / Vimeo video in lightbox
 * @requires @requires https://github.com/sachinchoolur/lightgallery.js
*/
import lightGallery from 'lightgallery';
const videoButton = (() => {

  let button = document.querySelectorAll('[data-bs-toggle="video"]');
  if (button.length) {
    for (let i = 0; i < button.length; i++) {
      lightGallery(button[i], {
        selector: 'this',
        download: false,
        videojs: true,
        youtubePlayerParams: {
          modestbranding: 1,
          showinfo: 0,
          rel: 0
        },
        vimeoPlayerParams: {
          byline: 0,
          portrait: 0,
          color: '6366f1'
        }
      });
    }
  }

})();

export default videoButton;
