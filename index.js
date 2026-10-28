let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    // Added rotate after tutorial
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme"
  }
  else {
    document.body.classList.remove("dark-theme")
  }
}

<<<<<<< HEAD
// template_cazyukx
// service_mau411s
// 72GuNLSPH8lOYWafw

=======
>>>>>>> 1be8227b0c816a82cb875010a15ab4815b19adf0
function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
<<<<<<< HEAD
      "service_mau411s",
      "template_cazyukx",
      event.target,
      "72GuNLSPH8lOYWafw"
=======
      "service_80ih0if",
      "template_d9refyl",
      event.target,
      "user_K1PoFs8pB2YVWStDxrUls"
>>>>>>> 1be8227b0c816a82cb875010a15ab4815b19adf0
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
<<<<<<< HEAD
        "The email service is temporarily unavailable. Please contact me directly on nbush71@gmail.com"
=======
        "The email service is temporarily unavailable. Please contact me directly on email@email.com"
>>>>>>> 1be8227b0c816a82cb875010a15ab4815b19adf0
      );
    });
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}
