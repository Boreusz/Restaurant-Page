const contactDisplay = (() => {
    const render = (container) => {
        //general wrapper for both divs holding essential informations
        const contactWrapper = document.createElement("div");
        contactWrapper.style.display = "flex";
        contactWrapper.style.justifyContent = "space-evenly";
        //title of the page
        const title = document.createElement("h2")
        title.textContent = "Contact Us via:"
        title.style.textAlign = "center";
        container.appendChild(title);
        //form
        const formTitle = document.createElement("h3");
        formTitle.textContent = "Form";
        formTitle.style.textAlign = "center"
        const formWrapper = document.createElement("div");
        const form = document.createElement("form");
        form.style.display = "flex";
        form.style.flexDirection = "column";
        //creating and appending created form parts
        form.appendChild(formTitle);
        inputCreator(form,"text", "name", "Write your name");
        inputCreator(form, "email", "mail", "Adress email");
        textAreaCreator(form);
        inputCreator(form, "submit", "Submit", "Submit", "200px");
        //other informations like Phone Number etc.
        const otherWrapper= document.createElement("div");
        const phoneTitle = document.createElement("h3");
        phoneTitle.textContent = "Telephone"
        phoneTitle.style.textAlign = "center";
        const number = document.createElement("h4");
        const link = document.createElement("a");
        link.setAttribute("href", "tel: +48-125-535-999");
        link.textContent = "+48 125 535 999";
        link.style.color = "black"
        number.appendChild(link);
        //appending all elements
        otherWrapper.appendChild(phoneTitle);
        otherWrapper.appendChild(number);
        formWrapper.appendChild(form);
        contactWrapper.appendChild(formWrapper);
        contactWrapper.appendChild(otherWrapper);
        container.appendChild(contactWrapper);
    }
    const inputCreator = (container, type, id, placeholder, width = "300px") => {
        const input = document.createElement("input");
        input.style.margin = "5px 0";
        input.style.height = "40px"
        input.style.width = width;
        input.setAttribute("type", type);
        input.setAttribute("placeholder", placeholder);
        input.setAttribute("id", id);
        if(type === "submit"){
            input.setAttribute("value", placeholder);
            input.style.margin = "5px auto"
        }
        container.appendChild(input);
    }
    const textAreaCreator = (container) => {
        const textArea = document.createElement("textarea");
        textArea.style.height = "200px";
        textArea.style.width = "314px";
        textArea.style.margin = "5px 0"
        textArea.setAttribute("placeholder", "What you would like to know or" +" \nDo you have any complaints?");
        textArea.setAttribute("id", "placeholder");
        container.appendChild(textArea);
    }
    return {render}
})();
export {contactDisplay};