// * NAVBAR MENU ICON RESPONSİVE START
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-x");
    navbar.classList.toggle("active");
}
// * NAVBAR MENU ICON RESPONSİVE END



// * CONTACT MODAL ON/OFF START
const submitModal = document.querySelector("#submit-btn");
const closeModalBtn = document.querySelector("#confirmSubmit");
const closeModalIcon = document.querySelector("#close-button");
const content = document.getElementById('webContents');
const numbersOnly = document.getElementById('numbersOnly');

submitModal.addEventListener('click', function(e) {
  e.preventDefault(); // varsayılan davranışı durdur
  modal.style.display = 'flex';
  content.style.filter = 'blur(5px)';
  content.style.pointerEvents = 'none'; 
});

closeModalBtn.addEventListener('click', () => {
    document.querySelector('.modal').style.display = "none";
    content.style.filter = 'none';
    content.style.pointerEvents = 'auto';
    numbersOnly.value= '';
    
});

closeModalIcon.addEventListener('click', () => {
    document.querySelector('.modal').style.display = "none";
    content.style.filter = 'none';
    content.style.pointerEvents = 'auto';
    numbersOnly.value= '';
});


numbersOnly.addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9]/g, '');
});
// * CONTACT MODAL ON/OFF END





