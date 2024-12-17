//Menu switch
// Wait for the document to be fully loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Select the menu items and content sections
  const homeLink = document.getElementById("homeLink");
  const homePage = document.getElementById("homePage");

  const libraryLink = document.getElementById("libraryLink");
  const libraryPage = document.getElementById("libraryPage");
  const fullLibraryPage = document.getElementById("fullLibraryPage");

  const bookShop = document.getElementById("bookShop");
  const bookShopLink = document.getElementById("bookShopLink");

  const savePage = document.getElementById("savePage");
  const saveLink = document.getElementById("saveLink");
  
  const history = document.getElementById("history");
  const BuysellLink = document.getElementById("BuysellLink");
  const ReadLink = document.getElementById("ReadLink");

  //child navbar
  const btnSellbook = document.getElementById("btnSellbook");
  const onelink = document.getElementById("onelink");
  const twolink = document.getElementById("twolink");
  const threelink = document.getElementById("threelink");
  const fourlink = document.getElementById("fourlink");
  const boxone= document.getElementById("boxone");
  const boxtwo = document.getElementById("boxtwo");
  const boxthree = document.getElementById("boxthree");
  const boxfour = document.getElementById("boxfour");
 
  fullLibraryPage.style.display = "none";
  libraryPage.style.display = "none";
  savePage.style.display = "none";
  bookShop.style.display = "none";
  history.style.display = "none";
  // Handle click event for the Home link
  homeLink.addEventListener("click", function () {
    // Show Home Page and hide Library Page
    
    homePage.style.display = "block";
    fullLibraryPage.style.display = "none";
    libraryPage.style.display = "none";
    boxone.style.display = "none";
    boxtwo.style.display = "none";
    boxthree.style.display = "none";
    boxfour.style.display = "none";
    slidebox.style.display = "none";
    bookShop.style.display = "none";
  });

  // Handle click event for the Library link
  libraryLink.addEventListener("click", function () {
    // Show Library Page and hide Home Page
    fullLibraryPage.style.display = "block";
    homePage.style.display = "none";
    savePage.style.display = "none";
    bookShop.style.display = "none";
    history.style.display = "none";
    libraryPage.style.display = "block";
    boxone.style.display = "block";
    boxtwo.style.display = "none";
    boxthree.style.display = "none";
    boxfour.style.display = "none";
    
  });
  bookShopLink.addEventListener("click", function(){
    bookShop.style.display = "block";
    homePage.style.display = "none";
    savePage.style.display = "none";
    history.style.display = "none";
    fullLibraryPage.style.display = "none";
    libraryPage.style.display = "none";
    boxone.style.display = "none";
    boxtwo.style.display = "none";
    boxthree.style.display = "none";
    boxfour.style.display = "none";
  });
  saveLink.addEventListener("click", function(){
    bookShop.style.display = "none";
    homePage.style.display = "none";
    savePage.style.display = "block";
    history.style.display = "none";
    fullLibraryPage.style.display = "none";
    libraryPage.style.display = "none";
    boxone.style.display = "none";
    boxtwo.style.display = "none";
    boxthree.style.display = "none";
    boxfour.style.display = "none";
  });
  ReadLink.addEventListener("click", function(){
    bookShop.style.display = "none";
    homePage.style.display = "none";
    savePage.style.display = "none";
    history.style.display = "block";
    fullLibraryPage.style.display = "none";
    libraryPage.style.display = "none";
    boxone.style.display = "none";
    boxtwo.style.display = "none";
    boxthree.style.display = "none";
    boxfour.style.display = "none";
  });
  BuysellLink.addEventListener("click", function(){
    bookShop.style.display = "none";
    homePage.style.display = "none";
    savePage.style.display = "none";
    history.style.display = "block";
    fullLibraryPage.style.display = "none";
    libraryPage.style.display = "none";
    boxone.style.display = "none";
    boxtwo.style.display = "none";
    boxthree.style.display = "none";
    boxfour.style.display = "none";
  });
// Library nav link menu
  onelink.addEventListener("click",function(){
    boxone.style.display = "block";
    boxtwo.style.display = "none";
    boxthree.style.display = "none";
    boxfour.style.display = "none";
  });
  twolink.addEventListener("click",function(){
    boxone.style.display = "none";
    boxtwo.style.display = "block";
    boxthree.style.display = "none";
    boxfour.style.display = "none";
  });
  threelink.addEventListener("click",function(){
    boxone.style.display = "none";
    boxtwo.style.display = "none";
    boxthree.style.display = "block";
    boxfour.style.display = "none";
  });
  fourlink.addEventListener("click",function(){
    boxone.style.display = "none";
    boxtwo.style.display = "none";
    boxthree.style.display = "none";
    boxfour.style.display = "block";
  });


});

//save card

const saveButtons = document.querySelectorAll('.save-button');
saveButtons.forEach(button => {
  button.addEventListener('click', function () {
    const theCard = this.parentElement; // Get the parent card
    const savedCard = theCard.cloneNode(true); // Clone the card
    savePage.querySelector('.save-button').remove(); // Remove the save button from the cloned card

    // Add the cloned card to the saved section
    savePage.appendChild(savedCard);

    // Optional: Disable the Save button on the original card
    this.disabled = true;
    this.textContent = 'Saved';
  });
});



// document.getElementById("").style.fontFamily = "Impact,Charcoal,sans-serif";
function showAlert(message, type = 'success') {
  // Create the alert container if it doesn't exist
  let alertContainer = document.getElementById('floatingAlertContainer');
  if (!alertContainer) {
    alertContainer = document.createElement('div');
    alertContainer.id = 'floatingAlertContainer';
    alertContainer.style.position = 'fixed';
    alertContainer.style.bottom = '20px';
    alertContainer.style.right = '20px';
    alertContainer.style.zIndex = '1050';
    alertContainer.style.width = '300px';
    alertContainer.style.maxWidth = '90%';
    alertContainer.style.pointerEvents = 'none';
    alertContainer.style.fontFamily = "Kantumruy Pro";
    document.body.appendChild(alertContainer);
  }

  // Create the alert element
  const alertElement = document.createElement('div');
  alertElement.className = `alert alert-${type} alert-dismissible fade show`;
  alertElement.style.pointerEvents = 'auto';
  alertElement.style.marginBottom = '10px';
  alertElement.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  `;

  // Append the alert to the container
  alertContainer.appendChild(alertElement);

  // Auto-remove the alert after 5 seconds
  setTimeout(() => {
    alertElement.classList.remove('show');
    alertElement.addEventListener('transitionend', () => alertElement.remove());
  }, 5000);
}

// Login and Logout Logic
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  if (username) {
    localStorage.setItem('username', username);
    updateUI(username);
    showAlert(`Welcome, ${username}! ការចុះឈ្មោះទទួលបានជោគជ័យ`, 'primary');
    bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
  }
});

document.querySelector('.btn-outline-danger').addEventListener('click', () => {
  localStorage.removeItem('username');
  resetUI();
  showAlert('You have logged out successfully.', 'info');
});

// Handle Order and Save Button Clicks
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('action-button')) {
    const username = localStorage.getItem('username');
    if (!username) {
      bootstrap.Modal.getOrCreateInstance(document.getElementById('loginModal')).show();
      e.preventDefault();
    } else if (e.target.classList.contains('buy-button')) {
      showAlert('Your order has been placed successfully! បញ្ជាទិញរួចរាល់', 'primary');
    } else if (e.target.classList.contains('save-button')) {
      showAlert('Book saved successfully! សៀវភៅត្រូវបានរក្សាទុក', 'primary');
    }
  }
});

// UI Updates
function updateUI(username) {
  const loginButton = document.getElementById('loginButton');
  if (loginButton) {
    loginButton.textContent = username;
    loginButton.removeAttribute('data-bs-toggle');
    loginButton.removeAttribute('data-bs-target');
  }
  const accountLink = document.getElementById('accountLink');
  if (accountLink) accountLink.innerHTML = `<i class="fa-solid fa-user"></i> ${username}`;

  const navToggler = document.querySelector('.navbar-toggler');
  if (navToggler) navToggler.style.display = 'block'; // Show navbar toggler when logged in

  const leaveButton = document.querySelector('.btn-outline-danger');
  if (leaveButton) leaveButton.style.display = 'inline-block';
}

function resetUI() {
  const loginButton = document.getElementById('loginButton');
  if (loginButton) {
    loginButton.textContent = 'ចុះឈ្មោះ';
    loginButton.setAttribute('data-bs-toggle', 'modal');
    loginButton.setAttribute('data-bs-target', '#loginModal');
  }
  const accountLink = document.getElementById('accountLink');
  if (accountLink) accountLink.innerHTML = `<i class="fa-solid fa-user"></i> គណនី`;

  const navToggler = document.querySelector('.navbar-toggler');
  if (navToggler) navToggler.style.display = 'none'; // Hide navbar toggler when logged out

  const leaveButton = document.querySelector('.btn-outline-danger');
  if (leaveButton) leaveButton.style.display = 'none';

  resetActionButtons();
}

// Reset Action Buttons
function resetActionButtons() {
  document.querySelectorAll('.action-button').forEach((button) => {
    if (button.classList.contains('buy-button')) {
      button.textContent = 'បញ្ជាទិញ';
    } else if (button.classList.contains('save-button')) {
      button.innerHTML = '<i class="fa-solid fa-bookmark"></i>';
    }
  });
}

// Initialize UI on Load
document.addEventListener('DOMContentLoaded', () => {
  const username = localStorage.getItem('username');
  if (username) {
    updateUI(username);
  } else {
    resetUI();
  }
});
