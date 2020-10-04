const menuDisplay = (() => {
    const render = (container) => {
        const intro = document.createElement("p");
        intro.textContent = "Our Menu changes every week, on site we show only regulars, for more information, Contact Us!";
        intro.style.fontStyle = "italic";
        intro.style.marginTop = "40px"
        const subtitle = document.createElement("h3");
        subtitle.textContent = "Classics";
        container.appendChild(subtitle);
        const list = document.createElement("ol")
        menuPosition(list, "Pipita", "9$", "Cream sauce, Mozzarela, Italian Mortadella, Courgette, Maize, Spicy pepper")
        menuPosition(list, "Diavola", "7$", "Tomato sauce, Mozzarela, Spianata Piccante, Chilli pepper, ")
        menuPosition(list, "Pepperoni", "6$", "Tomato sauce, Mozzarela, Salami, Chilli")
        menuPosition(list, "Buratta", "5$", "Cream sauce, Buratta Cheese, Eggplant")
        menuPosition(list, "Al Tono", "8$", "Tomato sauce, Mozzarela, Tuna, Onion, Garlic, Maize")
        container.appendChild(list);
        container.appendChild(intro);
    }
    const menuPosition = (container, title, price, ingredient) => {
        const position = document.createElement("li");
        position.style.width = "400px"
        const posTitle = document.createElement("h4");
        posTitle.textContent = "" + title +  "\u00A0\u00A0\u00A0-\u00A0\u00A0" + price;
        posTitle.style.marginBottom = "10px"
        position.appendChild(posTitle);
        if(ingredient != ""){
            const ingredients  = document.createElement ("p");
            ingredients.style.fontSize = "12px";
            ingredients.style.margin = " 0"
            ingredients.style.color = "gray";
            ingredients.textContent =  ingredient;
            position.appendChild(ingredients);
        }
        container.appendChild(position);
    }
    return {render}
})();
export { menuDisplay }