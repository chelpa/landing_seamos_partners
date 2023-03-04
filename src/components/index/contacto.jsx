import React from "react";


const FiftyPercent =  () =>{
  return (
     <section className="position-relative py-5">
     <div>
       {/* Begin Mailchimp Signup Form */}
       <link href="//cdn-images.mailchimp.com/embedcode/classic-071822.css" rel="stylesheet" type="text/css" />
       <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif;  width:600px;}\n\t/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.\n\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\n" }} />
       <div id="mc_embed_signup">
         <form action="https://gmail.us14.list-manage.com/subscribe/post?u=502259b807deffd5d626ff042&id=cc4a6e639b&f_id=00e68ce0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
           <div id="mc_embed_signup_scroll">
             <h2>Quiero ser partner inmobiliario</h2>
             <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
             <div className="mc-field-group">
               <label htmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span>
               </label>
               <input type="email" defaultValue name="EMAIL" className="required email" id="mce-EMAIL" required />
               <span id="mce-EMAIL-HELPERTEXT" className="helper_text" />
             </div>
             <div id="mce-responses" className="clear foot">
               <div className="response" id="mce-error-response" style={{display: 'none'}} />
               <div className="response" id="mce-success-response" style={{display: 'none'}} />
             </div>    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
             <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_502259b807deffd5d626ff042_cc4a6e639b" tabIndex={-1} defaultValue /></div>
             <div className="optionalParent">
               <div className="clear foot">
                 <input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                 <p className="brandingLogo"><a href="http://eepurl.com/ijg4Of" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" /></a></p>
               </div>
             </div>
           </div>
         </form>
       </div>
       {/*End mc_embed_signup*/}
     </div>
   );

       <div className="container position-relative zindex-5 py-2 py-md-4 py-lg-5">
         <div className="row justify-content-center text-center pt-xl-2 pb-4 mb-1 mb-lg-3">
           <div className="col-xl-6 col-lg-7 col-md-8 col-sm-11">
             <h2 className="mb-4">Suscríbete a nuestro programa de referidos</h2>
             <p className="text-muted mb-0">No dejes pasar la oportunidad de generar ingresos extra. </p> <p>Solo debes llenar el siguiente formulario y nosotros te contactaremos, ¡si no tienes un dato no importa!</p> <p>El primer paso es establecer contacto</p>
           </div>
         </div>
         <div className="row justify-content-center">
           <div className="col-lg-8 col-md-10">
             <form className="row needs-validation" noValidate>

               <div className="col-sm-6 mb-4">
                 <label htmlFor="email" className="form-label">email</label>
                 <input type="email" id="email" className="form-control" required />
                 <div className="invalid-feedback">Porfavor ingresa un correo electrónico válido</div>
               </div>
               <div className="col-sm-6 mb-4">
                 <label htmlFor="phone" className="form-label">Whatsapp</label>


                 <input type="text" id="phone" className="form-control" data-format="custom" data-delimiter="-" data-blocks="2 3 3" data-numeral={11} placeholder="+569" ></input>
               </div>
               <div className="col-12 mb-4">
                 <label htmlFor="message" className="form-label">Dato</label>
                 <textarea id="message" className="form-control" rows={4} required defaultValue={""} />
                 <div className="invalid-feedback">Porfavor ingresa tu mensaje</div>
               </div>
               <div className="col-12 text-center pt-2 pt-md-3 pt-lg-4">
                 <button type="submit" className="btn btn-primary shadow-primary btn-lg">Enviar</button>
               </div>
             </form>
           </div>
         </div>
       </div>


       {/* BG shape */}
       <div className="position-absolute end-0 bottom-0 text-primary">
         <svg width={469} height={343} viewBox="0 0 469 343" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.08" fillRule="evenodd" clipRule="evenodd" d="M273.631 680.872C442.436 768.853 639.315 708.216 717.593 558.212C795.871 408.208 732.941 212.157 564.137 124.176C395.333 36.195 198.453 96.8326 120.175 246.836C41.8972 396.84 104.827 592.891 273.631 680.872ZM236.335 752.344C440.804 858.914 688.289 788.686 789.109 595.486C889.928 402.286 805.903 159.274 601.433 52.7043C396.964 -53.8654 149.479 16.3623 48.6595 209.562C-52.1598 402.762 31.8652 645.774 236.335 752.344Z" fill="currentColor" /><path opacity="0.08" fillRule="evenodd" clipRule="evenodd" d="M298.401 633.404C434.98 704.59 598.31 656.971 664.332 530.451C730.355 403.932 675.946 242.827 539.367 171.642C402.787 100.457 239.458 148.076 173.435 274.595C107.413 401.114 161.822 562.219 298.401 633.404ZM288.455 652.464C434.545 728.606 611.369 678.429 683.403 540.391C755.437 402.353 695.402 228.725 549.312 152.583C403.222 76.4404 226.398 126.617 154.365 264.655C82.331 402.693 142.365 576.321 288.455 652.464Z" fill="currentColor" /></svg>
       </div>
     </section>
   );

 };
 export default FiftyPercent;
