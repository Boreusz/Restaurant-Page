const aboutUsDisplay = (() => {
    const render = (container) => {
        const title = document.createElement("h2");
        title.textContent = "Pizza Palace have a mission"
        const paragraph = document.createElement("p");
        paragraph.textContent = "To make people aware how the real pizza taste like."
        container.appendChild(title);
        container.appendChild(paragraph);
    }
    return {render}
})();
export { aboutUsDisplay}