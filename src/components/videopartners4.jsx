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

const VideoPartners4 =  () =>{
  return (

<div class="lg-toolbar lg-group">
<button type="button" aria-label="Close gallery" class="lg-close lg-icon"></button>
<div id="lg-counter" role="status" aria-live="polite"><span id="lg-counter-current">1</span> / <span id="lg-counter-all">1</span></div></div>


  );
};


export default VideoPartners4;
