let productsData = {}; // Declare and define productsData as an empty object

//Add dark mode

var corevalue1 = document.getElementById("corevalue-icon1")
var corevalue2 = document.getElementById("corevalue-icon2")
var corevalue3 = document.getElementById("corevalue-icon3")
var social1 = document.getElementById("social-icon1")
var social2 = document.getElementById("social-icon2")
var social3 = document.getElementById("social-icon3")
var social4 = document.getElementById("social-icon4")
var icon = document.getElementById("darkmode-icon");

if(localStorage.getItem("theme") == null){
  localStorage.setItem("theme", "light");
}

let localData = localStorage.getItem("theme");

if(localData == "light"){
  icon.src = "Content/DiscordIconWhite.svg";
  document.body.classList.remove("dark-theme");
}else if(localData == "dark"){
  icon.src = "Content/InstagramIconWhite.svg";
  document.body.classList.add("dark-theme");
}

icon.onclick = function(){
  document.body.classList.toggle("dark-theme")
  if(document.body.classList.contains("dark-theme")){
    localStorage.setItem("theme", "dark");
    corevalue1.src = "Content/VirtueOverProfitWhite.png";
    corevalue2.src = "Content/HealingCommunityWhite.png";
    corevalue3.src = "Content/PeaceAndPurposeWhite.png";
    social1.src = "Content/FacebookIconWhite.svg";
    social2.src = "Content/InstagramIconWhite.svg";
    social3.src = "Content/DiscordIconWhite.svg";
    social4.src = "Content/YouTubeIconWhite.svg";
    icon.src = "Content/InstagramIconWhite.svg";
  }else{
    localStorage.setItem("theme", "light");
    corevalue1.src = "Content/VirtueOverProfit.png";
    corevalue2.src = "Content/HealingCommunity.png";
    corevalue2.src = "Content/PeaceAndPurpose.png";
    social1.src = "Content/FacebookIconGreen.svg";
    social2.src = "Content/InstagramIconGreen.svg";
    social3.src = "Content/DiscordIconGreen.svg";
    social4.src = "Content/YouTubeIconGreen.svg";
    icon.src = "Content/DiscordIconWhite.svg";
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
