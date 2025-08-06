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
const confirmSubmit = document.querySelector("#confirm-submit");
const closeModalIcon = document.querySelector("#close-button");
const content = document.getElementById('webContents');
const numbersOnly = document.getElementById('numbersOnly');
const falsee = document.querySelector(".falsee");
const truee = document.querySelector(".truee");
const verificationNotice = document.querySelector(".verification-notice");
const verificationNoticeBtn = document.querySelector("#btn-inform")


submitModal.addEventListener('click', function(e) {
  e.preventDefault(); // varsayılan davranışı durdur
  modal.style.display = 'flex';
  content.style.filter = 'blur(5px)';
  content.style.pointerEvents = 'none'; 
});

confirmSubmit.addEventListener('click', function ()  {
    if (numbersOnly.value.length < 6) {
        console.log("Lütfen Kod Giriniz.");
        numbersOnly.value = '';

        truee.style.display = "none";
        falsee.style.display = "";
        falsee.innerHTML=("Kod yanlış");
    } else {
        console.log("Kod Doğru")
        verificationNotice.style.display = "flex";
        modal.style.display = 'flex';
        content.style.filter = 'blur(5px)';
        numbersOnly.value = '';
        falsee.style.display = "none";
        truee.style.display = "";
        document.querySelector('.modal').style.display = "none";
    }
});

verificationNoticeBtn.addEventListener('click', () => {
    verificationNotice.style.display = "none";
    content.style.filter = 'none';
    content.style.pointerEvents = 'auto';
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





