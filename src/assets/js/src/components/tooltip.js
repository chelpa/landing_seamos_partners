/**
 * Tooltip
 * @requires https://getbootstrap.com
 * @requires https://popper.js.org/
*/
var bootstrap = require('bootstrap');
const tooltip = (() => {

  let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));

  let tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl, { trigger: 'hover' }));

})();

export default tooltip;
