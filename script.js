let productsData = {}; // Declare and define productsData as an empty object

//Add dark mode

var icon = document.getElementById("darkmode-icon");

if(localStorage.getItem("theme") == null){
  localStorage.setItem("theme", "light");
}

let localData = localStorage.getItem("theme");

if(localData == "light"){
  document.body.classList.remove("dark-theme");
  icon.src = "Content/MoonIcon.svg";
}else if(localData == "dark"){
  document.body.classList.add("dark-theme");
  icon.src = "Content/SunIcon.svg";

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

var pathname = window.location.pathname;

var corevalueicon1 = document.getElementById("corevalue-icon1");
var corevalueicon2 = document.getElementById("corevalue-icon2");
var corevalueicon3 = document.getElementById("corevalue-icon3");

if(pathname == "/about.html"){
  if(localData == "light"){
    document.body.classList.remove("dark-theme");
    icon.src = "Content/MoonIcon.svg";
    corevalueicon1.src = "Content/VirtueOverProfit.png";
    corevalueicon2.src = "Content/HealingCommunity.png";
    corevalueicon3.src = "Content/PeaceAndPurpose.png";
  }else if(localData == "dark"){
    document.body.classList.add("dark-theme");
    icon.src = "Content/SunIcon.svg";
    corevalueicon1.src = "Content/VirtueOverProfitWhite.png";
    corevalueicon2.src = "Content/HealingCommunityWhite.png";
    corevalueicon3.src = "Content/PeaceAndPurposeWhite.png";
  }

  icon.onclick = function(){
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
      localStorage.setItem("theme", "dark");
      icon.src = "Content/SunIcon.svg";
      corevalueicon1.src = "Content/VirtueOverProfitWhite.png";
      corevalueicon2.src = "Content/HealingCommunityWhite.png";
      corevalueicon3.src = "Content/PeaceAndPurposeWhite.png";
    }else{
      localStorage.setItem("theme", "light");
      icon.src = "Content/MoonIcon.svg";
      corevalueicon1.src = "Content/VirtueOverProfit.png";
      corevalueicon2.src = "Content/HealingCommunity.png";
      corevalueicon3.src = "Content/PeaceAndPurpose.png";
    }
  }
}

var socialicon1 = document.getElementById("social-icon1");
var socialicon2 = document.getElementById("social-icon2");
var socialicon3 = document.getElementById("social-icon3");
var socialicon4 = document.getElementById("social-icon4");

if(pathname == "/contact.html"){
  if(localData == "light"){
    document.body.classList.remove("dark-theme");
    icon.src = "Content/MoonIcon.svg";
    socialicon1.src = "Content/FacebookIconGreen.svg";
    socialicon2.src = "Content/InstagramIconGreen.svg";
    socialicon3.src = "Content/DiscordIconGreen.svg";
    socialicon4.src = "Content/YouTubeIconGreen.svg";
  }else if(localData == "dark"){
    document.body.classList.add("dark-theme");
    icon.src = "Content/SunIcon.svg";
    socialicon1.src = "Content/FacebookIconWhite.svg";
    socialicon2.src = "Content/InstagramIconWhite.svg";
    socialicon3.src = "Content/DiscordIconWhite.svg";
    socialicon4.src = "Content/YouTubeIconWhite.svg";
  }

  icon.onclick = function(){
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
      localStorage.setItem("theme", "dark");
      icon.src = "Content/SunIcon.svg";
      socialicon1.src = "Content/FacebookIconWhite.svg";
      socialicon2.src = "Content/InstagramIconWhite.svg";
      socialicon3.src = "Content/DiscordIconWhite.svg";
      socialicon4.src = "Content/YouTubeIconWhite.svg";
    }else{
      localStorage.setItem("theme", "light");
      icon.src = "Content/MoonIcon.svg";
      socialicon1.src = "Content/FacebookIconGreen.svg";
      socialicon2.src = "Content/InstagramIconGreen.svg";
      socialicon3.src = "Content/DiscordIconGreen.svg";
      socialicon4.src = "Content/YouTubeIconGreen.svg";
    }
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