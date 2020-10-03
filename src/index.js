import {aboutUsDisplay} from "./aboutUs.js";
import {menuDisplay} from "./menu.js";
import {contactDisplay} from "./contact.js";

const container = document.querySelector("#content");
const logo = document.createElement('div');
const navi = document.createElement('div');
const main = document.createElement('div');
const footer = document.createElement('div');
//logo styling
logo.setAttribute('id', 'logo');
logo.style.width = "800px"
logo.style.margin = "20px auto";
logo.style.textAlign = "center"
//logo content and content styling
const logoLink = document.createElement('span');
logoLink.textContent = "Pizza Palace";
logoLink.style.fontSize = "40px";
logoLink.style.fontWeight = "700";
logoLink.style.cursor = "default";
logoLink.textContent = "Pizza Palace";
//appending logo & it's content
logo.appendChild(logoLink);
container.appendChild(logo);
//navi styling
navi.setAttribute('id', 'navi-container');
navi.style.width = "600px";
navi.style.margin = "20px auto";
//navi content and styling
const naviWrapper = document.createElement("navi");
naviWrapper.style.width = "100%"
naviWrapper.style.display = "flex";
naviWrapper.style.justifyContent = "space-evenly"
naviWrapper.style.fontWeight = "500";
naviWrapper.style.fontSize = "24px"
const aboutUs = document.createElement("span");
aboutUs.setAttribute('id', 'about-us');
aboutUs.textContent = "About Us";
aboutUs.style.cursor = "pointer";
const menu = document.createElement("span");
menu.setAttribute('id', 'menu');
menu.textContent = "Menu";
menu.style.cursor = "pointer";
const contact = document.createElement("span");
contact.setAttribute('id', 'contact');
contact.textContent = "Contact";
contact.style.cursor = "pointer";
//appending navi & it's content
naviWrapper.appendChild(aboutUs);
naviWrapper.appendChild(menu);
naviWrapper.appendChild(contact);
navi.appendChild(naviWrapper);
container.appendChild(navi);
//main styling
main.setAttribute('id', 'main')
main.style.width = "800px";
main.style.margin = "0 auto"
//appending main
container.appendChild(main);
//footer styling and content
footer.setAttribute('id', 'footer');
footer.style.position = "absolute";
footer.style.width = "100%";
footer.style.height = "20px";
footer.style.padding= "5px 0";
footer.style.bottom = "0";
footer.style.left = "0";
footer.style.textAlign = "center";
footer.innerHTML = "<span>Done by Broreusz</span>";
//appending footer
container.appendChild(footer);
//event listeners for modules
aboutUs.addEventListener('click', () => {
    main.innerHTML = "";
    main.style.cssText = "";
    main.style.width = "800px";
    main.style.margin = "0 auto"
    aboutUsDisplay.render(main);
})
menu.addEventListener('click', () => {
    main.innerHTML = "";
    main.style.cssText = "";
    main.style.width = "800px";
    main.style.margin = "0 auto"
})
contact.addEventListener('click', () => {
    main.innerHTML = "";
    main.style.cssText = "";
    main.style.width = "800px";
    main.style.margin = "0 auto"
})