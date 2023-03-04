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


    <section className="container text-center pb-5 mb-3 mb-md-4 mb-lg-5">
       <h2 className="h1 pt-1 mb-4">See What Makes Us Dif</h2>
       <div className="row justify-content-center mb-md-2 mb-lg-5">
         <div className="col-lg-6 col-md-8">
           <p className="fs-lg text-muted mb-lg-0">Your best care begins here. Hurry up to get top health care quality from leading doctors of the world.</p>
         </div>
       </div>
       <div className="position-relative rounded-3 overflow-hidden mb-lg-3">

         <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center zindex-5">


           <a href={videopartners} className="btn btn-video btn-icon btn-xl stretched-link bg-white" data-bs-toggle="video">
             <i className="bx bx-play" />
           </a>
         </div>
         <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-35" />
         <img src={videocover} alt="Cover image" />
       </div>

     </section>
  );
};


export default VideoPartners;
