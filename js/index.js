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

const navLinks = document.querySelectorAll('nav a');
const ctaSection = document.querySelector('.cta-text')
const ctaSectionHeader = ctaSection.querySelector('h1')
const ctaSectionButton = ctaSection.querySelector('button')
const ctaImg = document.querySelector('#cta-img')
const topContent = document.querySelector('.top-content div')
const topContentHeader = topContent.querySelector('h4')
const topContentParagraph = topContent.querySelector('p')
const topContent2 = topContent.nextElementSibling
const topContentHeader2 = topContent2.querySelector('h4')
const topContentParagraph2 = topContent2.querySelector('p')
const mainContentImg = document.querySelector('.main-content img')
const bottomContent1 = document.querySelector('.bottom-content div')
const bottomContent2 = bottomContent1.nextElementSibling
const bottomContent3 = bottomContent2.nextElementSibling
const bottomContentHeader1 = bottomContent1.querySelector('h4')
const bottomContentParagraph1 = bottomContent1.querySelector('p')
const bottomContentHeader2 = bottomContent2.querySelector('h4')
const bottomContentParagraph2 = bottomContent2.querySelector('p')
const bottomContentHeader3 = bottomContent3.querySelector('h4')
const bottomContentParagraph3 = bottomContent3.querySelector('p')
const contactContainer = document.querySelector('.contact')
const contactContainerHeader = contactContainer.querySelector('h4')
const contactContainerParagraph1 = contactContainer.querySelector('p')
const contactContainerParagraph2 = contactContainer.querySelector('p:nth-child(3)')
const contactContainerParagraph3 = contactContainer.querySelector('p:nth-child(4)')
const footer = document.querySelector('footer p')



for(let i = 0; i < navLinks.length; i++){
  let num = i;
  i++;
  navLinks[num].textContent = siteContent["nav"][`nav-item-${i}`];
  i--;
}

navLinks.forEach( item => item.style.color = 'green' )


ctaSectionHeader.textContent = siteContent['cta']['h1']
ctaSectionButton.textContent = siteContent['cta']['button']
ctaImg.src = siteContent['cta']['img-src'];

topContentHeader.textContent = siteContent['main-content']['features-h4']
topContentParagraph.textContent = siteContent['main-content']['features-content']
topContentHeader2.textContent = siteContent['main-content']['about-h4']
topContentParagraph2.textContent = siteContent['main-content']['about-content']

mainContentImg.src = siteContent['main-content']['middle-img-src'];

bottomContentHeader1.textContent = siteContent['main-content']['services-h4']
bottomContentParagraph1.textContent = siteContent['main-content']['services-content']
bottomContentHeader2.textContent = siteContent['main-content']['product-h4']
bottomContentParagraph2.textContent = siteContent['main-content']['product-content']
bottomContentHeader3.textContent = siteContent['main-content']['vision-h4']
bottomContentParagraph3.textContent = siteContent['main-content']['vision-content']

contactContainerHeader.textContent = siteContent['contact']['contact-h4']
contactContainerParagraph1.textContent = siteContent['contact']['address']
contactContainerParagraph2.textContent = siteContent['contact']['phone']
contactContainerParagraph3.textContent = siteContent['contact']['email']

footer.textContent = siteContent['footer']['copyright']

const navLink1 = document.createElement('a')
navLink1.textContent = "blog"
navLink1.href = '#'
const navLink2 = document.createElement('a')
navLink2.textContent = "extra"
navLink2.href = '#'

const navItems = document.querySelector('nav')
navItems.appendChild(navLink2)
navItems.prepend(navLink1)

navLink1.style.color = 'green'
navLink2.style.color = 'green'

