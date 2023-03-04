import React from "react";

import videocover from './../assets/img/landing/conference/video-cover.jpg';
import videopartners from './../assets/img/landing/conference/video_partners.mp4';
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import './../assets/scss/theme.scss'
import './../assets/js/src/theme.js'

const VideoPartners =  () =>{
  return (
    <div className="gallery mb-4 pb-2">
      <a href="https://www.youtube.com/watch?v=LDb-G8y88Sc" className="gallery-item video-item is-hovered rounded-3" data-sub-html="<h6 class=&quot;fs-sm text-light&quot;>Video inside blog post</h6>">
        <img src="assets/img/blog/single/video-cover.jpg" alt="Video preview" />
      </a>
    </div>
  );
};


export default VideoPartners;
