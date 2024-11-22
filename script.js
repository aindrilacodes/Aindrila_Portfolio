//sidemenu 
let sidemenu=document.getElementById("sidemenu")
function openmenu(){
  sidemenu.style.right="0"
}
function closemenu(){
  sidemenu.style.right="-200px"
}
// skills and eduaction toggling
let tablinks=document.getElementsByClassName("tab-links")
let tabcontents=document.getElementsByClassName("tab-contents")
function opentab(tabname){
for(tablink of tablinks){
  tablink.classList.remove("active-link")
}
for(tabcontent of tabcontents){
  tabcontent.classList.remove("active-tab")
}
event.currentTarget.classList.add("active-link")
document.getElementById(tabname).classList.add("active-tab")
}


// Filtering projects by category
document.querySelectorAll('.category-btn').forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    
 
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');


    document.querySelectorAll('.work').forEach(work => {
      if (category === 'all' || work.getAttribute('data-category') === category) {
        work.style.display = 'block';
      } else {
        work.style.display = 'none';
      }
    });
  });
});
function showToast(message, type) {
  const toast = document.createElement('div');
  toast.classList.add('toast', type);
  toast.textContent = message;

  
  const container = document.getElementById('toast-container');
  container.appendChild(toast);

  
  setTimeout(() => {
    container.removeChild(toast);
  }, 4000); 
}

function handleSubmit(event) {
  event.preventDefault(); 
 
  const form = event.target;
  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
     
      form.reset();
      showToast("Your message has been sent successfully!", "success");
    } else {
      showToast("There was an issue sending your message. Please try again.", "error");
    }
  })
  .catch(error => {
    showToast("An error occurred. Please try again later.", "error");
    console.error("Error:", error);
  });
}

