let productsData = {}; // Declare and define productsData as an empty object

//Add dark mode

var icon = document.getElementById("darkmode-icon");

if(localStorage.getItem("theme") == null){
  localStorage.setItem("theme", "light");
}

let localData = localStorage.getItem("theme");

if(localData == "light"){
  icon.src = "Content/MoonIcon.svg";
  document.body.classList.remove("dark-theme");
}else if(localData == "dark"){
  icon.src = "Content/SunIcon.svg";
  document.body.classList.add("dark-theme");
}

icon.onclick = function(){
  document.body.classList.toggle("dark-theme")
  if(document.body.classList.contains("dark-theme")){
    localStorage.setItem("theme", "dark");
    icon.src = "Content/SunIcon.svg";
  }else{
    localStorage.setItem("theme", "light");
    icon.src = "Content/MoonIcon.svg";
  }
}

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
