const container = document.querySelector(".container")

for (let i = 1; i <= 256; i++) {
    const divsGrid = document.createElement('div')
    divsGrid.classList.toggle("box");
    divsGrid.innerText = "dada"
    container.appendChild(divsGrid);
}

console.log(container)
