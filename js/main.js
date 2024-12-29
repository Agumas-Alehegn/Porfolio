document.addEventListener("DOMContentLoaded", function () {
  const texts = [
    "Website Developer",
    "Website Designer",
    "Freelancer",
    "API Developer",
  ];
  const speed = 100; // Typing speed in milliseconds
  let currentTextIndex = 0;
  const element = document.getElementById("typewriter-text");

  function typeWriter() {
    const text = texts[currentTextIndex];
    let i = 0;
    element.innerHTML = ""; // Clear the element before typing new text

    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        setTimeout(erase, 1000); // Pause before erasing
      }
    }

    function erase() {
      if (i >= 0) {
        const newText = text.substring(0, i - 1);
        element.innerHTML = newText;
        i--;
        setTimeout(erase, speed / 2);
      } else {
        currentTextIndex = (currentTextIndex + 1) % texts.length; // Move to the next text
        setTimeout(typeWriter, speed); // Start typing the next text
      }
    }

    type();
  }

  typeWriter(); // Start the typing animation
});
// navbar scroll
window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  if (window.scrollY > 25) {
    navbar.classList.remove("navbar-transparent");
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.add("navbar-transparent");
    navbar.classList.remove("navbar-fixed");
  }
});
const successElement = document.getElementById("success");
const failureElement = document.getElementById("failure");
document
  .getElementById("contact_form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      successElement.textContent = "Your message has been sent!";
      setTimeout(() => {
        successElement.textContent = "";
      }, 2000);
      form.reset();
    } else {
      failureElement.textContent =
        "Oops! There was a problem submitting your form.";
      setTimeout(() => {
        failureElement.textContent = " ";
      }, 2000);
    }
  });

window.addEventListener("load", function () {
  // Hide the spinner once the page is fully loaded
  document.querySelector(".spinner").style.display = "none";
});
