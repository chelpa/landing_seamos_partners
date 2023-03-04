/**
 * Popover
 * @requires https://getbootstrap.com
 * @requires https://popper.js.org/
*/
var bootstrap = require('bootstrap');
const popover = (() => {

  let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));

  let popoverList = popoverTriggerList.map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl));

})();

export default popover;
