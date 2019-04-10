const submitButton = document.querySelector('.contact__form-button');

submitButton.addEventListener("click", reloadPage);

function reloadPage(){
    window.location.reload();
}
