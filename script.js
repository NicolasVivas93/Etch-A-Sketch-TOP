let squaresNum;

const container = document.querySelector(".container")

for (let i = 1; i <= 256 ; i++) {
    const divsGrid = document.createElement('div')
    divsGrid.classList.toggle("box");
    divsGrid.innerText = "dada"
    container.appendChild(divsGrid);
}

const button = document.querySelector('button');
button.addEventListener('click', () => {
    squaresNum = prompt("Squares per side: ")
    createGrid(squaresNum)
});

function createGrid(num) {
    for (let i = 1; i <= (num * num); i++) {
        const divsGrid2 = document.createElement('div')
        divsGrid2.classList.toggle("box");
        divsGrid2.innerText = "dada" 
        container.appendChild(divsGrid2);
    }
}

console.log(container)

const boxes = document.querySelectorAll(".box");
boxes.forEach(box => box.addEventListener("mouseover", () => {
    box.classList.add("change")
}));

