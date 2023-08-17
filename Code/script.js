let productsData = {}; // Declare and define productsData as an empty object

// Get the background image container
const parallaxBg = document.querySelector('.parallax-bg');

// Listen to the scroll event and adjust the background position
window.addEventListener('scroll', () => {
    // Calculate the parallax effect
    const scrollY = window.scrollY;
    parallaxBg.style.backgroundPositionY = -scrollY * 0.5 + 'px';
});



// var image = document.getElementsByClassName('parallax-bg');
// new simpleParallax(image, {
// 	delay: .6,
// 	transition: 'cubic-bezier(0,0,0,1)'
// });

//Add content below button

const buttons = document.querySelectorAll('.image-item');
const contentItems = document.querySelectorAll('.content-item');

buttons.forEach((button, index) => {
  button.addEventListener('click', function() {
    // Remove the 'active' class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));

    // Add the 'active' class to the clicked button
    this.classList.add('active');

    // Show the corresponding content item and hide others
    contentItems.forEach(item => item.classList.remove('active'));
    contentItems[index].classList.add('active');
  });
});

//Add content below button

const infobuttons = document.querySelectorAll('.dropdown-button');
const infocontents = document.querySelectorAll('.dropdown-content');

infobuttons.forEach((button, index) => {
  button.addEventListener('click', function() {
    // Toggle the 'active' class on the clicked button
    this.classList.toggle('active');

    // Toggle the visibility of the associated content
    infocontents[index].classList.toggle('active');
  });
});

//Add content below button

const productbuttons = document.querySelectorAll('.product-dropdown-button');
const productcontents = document.querySelectorAll('.product-dropdown-content');

productbuttons.forEach((button, index) => {
  button.addEventListener('click', function() {
    // Toggle the 'active' class on the clicked button
    this.classList.toggle('active');

    // Toggle the visibility of the associated content
    productcontents[index].classList.toggle('active');
  });
});

//Scroll down

function scrollDown() {
  window.scrollTo({
    top: 600,
    behavior: 'smooth'
  });
}

const scrollButtons = document.getElementsByClassName('image-item');
for (let i = 0; i < scrollButtons.length; i++) {
  scrollButtons[i].addEventListener('click', scrollDown);
}


// Fetch the JSON data and call populateProducts

fetch("products.json")
 .then((response) => response.json())
 .then((data) => {
   productsData = data; // Store the fetched data in productsData
   populateProducts(); // Call populateProducts after data is fetched
 })
 .catch((error) => console.error("Error fetching JSON:", error));
