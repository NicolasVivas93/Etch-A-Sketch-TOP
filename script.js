const container = document.querySelector(".container")

let squaresNum = 16;
createGrid(squaresNum)

function createGrid(num) {
    for (let i = 1; i <= (num * num); i++) {
        const divsGrid = document.createElement('div')
        divsGrid.classList.toggle("box");
        divsGrid.innerText = "dada" 
        container.appendChild(divsGrid);
    }
}


const childs = document.querySelectorAll(".box")
console.log(childs)

const button = document.querySelector('button');
button.addEventListener('click', () => {
    childs.forEach(child => {
        container.removeChild(child)
    })
    squaresNum = prompt("Squares per side: ")
    createGrid(squaresNum)
});


const boxes = document.querySelectorAll(".box");
boxes.forEach(box => box.addEventListener("mouseover", () => {
    box.classList.add("change")
}));

