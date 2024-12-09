const modal = document.querySelector('#modal');
const overlay = document.querySelector('#overlay');
// const openModal = document.querySelector(#open-modal);
// const closeModal = document.querySelector(#close-modal);

document.addEventListener("DOMContentLoaded", function() {
    modal.classList.add("open");
    overlay.classList.add("open");    
});

document.addEventListener("click", function() {
        modal.classList.remove("open");
        overlay.classList.remove("open");
})