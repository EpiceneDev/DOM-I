const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Navigation Bar
const links = document.getElementsByTagName("a");
console.log("links: ", links);
const navArray = Array.from(links).forEach((a, id) => {
  a.textContent = siteContent["nav"][`nav-item-${id +1}`]
});

// Create new elements and their content
let createLogin = document.createElement("a");
createLogin.textContent = "Login";
createLogin.setAttribute('href', "#");
let createHelp = document.createElement("a");
createHelp.textContent = "Help";
createHelp.setAttribute('href', "#");

//Add child at start
document.querySelector("nav").prepend(createLogin);

//add child at end
document.querySelector('nav').append(createHelp);

// CTA ...center text's headline, image and button

document.querySelector(".cta-text h1").textContent = siteContent["cta"]["h1"];
document.querySelector(".cta-text button").textContent = siteContent["cta"]["button"];
document.getElementById("cta-img").setAttribute('src', siteContent["cta"]["img-src"]);

// Main Content TOP
document.querySelector('.top-content .text-content:nth-child(1) h4').textContent = siteContent['main-content']["features-h4"];
document.querySelector('.top-content .text-content:nth-child(1) p').textContent = siteContent['main-content']["features-content"];
document.querySelector('.top-content .text-content:nth-child(2) h4').textContent = siteContent['main-content']["about-h4"];
document.querySelector('.top-content .text-content:nth-child(2) p').textContent = siteContent['main-content']["about-content"];

// Main Content PICTURE
let pic = document.getElementById("middle-img");
pic.setAttribute('src', siteContent["main-content"]["middle-img-src"])


// Main Content BOTTOM
document.querySelector('.bottom-content .text-content:nth-child(1) h4').textContent = siteContent['main-content']["services-h4"];
document.querySelector('.bottom-content .text-content:nth-child(1) p').textContent = siteContent['main-content']["services-content"];
document.querySelector('.bottom-content .text-content:nth-child(2) h4').textContent = siteContent['main-content']["product-h4"];
document.querySelector('.bottom-content .text-content:nth-child(2) p').textContent = siteContent['main-content']["product-content"];
document.querySelector('.bottom-content .text-content:nth-child(3) h4').textContent = siteContent['main-content']["vision-h4"];
document.querySelector('.bottom-content .text-content:nth-child(3) p').textContent = siteContent['main-content']["vision-content"];

// Contact
let contactArray = Object.values(siteContent['contact'])
console.log(contactArray);
for (i = 0; i < contactArray.length; i++) {
  document.querySelector(`.contact *:nth-child(${i + 1})`).textContent = contactArray[i]  
}

// Footer
document.querySelector("footer p").textContent = siteContent["footer"]["copyright"];

// Change Nav text to green
for (i = 0; i < Array.from(document.querySelectorAll('nav a')).length; i++) {
  document.querySelectorAll('nav a')[i].style.color = 'green';
};

// STRETCH Style
// document.querySelector(".container").style("max-width") = 1000px;
// document.querySelector('footer').style("color") = "red";
document.querySelector('footer').setAttribute("style", "color:red; border: 1px solid grey; padding: 3px;");