document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector('.contact-image-text');
    textElement.classList.remove('hidden');
});


const form = document.getElementById('ft-form');
const submitButton = document.getElementById('submit-btn');

// Add a change event listener to the form
form.addEventListener('input', () => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
//   const message = document.getElementById('message').value;
  

  if (name && email) {
    submitButton.style.backgroundColor="rgb(204, 0, 0)";
    submitButton.style.color= 'aliceblue';
  } else {
    submitButton.style.backgroundColor='intial';
    
  }
});