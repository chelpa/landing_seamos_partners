import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

import videocover from './../assets/img/landing/conference/video-cover.jpg';
import videopartners from './../assets/img/landing/conference/video_partners.mp4';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
      <section className="container text-center pb-5 mb-3 mb-md-4 mb-lg-5">
         <h2 className="h1 pt-1 mb-4">Video</h2>
         <div className="row justify-content-center mb-md-2 mb-lg-5">
           <div className="col-lg-6 col-md-8">
             <p className="fs-lg text-muted mb-lg-0">Partners Inmobiliarios</p>
           </div>
         </div>
         <div className="position-relative rounded-3 overflow-hidden mb-lg-3">

           <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center zindex-5">

         <LightGallery
            onHasVideo={true}
             onInit={onInit}
             speed={500}
             plugins={[lgThumbnail, lgZoom]}
         >


             <a href={videopartners} className="btn btn-video btn-icon btn-xl stretched-link bg-white" data-bs-toggle="video">
               <i className="bx bx-play" />
             </a>



         </LightGallery>
         </div>
         <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-35" />
         <img src={videocover} alt="Cover image" />
       </div>

       </section>



    );
}
export default Gallery;
