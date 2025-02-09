const scriptURL = 'https://script.google.com/macros/s/AKfycbxouS_rvOX5g59axJc4HBuIV7HszZmF-Vg_lt_US7EFxEJ-ZY2sDGxSrarUDKWz8u3C/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})