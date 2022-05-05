
function showModal(modalClass) {
    new bootstrap.Modal(document.getElementById(modalClass)).show();
}
function hideModal(modalClass) {
    bootstrap.Modal.getInstance(document.querySelector('#'+ modalClass)).hide();
}